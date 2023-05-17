import React, { useState, useEffect, useRef } from "react";
import Button1 from "../Button/Button1";
import Input from "../InputBox/Input";
import Heading from "../Heading/Heading";
import Button2 from "../Button/Button2";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  matchingOtp, saveUserSignupData, settingOtp, userRegistration,
} from "../../../../redux/actionCreators/authActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { toasterFunction } from "../../../Utility/utility";
import firebaseApp, { getFirebaseToken } from "../../../../config/firebase";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";

import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import Portals from "../../../Portals/Portals";
// import { requestNotificationPermission } from "../../../../config/firebase";




const SignupOtp = ({ title }) => {
  const captchaEl = useRef();
  {/* send code timing implemented dynamically */}
  const phoneNumberRules = /[0-9]{10}$/;

  const [timer, setTimer] = useState(false);
  const params = useParams();
  const location = useLocation();
  const [state, setState] = useState({})
  const { showModal } = state
  const dispatch = useDispatch();

  const { otp,signupData } = useSelector((state) => state.authReducer);

  const timerFunction = async () => {
         const dataObj = {
        datetime: Date.now().toString(),
        profileType: signupData.profileType,
        uemail: signupData.uemail,
        // password: formik.values.password,
      };    
    await dispatch(saveUserSignupData(dataObj));
    signIn("+91"+signupData?.uemail);
    
    if (timer === false) {
      setTimer(true);
      setTimeout(() => {
        setTimer(false);
      }, 4000);
    }
  };
  const handleClose = () => setState({...state, showModal: false })
  
  const onConfirmOtp = async () => {

    if(otp?.length < 4){
      return
    }
    if( phoneNumberRules.test(signupData?.uemail)){
      confirmationResult
        .confirm(otp)
        .then((result) => {
        setState({ ...state, showModal: true });
          // User signed in successfully.
          const user = result.user;
        })
        .catch((error) => {
          console.log(error, "error");
          // User couldn't sign in (bad verification code?)
        });
    }else{
      const result =await dispatch(matchingOtp(signupData.uemail, otp));

    }
      if(result.status){
        setState({...state, showModal: true})
      }
    if (!result.status) {
        toasterFunction(result.message)
    }
    getFirebaseToken().then( async (res) => {
      const data ={
         "datetime": Date.now(),
         "deviceid": uuid(),
         "password": signupData.password,
         "token": res,
         "uemail": signupData.uemail,
        //  "umobile": "weware5007@fectode.com"
      }
      const resp = await dispatch(userRegistration(data))
    }).catch((err) => {
      console.log(err);
    })
    // navigate("/auth/createUser")
    toasterFunction(result.message)
  };
  
  function configureRecaptcha(phoneNumber, auth) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // console.log(response, 'otppppppppppp sentttttt');
        },
      },
      auth
    );
  }

      function signIn(phoneNumber) {
        const auth = getAuth();
        try {
          configureRecaptcha(signupData?.uemail, auth);
        } catch (err) {
          console.log(err, "captcha error");
        }
        // const auth = getAuth();
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
          .then((confirmation) => {
            window.confirmation = confirmation;
            console.log("otp send");
            navigate(`/auth/verification/signup?${profileType}`);
          })
          .catch((err) => {
            captchaEl.current.innerHTML = null;
            console.log("otp not send", err);
          });
      }

  function Timer() {
  const [seconds, setSeconds] = useState(5 * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);


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
            onHandleChange={onChangeHandler}
          />
        </div>
        <div ref={captchaEl} id="sign-in-button"></div>
        <Button2 id={"sign-in"} title="Confirm" onClick={onConfirmOtp} />
        {/* padding added to send code button */}
        {timer ? (
          <Timer />
        ) : (
          <Button1 title="Send Code Again" onClick={timerFunction} />
        )}
        <Button1 title="Cancel" path="/" onClick={() => navigate(-1)} />
      </div>
      {showModal && (
        <Portals>
          <Modal
            modalType={location.search.slice(1)}
            handleClose={handleClose}
          />
        </Portals>
      )}
    </>
  );
};

export default SignupOtp;
