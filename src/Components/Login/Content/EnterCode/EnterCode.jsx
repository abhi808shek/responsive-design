import React, { useState, useEffect } from "react";
import Button1 from "../Button/Button1";
import Input from "../InputBox/Input";
import Heading from "../Heading/Heading";
import Button2 from "../Button/Button2";
import { useNavigate } from "react-router-dom";
import {
  allSingupDetails,
  matchingSignupOtp,
} from "../../../../redux/actionCreators/authActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
// import { requestNotificationPermission } from "../../../../config/firebase";




const EnterCode = ({ title }) => {
  {/* send code timing implemented dynamically */}
  const [timer, setTimer] = useState(false);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { signupData } = useSelector((state) => state.authReducer);
  const timerFunction = () => {
    if (timer === false) {
      setTimer(true);
      setTimeout(() => {
        setTimer(false);
      }, 4000);
    }
  };
  
  const onConfirmOtp = async () => {
    console.log("otp",otp);
    const result =await dispatch(matchingSignupOtp(signupData.uemail, otp));
    if (result === true) {
      // const token =await requestNotificationPermission()
      // console.log("token",token);

      // console.log("Tokennnnnnnn", token);
      signupData.deviceid = uuid();
      console.log(" signupData.deviceid ", signupData.deviceid);
      // dispatch(allSingupDetails())
    }
  };

  function Timer() {
  const [seconds, setSeconds] = useState(5 * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div disabled="disabled" className="bg-gray-600 text-white w-[70%] rounded-3xl py-2 text-center font-bold text-xs">
      {minutes}:{remainingSeconds < 10 ? "0" : ""}
      {remainingSeconds}
    </div>
  );
  }
  const onHandleChange = (event)=>setOtp(event.target.value)
  const navigate = useNavigate()
  return (
    <>
      {/* padding added */}
      <div className="w-full h-full p-1 rounded-[20px] flex flex-col justify-center items-center gap-2">
        <Heading title={title} />
        {/* font-size increased, color changed */}
        <p className="text-[11px] font-bold w-[78%] mb-1">
          We've have sent a code to your email address
        </p>
       <div className="w-[85%]">
       <Input
          title="Enter Code"
          name="entercode"
          errorMessage="You've reached maximum attempts. Please try again from login"
          inputValue={otp}
          onHandleChange={onHandleChange}
        />
       </div>
        <Button2 title="Confirm" onClick={onConfirmOtp}/>
        {/* padding added to send code button */}
        {timer ? (          
          <Timer />
        ) : (
          <Button1 title="Send Code Again" onClick={timerFunction} />        
        )}
        <Button1 title="Cancel" path="/" onClick={() => navigate(-1)} />
      </div>
    </>
  );
};

export default EnterCode;
