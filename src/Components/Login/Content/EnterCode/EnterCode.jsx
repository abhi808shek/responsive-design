import React, { useState, useEffect } from "react";
import Button1 from "../Button/Button1";
import Input from "../InputBox/Input";
import Heading from "../Heading/Heading";
import Button2 from "../Button/Button2";
import { useNavigate } from "react-router-dom";
import {
  matchingOtp, saveUserSignupData, sendingMailForOtp, settingOtp,
} from "../../../../redux/actionCreators/authActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { toasterFunction } from "../../../Utility/utility";
import { toast } from "react-toastify";


const EnterCode = ({ title }) => {
  {/* send code timing implemented dynamically */}
  const [timer, setTimer] = useState(false);
  const dispatch = useDispatch();
  const { otp,emailExist } = useSelector((state) => state.authReducer);
  const timerFunction = async () => {
        const dataObj = {
        datetime: Date.now().toString(),
        uemail: emailExist.data.uemail,
        // password: formik.values.password,
      }; 
    await dispatch(sendingMailForOtp(dataObj)).then((res) => {
      console.log(res);
      toast.success(res.message)
    }).catch(err => {
      toast.error(err.message)
    })

    if (timer === false) {
      setTimer(true);
      setTimeout(() => {
        setTimer(false);
      }, 4000);
    }
  };
  
  const onConfirmOtp = async () => {
    const result = await dispatch(matchingOtp(emailExist.data.uemail, otp));
    if (!result.status) {
        return toasterFunction(result.message)
    }
    navigate("/auth/forgetpassword")
    toasterFunction(result.message)
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
  const onChangeHandler = (event)=>{
    dispatch(settingOtp(event.target.value))
  }
  const navigate = useNavigate()
  return (
    <>
      {/* padding added */}
      <div className="w-full h-full p-1 py-[20px] rounded-[20px] flex flex-col justify-center items-center gap-2">
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
          onHandleChange={onChangeHandler}
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
