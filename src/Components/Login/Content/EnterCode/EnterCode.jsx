import React, { useState } from "react";
import Button1 from "../Button/Button1";
import Input from "../InputBox/Input";
import Heading from "../Heading/Heading";
import Button2 from "../Button/Button2";
import { useNavigate } from "react-router-dom";

const EnterCode = ({ title }) => {
  const [timer, setTimer] = useState(false);
  const timerFunction = () => {
    if (timer === false) {
      setTimer(true);
      setTimeout(() => {
        setTimer(false);
      }, 4000);
    } 
  };

  const navigate = useNavigate()
  return (
    <>
      <div className="w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-2">
        <Heading title={title} />
        <p className="text-[10px] font-bold text-[#7B8FA1] w-[78%] mb-1">
          We've have sent a code to your email address
        </p>
       <div className="w-[85%]">
       <Input
          title="Enter Code"
          errorMessage="You've reached maximum attempts. Please try again from login"
        />
       </div>
        <Button2 title="Confirm" />
        {timer ? (
        <div disabled="disabled" className="bg-gray-600 text-white w-[70%] rounded-3xl py-1.5 text-center font-bold text-xs">05:00</div>
        ) : (
          <Button1 title="Send Code Again" onClick={timerFunction} />
        )}
        <Button1 title="Cancel" path="/" onClick={()=>navigate(-1)}/>
      </div>
    </>
  );
};

export default EnterCode;
