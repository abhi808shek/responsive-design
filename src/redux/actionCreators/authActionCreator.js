import axios from "axios";

// CHECKING USER pr Email EXIST OR NOT

const config =  {
  headers: {
    "Accept-Language": "en",
  },
}


export const saveUserSignupData = (data) => async(dispatch) => {
  console.log("DATA",data);
  const datalist = {
    datetime:data.datetime,
    profileType: data.profileType,
    uemail: data.uemail,
  }
  console.log("datalist",datalist);
  try {
    const result = await axios.put(
      `http://3.233.82.34:8080/api/user/registerotp`,datalist,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    console.log("result", result);
  dispatch({
  type: "SET_BASIC_SIGNUP_DETAILS",
  payload:data,
})
return result.status
  } catch (error) {
    console.log(error.message);
  }
};



export const matchingSignupOtp = (mailId,otp) => async(dispatch) => {
  console.log("mailId",mailId);
  console.log("otp",otp);
  try {
    const result = await axios.get(
      `http://3.233.82.34:8080/api/user/otp/${mailId}/${otp}`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    dispatch({
      type: "MATCHING_SIGNUP_OTP",
      // payload:data,
    });
    return result.data.status
  } catch (error) {
    console.log(error.message);
  }
};



export const allSingupDetails = (data) => async(dispatch) => {
  console.log("mailId",mailId);
  console.log("otp",otp);
  try {
    const result = await axios.post(
      ` http://3.233.82.34:8080/api/user/registration`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    console.log("resultsdfgsd", result);
    dispatch({
      type: "MATCHING_SIGNUP_OTP",
      // payload:data,
    });
    return result.data.status
  } catch (error) {
    console.log(error.message);
  }
};







export const checkingUserExist = (emailId) => async(dispatch) => {
  try {
    const userExist = await axios.get(
      `http://3.233.82.34:8080/api/user/usersbyemail/${emailId}`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    console.log("userExist", userExist.data);
    dispatch({
      type: "USER_EXIST_OR_NOT",
      payload: userExist.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// CALLING PUT API FOR SENDING OTP

export const sendingMailForOtp = (data) => async (dispatch) => {
  try {
    const mailSend = await axios.put(
      `http://3.233.82.34:8080/api/user/otp`,
      data,
      {
        headers: {
          "Accept-Language":"en",
        },
      }
    );

    console.log("mailSend", mailSend.data);
    dispatch({
      type: "SENDING_MAIL_FOR_OTP",
      payload: mailSend.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
