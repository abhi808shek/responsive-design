import React from "react";
import Input from "../InputBox/Input";
import Button from "../Button/Button1";
import Heading from "../Heading/Heading";
import PasswordInput from "../InputBox/PasswordInput";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Button2 from "../Button/Button2";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate()
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
        <PasswordInput title="Password" errorMessage="" />
        <PasswordInput
          title="Confirm Password"
          errorMessage="Password Does not match"
        />
        <Button2 title="Confirm" />
        <Button title="Cancel" path="/" onClick={()=>navigate(-1)}/>
      </div>
    </>
  );
};

export default NewPassword;
