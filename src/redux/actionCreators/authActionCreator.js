import axios from "axios";
import { setDataOnStorage } from "../../Components/Utility/utility";

// CHECKING USER pr Email EXIST OR NOT


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
    return result;
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
    throw error.message
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
  console.log(emailId, "PPPPPPPPPPPPPPPPPPPPP");
  try {
    console.log("emailId", emailId);
    const userExist = await axios.get(
      `http://3.233.82.34:8080/api/user/usersbyemail/${emailId}`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    // setDataOnStorage('userid', userExist.data)
    dispatch({
      type: "IS_EMAIL_EXIST",
      payload: userExist.data,
    });
    return userExist.data;
  } catch (error) {
    // return userExist.data;
    throw error.message;
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
    console.log(error, "??????????");
    throw mailSend.message;
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
      `http://3.233.82.34:8080/api/user/authenticate`,
      data,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    dispatch({
      type: "SET_USER_DATA",
      payload: response.data,
    });
    return response.data;
  } catch (err) {
    console.log(err, "errror login");
    throw err;
  }
};

export const userRegistration = (data) => async (dispatch) => {
  // const { email, password } = data;
  try {
    const response = await axios.post(
      `http://3.233.82.34:8080/api/user/registration`,
      data,
      {
        headers: {
          "Accept-Language": "en",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.status) {
      dispatch({
        type: "SET_USER_DATA",
        payload: response.data,
      });
    } else throw response;
    return response;
  } catch (err) {
    console.log(err, "errror login");
    throw err;
  }
};

export const getOrgCategory = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://3.233.82.34:8080/profile/api/businesscategory/category`,
      {
        headers: {
          "Accept-Language": "en",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);

    dispatch({
      type: "GET_ORG_CATEGORY",
      payload: response.data,
    });
    return response;
  } catch (err) {
    console.log(err, "errror login");
    throw err;
  }
};

export const createProfile = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://3.233.82.34:8080/profile/api/profile/add`,
      data,
      {
        headers: {
          "Accept-Language": "en",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);

    dispatch({
      type: "CREATE_PROFILE",
      payload: response.data,
    });
    return response;
  } catch (err) {
    console.log(err, "errror login");
    throw err.response.data;
  }
};

export const uploadImage = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://35.183.49.35:9098/s3/upload`,
      data,
      {
        headers: {
          "Accept-Language": "en",
          "Content-Type": "multipart/formdata",
        },
      }
    );
    console.log(response);

    // dispatch({
    //   type: "CREATE_PROFILE",
    //   payload: response.data
    // })
    return response;
  } catch (err) {
    console.log(err, "errror login");
    throw err;
  }
};



export const getCountryList = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://3.233.82.34:8080/api/user/country/countrylist`,
      {
        headers: {
          "Accept-Language": "us",
          "Content-Type": "application/json"
        },
      }
    );
    console.log(response);

    dispatch({
      type: "GET_COUNTRY_LIST",
      payload: response?.data
    })
    return response
  } catch(err) {
    console.log(err, 'errror login');
    throw err?.response?.data
  }
}


export const getStateList = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://3.233.82.34:8080/api/user/country/getstate/${data}`,
      {
        headers: {
          "Accept-Language": "us",
          "Content-Type": "application/json"
        },
      }
    );
    console.log(response);

    dispatch({
      type: "GET_STATE_LIST",
      payload: response.data
    })
    return response
  } catch(err) {
    console.log(err, 'errror login');
    throw err.response.data
  }
}

export const getDistrict = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://3.233.82.34:8080/api/user/country/getcity/${data}`,
      {
        headers: {
          "Accept-Language": "us",
          "Content-Type": "application/json"
        },
      }
    );
    console.log(response);

    dispatch({
      type: "GET_DISTRICT_LIST",
      payload: response.data
    })
    return response
  } catch(err) {
    throw err.response.data
  }
}


export const getLoksabha = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://3.233.82.34:8080/profile/api/country/getlocasaba/${data}`,
      {
        headers: {
          "Accept-Language": "us",
          "Content-Type": "application/json"
        },
      }
    );
    console.log(response);

    dispatch({
      type: "GET_LOKSABHA_LIST",
      payload: response.data
    })
    return response
  } catch(err) {
    console.log(err, 'errror login');
    throw err.response.data
  }
}


export const getAssenbly = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://3.233.82.34:8080/profile/api/country/getassembly/${data}`,
      {
        headers: {
          "Accept-Language": "us",
          "Content-Type": "application/json"
        },
      }
    );
    console.log(response);

    dispatch({
      type: "GET_ASSEMBLY_LIST",
      payload: response.data
    })
    return response
  } catch(err) {
    console.log(err, 'errror login');
    throw err.response.data
  }
}


export const getLocationsList = (data) => async (dispatch) => {
  // https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"
  try {
    const response = await axios.get(
    `https://maps.googleapis.com/maps/api/js?key=${data}&libraries=places`,
      {
        headers: {
          "Accept-Language": "us",
          "Content-Type": "application/json"
        },
      }
    );
    console.log(response);

    // dispatch({
    //   type: "GET_ASSEMBLY_LIST",
    //   payload: response.data
    // })
    return response
  } catch(err) {
    console.log(err, 'errror login');
    throw err.response.data
  }
}