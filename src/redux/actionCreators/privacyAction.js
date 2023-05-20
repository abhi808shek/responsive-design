import axios from "axios";

export const addProfilePrivacy= (data) => async (dispatch) => {
    try{
        const response = await axios.get(
          `http://3.233.82.34:8080/profile/api/profile/privacy/add`, data
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const getBlockedUser = (data) => async (dispatch) => {
  try {
    const response = axios.post(
      `http://3.233.82.34:8080/friend/api/friend/getblockedlistprofile/${data}`
    );
    dispatch({
      type: "",
      payload: "",
    });
    return response?.data;
  } catch (err) {
    throw err;
  }
};


export const updatePassword = (data) => async (dispatch) => {
    const { uemail, oldPassword, newPassword} = data
  try {
    const response = axios.post(
      `http://3.233.82.34:8080/login/api/user/changepassword/${uemail}/${oldPassword}/${newPassword}`
    );
    dispatch({
      type: "",
      payload: "",
    });
    return response?.data;
  } catch (err) {
    throw err;
  }
};


// http://3.233.82.34:8080/profile/api/profile/search/63074634dc8af05b8822b62e/duman 