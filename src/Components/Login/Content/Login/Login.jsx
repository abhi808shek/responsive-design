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
  loginUser,
  sendingMailForOtp,
} from "../../../../redux/actionCreators/authActionCreator";
import { toasterFunction } from "../../../Utility/utility";
import { auth } from "../../../../config/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from "react-toastify";
import getErrorMessage from '../../../Utility/firbaseError';
// import { sendOTP } from "./firebase";
// import { onSignInSubmit } from "./firebase_login";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const validateEmail = (email) => {
    return Yup.string().email().isValidSync(email);
  };

  const validatePhone = (phone) => {
    return Yup.number()
      .integer()
      .positive()
      .test((phone) => {
        return phone &&
          phone.toString().length >= 8 &&
          phone.toString().length <= 14
          ? true
          : false;
      })
      .isValidSync(phone);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .test("email", "Email / Phone is invalid", (value) => {
          return validateEmail(value) || validatePhone(parseInt(value ?? "0"));
        }),

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
      try {
        const userCredential = {
          uemail: formik.values.email,
          password: formik.values.password,
          isLoggedIn: true
        };
         dispatch(loginUser(userCredential)).then((res) => {
          console.log(res);
          toast.success(res.data.message);
          navigate("/select");
          localStorage.setItem("userData", JSON.stringify(userCredential));
         }).catch(err => {
          toast.error(err.response.data.message)
         })
        // dispatch(
        //   settingUserLoginData(true, {
        //     email: dataObj.email,
        //     password: formik.values.password,
        //   })
        // );

        // navigate("/select");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const onForgetPasswordClick = async () => {
    const email = formik.values.email;
    if (email.trim() === "") {
      return toasterFunction("Please Enter Email");
    }
    // if (validateEmail(email) || validatePhone(parseInt(email ?? "0"))) {
    //   return toasterFunction("Invalid  Email..");
    // }
    const mailStatus = await dispatch(checkingIsEmailExist(email));
    if (!mailStatus.status) {
      return toasterFunction(mailStatus.message);
    }
    const data = {
      datetime: Date.now().toString(),
      uemail: mailStatus.data.uemail,
    };
    console.log("AFterrr");
    // sendOTP(formik.values.email)
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
        <div id="sign-in-button"></div>
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
