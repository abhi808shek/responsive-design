import axios from "axios";

// CHECKING USER pr Email EXIST OR NOT

const config = {
  headers: {
    "Accept-Language": "en",
  },
};

export const saveUserSignupData = (data) => async (dispatch) => {
  const datalist = {
    datetime: data.datetime,
    profileType: data.profileType,
    uemail: data.uemail,
  };
  try {
    const result = await axios.put(
      `http://3.233.82.34:8080/api/user/registerotp`,
      datalist,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    dispatch({
      type: "SET_BASIC_SIGNUP_DETAILS",
      payload: data,
    });
    return result.status;
  } catch (error) {
    return result.message;
  }
};

export const settingOtp = (otp) => async (dispatch) => {
  try {
    dispatch({
      type: "SETTING_OTP",
      payload: otp,
    });
  } catch (error) {
    console.log(error.message);
  }
};


export const allSingupDetails = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      ` http://3.233.82.34:8080/api/user/registration`,
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
    return result.data.status;
  } catch (error) {
    console.log(error.message);
  }
};

// Checking Email Is Exist Or not In Database
export const checkingIsEmailExist = (emailId) => async (dispatch) => {
  console.log(emailId, 'PPPPPPPPPPPPPPPPPPPPP');
  try {
    console.log("emailId",emailId);
    const userExist = await axios.get(
      `http://3.233.82.34:8080/api/user/usersbyemail/${emailId}`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    dispatch({
      type: "IS_EMAIL_EXIST",
      payload:userExist.data
    });
    return userExist.data;
  } catch (error) {
    return userExist.data;
  }
};


// Sending Mail For Otp
export const sendingMailForOtp = (data) => async (dispatch) => {
  try {
    const mailSend = await axios.put(
      `http://3.233.82.34:8080/api/user/otp`,
      data,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    dispatch({
      type: "SENDING_MAIL_FOR_OTP",
    });

    return mailSend.data;
  } catch (error) {
    return mailSend.message;
  }
};


// Maching Otp for verification
export const matchingOtp = (mailId, otp) => async (dispatch) => {
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
      type: "MATCHING_OTP",
    });

    return result.data;
  } catch (error) {
    return result.message;
  }
};



// Setting New Password
export const savingNewPassword = (data) => async (dispatch) => {
  try {
    const savedPassword = await axios.put(
      `http://3.233.82.34:8080/api/user/forgotpassword`,
      data,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    dispatch({
      type: "SAVING_NEW_PASSWORD",
    });
    return savedPassword.data;
  } catch (error) {
    return mailSend.message;
  }
};

export const loginUser = (data) => async (dispatch) => {
  // const { email, password } = data;
  try {
    const response = await axios.post(
      `http://3.233.82.34:8080/api/user/authenticate`, data,
           {
        headers: {
          "Accept-Language": "en",
          "Content-Type": "application/json"
        },
      }
    );
    console.log(response);

    dispatch({
      type: "SET_USER_LOGIN_DATA",
      payload: response.data
    })
    return response
  } catch(err) {
    console.log(err, 'errror login');
    throw err
  }
} 