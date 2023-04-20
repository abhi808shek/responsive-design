import React, { useState } from "react";
import Input from "../InputBox/Input";
import PasswordInput from "../InputBox/PasswordInput";
import Button2 from "../Button/Button2";
import Heading from "../Heading/Heading";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";

const Signup = () => {
  const [state, setState] = useState({})
  const { showModal, modalType } = state;
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const formik = useFormik({
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
      termsAndConditions: Yup.bool().oneOf(
        [true],
        "You need to accept the terms and conditions"
      ),
    }),
    onSubmit: (e) => {
      e.preventDefault();
      const dataObj = {
        email: formik.values.email,
        password: formik.values.password,
      };
      console.log("dataObj", dataObj);
    },
  });
  const handleClick = (event) => {
    setState({ ...state, showModal: true, modalType: event.target.id})
  }
  const handleClose = () => {
    setState({ ...state, showModal: false, modalType: ''})
  }
  return (
    <>
      <div className="w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-1 p-5">
        <Heading title="Get Started" />
        <div className="flex w-full justify-between mb-2">
          <span><input type="radio" name="signUp" id="personal" onClick={(e) => handleClick(e)} /> Personal</span>
          <span><input type="radio" name="signUp" id="organization" onChange={(e) => handleClick(e )}/> Orgainization</span>
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

        <h1 className="font-bold text-[#7991BD] ">Or</h1>
        <div className="flex w-full justify-center items-center gap-2">
          <select
            name=""
            id=""
            className="border-[1px] rounded-[5px] border-gray-600 text-xs font-semibold py-1.5 w-full"
          >
            <option value="">USA +1</option>
            <option value="">IN +91</option>
          </select>
          <input
            placeholder="6789236491"
            className="outline-none border-[1px] border-gray-600 rounded-[5px] text-xs py-1.5 pl-2 font-semibold"
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

        <p className="text-xs font-bold text-[#7B8FA1] flex items-center self-start mt-2 mb-1">
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
          touched={formik.touched.password}
          onHandleChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="w-full flex flex-col mb-2">
          <div className="flex w-full gap-1 items-center">
           
            <input type="checkbox" />
            <p className="text-[10px] font-semibold">
              I agree to all Terms,Cookies and Privacy
            </p>
            <br />
          </div>
          {formik.touched.termsAndConditions && formik.errors.termsAndConditions ? (
            <p className="text-[10px] text-[red] self-start w-[80%] ">
              {formik.errors.termsAndConditions}
            </p>
          ) : null}
        </div>
        <Button2 title="Sign Up" bgColor="#7991BD" />
        <p className="text-[10px] font-bold text-gray-500 mb-2 mt-3">
          Already have and account?

          <span className="mx-2"><Link to="/auth/login" className="text-[#7991BD]">
            Sign In
          </Link></span>
        </p>
      { showModal &&
      createPortal(<Modal modalType={modalType} handleClose={handleClose}/>, document.getElementById('root'))
    }
    </div>
    </>
  );
};

export default Signup;
