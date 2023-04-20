import axios from "axios";

// CHECKING USER pr Email EXIST OR NOT

export const checkingUserExist = (emailId) => async (dispatch) => {
  try {
    const userExist = await axios.get(
      `http://3.233.82.34:8080/api/user/usersbyemail/${emailId}`,{headers: {
        "Accept-Language": "en"
  }}
    );
    dispatch({
      type: "USER_EXIST_OR_NOT",
      payload: userExist.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
