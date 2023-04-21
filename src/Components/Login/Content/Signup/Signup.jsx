import React, { useEffect, useState } from "react";
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
import { saveUserSignupData } from "../../../../redux/actionCreators/authActionCreator";
import { useDispatch } from "react-redux";
// import { getFCMToken } from "../../../../config/firebase_app";


const Signup = () => {

  useEffect(() => {
    // getFCMToken()
  }, [])
  
  const [state, setState] = useState({});
  const [profileType, setProfileType] = useState("");
  const { showModal, modalType } = state;
  const dispatch = useDispatch();
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const navigate = useNavigate()
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      phone: "",
      termsAndConditions: false,
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
      phone: Yup.string()
        .min(10, "Phone no is incorrect. Please Try again")
        // .max(10, "Phone no is incorrect. Please Try again")
        .required("Required"),
      // termsAndConditions: Yup.bool().oneOf(
      //   [true],
      //   "You need to accept the terms and conditions"
      // ),
    }),
    onSubmit:async (event) => {
      // event.preventDefault();
      const dataObj = {
        datetime: Date.now().toString(),
        profileType: profileType,
        uemail: formik.values.email,
        password: formik.values.password,
      };
      console.log("dataObj", dataObj);
      const status =  await dispatch(saveUserSignupData(dataObj));
      if (status === 200) {
        navigate("/auth/verification")
      }
    },
  });
  const handleClick = (event) => {
    console.log(event.target.id);
    setProfileType(event.target.id);

    // setState({ ...state, showModal: false, modalType: event.target.id})
  };
  // const handleClose = () => {
  //   setProfileType(event.target.id)
  //   // setState({ ...state, showModal: false, modalType: ''})
  // }
  console.log("formik",formik.values.termsAndConditions);
  return (
    <>
      {/* padding increased */}
      <div className="w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-1 p-7">
        <Heading title="Get Started" />
        <div className="flex w-full justify-between mb-2">
          <span>
            <input
              type="radio"
              name="signUp"
              id="Personal"
              onChange={(e) => handleClick(e)}
            />{" "}
            Personal
          </span>
          <span>
            <input
              type="radio"
              name="signUp"
              id="Organization"
              onChange={(e) => handleClick(e)}
            />{" "}
            Orgainization
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
            className="outline-none border-[1px] border-gray-300 h-9 rounded-[5px] text-xs py-1.5 pl-2 font-semibold"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
        />
        <div className="w-full flex flex-col mb-2">
          <div className="flex w-full gap-1 items-center">
           
            <input type="checkbox" />
            {/* added padding, font-weight remove & font size increased*/}
            <p className="text-[11px] py-1">
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
        <Button2 title="Sign Up" bgColor="#7991BD" 
         disabled={!(formik.isValid && formik.dirty)}
         onClick={formik.handleSubmit}/>
        {/* font-weight removed & font size increased, color changed*/}
        <p className="text-[12px] mb-2 text-gray-600 font-semibold mt-3">
          Already have and account?
          <span className="mx-2">
            <Link to="/auth/login" className="text-[#7991BD]">
              Sign In
            </Link>
          </span>
        </p>
        {showModal &&
          createPortal(
            <Modal modalType={modalType} handleClose={handleClose} />,
            document.getElementById("root")
          )}
      </div>
    </>
  );
};

export default Signup;
