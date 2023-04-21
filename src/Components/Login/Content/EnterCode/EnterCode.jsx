import React, { useState } from "react";
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



const EnterCode = ({ title }) => {
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
    const result =await dispatch(matchingSignupOtp(signupData.uemail, otp));
    if (result === true) {
      app.messaging().getToken().then(function(token) {
        // Send the token to your server or use it to send a test message to the user.
      }).catch(function(error) {
        // Handle error getting token.
      });
      console.log("Tokennnnnnnn", token);
      signupData.deviceid = uuid();
      console.log(" signupData.deviceid ", signupData.deviceid);
      // dispatch(allSingupDetails())
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full rounded-[20px] flex flex-col justify-center items-center gap-2">
        <Heading title={title} />
        <p className="text-[10px] font-bold text-[#7B8FA1] w-[78%] mb-1">
          We've have sent a code to your email address
        </p>
        <div className="w-[85%]">
          <input
            className="outline-none border-[1px] border-gray-600 rounded-[5px] w-full text-xs py-1.5 pl-2 font-semibold"
            title="Enter Code"
            value={otp}
            onChange={(event) => setOtp(event.target.value)}
            // errorMessage="You've reached maximum attempts. Please try again from login"
          />
        </div>
        <Button2 title="Confirm" onClick={onConfirmOtp} />
        {timer ? (
          <div
            disabled="disabled"
            className="bg-gray-600 text-white w-[70%] rounded-3xl py-1.5 text-center font-bold text-xs"
          >
            05:00
          </div>
        ) : (
          <Button1 title="Send Code Again" onClick={timerFunction} />
        )}
        <Button1 title="Cancel" path="/" onClick={() => navigate(-1)} />
      </div>
    </>
  );
};

export default EnterCode;
