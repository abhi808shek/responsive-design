import React from "react";
import Input from "../InputBox/Input";
import Button from "../Button/Button1";
import Heading from "../Heading/Heading";
import PasswordInput from "../InputBox/PasswordInput";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Button2 from "../Button/Button2";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { savingNewPassword } from "../../../../redux/actionCreators/authActionCreator";
import { toasterFunction } from "../../../Utility/utility";

const NewPassword = () => {
  const navigate = useNavigate();
  const { emailExist } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol")
        .required("Required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password does not match")
        .required("Required"),
    }),

    onSubmit: async (values) => {
      const dataObj = {
        password: formik.values.password,
        uemail: emailExist.data.uemail,
      };
      console.log("dataObj", dataObj);
      const newPasswordStatus = await dispatch(savingNewPassword(dataObj));

      if (!newPasswordStatus.status) {
        return toasterFunction(newPasswordStatus.message);
      }
      toasterFunction(newPasswordStatus.message);
      navigate("/select");
    },
  });

  return (
    <>
      <div className="w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-3 p-5">
        <Heading title="Create New Password" />
        <p className="text-xs font-bold text-[#7B8FA1] flex items-center self-start ">
          Password Help
          <span
            className="ml-1 mt-0.5"
            title="Password should be minimum of 8 length characters with one numerical value"
          >
            <BsFillQuestionCircleFill />
          </span>
        </p>
        <PasswordInput
          title="Password"
          errorMessage={formik.errors.password}
          name="password"
          inputValue={formik.values.password}
          onHandleChange={formik.handleChange}
          touched={formik.touched.password}
          onBlur={formik.handleBlur}
        />
        <PasswordInput
          title="Confirm Password"
          errorMessage={formik.errors.confirmPassword}
          name="confirmPassword"
          inputValue={formik.values.confirmPassword}
          onHandleChange={formik.handleChange}
          touched={formik.touched.confirmPassword}
          onBlur={formik.handleBlur}
        />
        <Button2
          title="Confirm"
          disabled={!formik.isValid}
          onClick={formik.handleSubmit}
        />
        <Button title="Cancel" path="/" onClick={() => navigate(-1)} />
      </div>
    </>
  );
};

export default NewPassword;
