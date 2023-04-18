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
import { useDispatch } from "react-redux";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
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
      .required("Required")
    }),
    onSubmit: (e) => {
      console.log("formik.values.password", formik.values.password);
      // e.preventDefault();
      try {
        const dataObj = {
          email: formik.values.email,
          isLoggedIn: true,
          userId:1
        };
        dispatch(settingUserLoginData(true,{email:dataObj.email,password: formik.values.password}))
        localStorage.setItem("userData", JSON.stringify(dataObj));
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="lg:w-full h-[calc(100vh-148px)] rounded-[20px] flex flex-col justify-center items-center gap-2 p-4">
        <Heading title="Get Started" />
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
          <Link to="/auth/forgetpassword" className="text-xs font-bold mb-2">
            Forget Password ?
          </Link>
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
