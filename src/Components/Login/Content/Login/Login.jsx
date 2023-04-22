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
  checkingIsEmailExist,
  matchingOtp,
  sendingMailForOtp,
  settingOtp,
} from "../../../../redux/actionCreators/authActionCreator";
import { toasterFunction } from "../../../Utility/utility";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

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
        navigate("/select");
      } catch (error) {
        console.log(error);
      }
    },
  });
  const { otp } = useSelector((state) => state.authReducer);
  const onForgetPasswordClick = async () => {
    const email = formik.values.email;
    if (email.trim() === "") {
      return toasterFunction("Please Enter Email");
    }
    if (formik.errors.email) {
      return toasterFunction("Invalid  Email..");
    }
    const mailStatus = await dispatch(checkingIsEmailExist(email));
    console.log("mailStatus",mailStatus);
    if (!mailStatus.status) {
      return toasterFunction(mailStatus.message);
    }
    console.log("Before");
      const data = {
        datetime: Date.now().toString(),
        uemail: mailStatus.data.uemail,
      };
      console.log("data",data);
      console.log("AFterrr");
      const otpStatus = await dispatch(sendingMailForOtp(data));
      if (!otpStatus.status) {
       return toasterFunction(otpStatus.message);
      } 
      navigate("/auth/entercode");
      toasterFunction(otpStatus.message);
      
    
  };

  return (
    <>
      {/* padding increased */}
      <div className="lg:w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-2 px-7">
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
        {/* font wight changed */}
        <div className="w-full">
          <div className="text-xs font-bold mb-2">
            <div
              className="text-xs font-semibold mb-2 py-1 cursor-pointer"
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
          {/* color of text changed */}
          <p className="text-xs font-bold text-gray-500 mt-4">
            Don't have an account?
            <Link to="/auth/signup" className="text-[#7991BD] ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
