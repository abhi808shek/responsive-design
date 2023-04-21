const initialState = {
  signupData:{},
    emailExist:{},
    mailSended:{}
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      // STORING DATA WHILE SIGNUP 
      case "SET_USER_SIGNUP_DATA":
        return {
          ...state,
          signupData:action.payload,
        };


        case "MATCHING_SIGNUP_OTP":
          return {
            ...state,
            // signupDataList: [...state.signupDataList,action.payload],
          };
      case "USER_EXIST_OR_NOT":
        return { ...state,emailExist:action.payload}
        case "SENDING_MAIL_FOR_OTP":
          return { ...state,mailSended:action.payload}
      default:
        return state;
    }
  };
  
  export default authReducer;
  