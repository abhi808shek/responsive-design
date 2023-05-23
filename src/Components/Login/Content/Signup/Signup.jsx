import React, { useEffect, useRef, useState } from "react";
import Input from "../InputBox/Input";
import PasswordInput from "../InputBox/PasswordInput";
import Button2 from "../Button/Button2";
import Heading from "../Heading/Heading";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import { checkingIsEmailExist, saveUserSignupData } from "../../../../redux/actionCreators/authActionCreator";
import { useDispatch } from "react-redux";
import firebaseApp, { auth } from "../../../../config/firebase";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/auth";
import { document } from "postcss";
import { isEmpty, toasterFunction } from "../../../Utility/utility";
import { toast } from "react-toastify";

const Signup = () => {
  const captchaEl = useRef();
  const [state, setState] = useState({});
  const [profileType, setProfileType] = useState("");
  const { showModal, modalType } = state;
  const dispatch = useDispatch();
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const phoneNumberRules = /[0-9]{10}$/;
  const navigate = useNavigate();

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      phone: "",
      termsAndConditions: false,
      profileType: "",
    },
    validationSchema: Yup.object({
      // profile: Yup.string().profileType("Please select profile type.").required("Required"),
      email: Yup.string()
        .when("phone", (phone, schema) => {
          if (!isEmpty(phone)) {
            return schema.notRequired();
          } else {
            return schema.required("email required");
          }
        })
        .email('"Email address incorrect. Please Try again"'),
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
      phone: Yup.string()
        // .min(10, "Phone no is incorrect. Please Try again")
        // .max(10, "Phone no is incorrect. Please Try again")
        .matches(phoneNumberRules, {
          excludeEmptyString: true,
          message: "Please enter a valid phone number"
        }),
      termsAndConditions: Yup.bool().oneOf(
        [true],
        "You need to accept the terms and conditions"
      ),
    }),
    onSubmit: async (event) => {
      const isExist = await checkUserExist(formik.values.email || formik.values.phone);
      if(isExist && formik.values.email){
        return toast.error('Your email already registered with us, please try to login')
      }else if(isExist && formik.values.phone){
        return toast.error('Your phone number already registered with us, please try to login')
      }
      // event.preventDefault();
      captchaEl.current.innerHTML = '';
      if (!profileType) {
        return toasterFunction("Please select profile type");
      }
      const dataObj = {
        datetime: Date.now().toString(),
        profileType: profileType,
        uemail: formik.values.email ? formik.values.email : formik.values.phone,
        password: formik.values.password,
      };
      const response = await dispatch(saveUserSignupData(dataObj));
      if (formik.values.phone) {
        signIn(
          (formik?.values.phone?.startsWith("91") ||
            formik?.values.phone?.startsWith("+91"))
            ? formik.values.phone
            : `+91${formik.values.phone}`
        );
      } else if (response.status === 200) {
        toast.success('Successfully sent code to email address-'+ `${formik.values.email}`)
        navigate(`/auth/verification/signup?${profileType}`);
      }
    },
  });


  function configureRecaptcha(phoneNumber, auth) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // signIn(phoneNumber);
        },
      },
      auth
    );
  }

  function signIn(phoneNumber) {
    const auth = getAuth();
    try {
      configureRecaptcha(phoneNumber, auth);
    } catch (err) {
      console.log(err, "captcha error");
    }

    // const auth = getAuth();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        captchaEl.current.innerHTML = '';
        navigate(`/auth/verification/signup?${profileType}`);
      })
      .catch((err) => {
        captchaEl.current.innerHTML = '';
        toast.error(err.message);
      });
  }

  const handleClick = (event) => {
    setProfileType(event.target.id);
  };
  function checkUserExist(email){
    if(email){
      return dispatch(checkingIsEmailExist(email)).then((res) => {
        if(res?.data?.id){
          return true
        }else {
          return false
        }
      })
    }
  }

  return (
    <>
      {/* padding increased */}
      <div className="w-full rounded-[20px] flex flex-col justify-center items-center gap-1 px-6">
        <Heading title="Get Started" />
        <div className="flex w-full justify-between mb-2">
          <span>
            <input
              va
              type="radio"
              name="signUp"
              id="Personal"
              onChange={(e) => handleClick(e)}
            />
            <span className="ml-2">Personal</span>
          </span>
          <span>
            <input
              type="radio"
              name="signUp"
              id="Organization"
              onChange={(e) => handleClick(e)}
            />
            <span className="ml-2">Organization</span>
          </span>
        </div>

        <Input
          title="Email"
          name="email"
          inputValue={formik.values.email}
          errorMessage={formik.errors.email}
          touched={formik.touched.email}
          onHandleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.values.phone.length > 0}
        />
        {/* font weight changed */}
        <h1 className="font-semibold text-[#7991BD]">Or</h1>
        <div className="flex w-full justify-center items-center gap-2">
          {/* textcolor, border color, height, bckground-color changed*/}
          <select
            name=""
            id=""
            className="border-[1px] rounded-[5px] bg-white text-gray-500 border-gray-300 h-9 outline-none text-xs font-semibold py-1.5 w-full"
          >
            <option value="">USA +1</option>
            <option value="">IN +91</option>
          </select>
          <input
            placeholder="6789236491"
            className="outline-none border-[1px] border-gray-600 rounded-[5px] text-xs py-1.5 pl-2 font-semibold disabled:bg-gray-300"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.values.email.length > 0}
          />
        </div>
        {formik.touched.phone && formik.errors.phone ? (
          <p className="text-[10px] text-[red] self-start w-[80%] ">
            {formik.errors.phone}
          </p>
        ) : null}

        {/* color changed, text size changed, font-weight changd*/}
        <p className="text-[12px] font-semibold text-gray-500 flex items-center self-start mt-2 mb-1">
          Password Help
          <span
            className="ml-1"
            title="Password should be minimum of 8 length characters with one numerical value"
          >
            <BsFillQuestionCircleFill />
          </span>
        </p>
        <PasswordInput
          title="Password"
          name="password"
          inputValue={formik.values.password}
          errorMessage={formik.errors.password}
          onHandleChange={formik.handleChange}
          touched={formik.touched.password}
          onBlur={formik.handleBlur}
          inpu
        />
        <div className="w-full flex flex-col mb-2">
          <div className="flex w-full gap-1 items-center">
            <input
              type="checkbox"
              name="termsAndConditions"
              value={formik.values.termsAndConditions}
              onChange={formik.handleChange}
              touched={formik.values.termsAndConditions}
              onBlur={formik.handleBlur}
            />
            <p className="text-[10px] font-semibold">
              I agree to all Terms,Cookies and Privacy
            </p>
            <br />
          </div>
          {formik.touched.termsAndConditions &&
          formik.errors.termsAndConditions ? (
            <p className="text-[10px] text-[red] self-start w-[80%] ">
              {formik.errors.termsAndConditions}
            </p>
          ) : null}
        </div>
        <div ref={captchaEl} id="sign-in-button"></div>
        <Button2
          id="sign"
          title="Sign Up"
          bgColor="#7991BD"
          // disabled={!formik.isValid}
          onClick={formik.handleSubmit}
        />
        <p className="text-[10px] font-bold text-gray-500 mb-2 mt-3">
          Already have and account?
          <span className="mx-2">
            <Link to="/auth/login" className="text-[#7991BD]">
              Sign In
            </Link>
          </span>
        </p>
        {/* {showModal &&
          createPortal(
            <Modal modalType={modalType} handleClose={handleClose} />,
            document.getElementById("root")
          )} */}
      </div>
    </>
  );
};

export default Signup;
