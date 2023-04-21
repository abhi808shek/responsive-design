import React from "react";
import { Link } from "react-router-dom"; // import the Link component
import Input from "../InputBox/Input";
import Heading from "../Heading/Heading";
import PasswordInput from "../InputBox/PasswordInput";
import Button2 from "../Button/Button2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { settingUserLoginData } from "../../../../redux/actionCreators/userActionCreator";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo.png";
import {
  checkingUserExist,
  sendingMailForOtp,
} from "../../../../redux/actionCreators/authActionCreator";
import { toasterFunction } from "../../../Utility/utility";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const { emailExist, mailSended } = useSelector((state) => state.authReducer);
  console.log("emailExist", emailExist);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('"Email address incorrect. Please Try again"')
        .required("Required"),
      password: Yup.string()
        .min(
          8,
          "Password should be minimum of 8 length characters with one numerical value"
        )
        .matches(passwordRules, {
          message:
            "min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",
        })
        .required("Required"),
    }),
    onSubmit: (e) => {
      console.log("formik.values.password", formik.values.password);
      try {
        const dataObj = {
          email: formik.values.email,
          isLoggedIn: true,
          userId: 1,
        };
        dispatch(
          settingUserLoginData(true, {
            email: dataObj.email,
            password: formik.values.password,
          })
        );
        localStorage.setItem("userData", JSON.stringify(dataObj));
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const onForgetPasswordClick = () => {
    const email = formik.values.email
    dispatch(checkingUserExist(email));
    if (emailExist.status === true) {
      const data = {
        datetime: Date.now().toString(),
        uemail: formik.values.email,
      };
      dispatch(sendingMailForOtp(data));
      if (mailSended.status === true) {
        navigate("/verification");
      } else {
        toasterFunction(mailSended.message);
      }
    } else {
      toasterFunction(emailExist.message);
    }
  };
  return (
    <>
      <div className="lg:w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-2 px-4">
        {/* <Heading title="Get Started" /> */}
        <img src={Logo} alt="" className=" w-[55px] mb-4" />
        <Input
          title="Email or Phone"
          name="email"
          inputValue={formik.values.email}
          errorMessage={formik.errors.email}
          touched={formik.touched.email}
          onHandleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full"
        />
        <PasswordInput
          title="Password"
          name="password"
          inputValue={formik.values.password}
          onHandleChange={formik.handleChange}
          errorMessage={formik.errors.password}
          touched={formik.touched.password}
          onBlur={formik.handleBlur}
          className="w-full"
        />
        <div className="w-full">
          <div
            className="text-xs font-bold mb-2"
            onClick={onForgetPasswordClick}
          >
            Forget Password ?
          </div>
        </div>
        <Button2
          title="Sign In"
          className="w-full"
          onClick={formik.handleSubmit}
        />
        <p className="text-xs font-bold text-[#7B8FA1] mt-4">
          Don't have an account?
          <Link to="/auth/signup" className="text-[#7991BD] ml-2">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
