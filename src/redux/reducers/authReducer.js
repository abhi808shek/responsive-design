const initialState = {
  signupData:{},
  signupDataList:[],
    emailExist:{},
    mailSended:{}
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      // STORING DATA WHILE SIGNUP 
      case "SET_BASIC_SIGNUP_DETAILS":
        return {
          ...state,
          signupData:action.payload,
        };

        case "SET_ALL_SIGNUP_DETAILS":
          return {
            ...state,
            signupDataList:[...action.signupDataList,action.payload]
          };
  

        case "MATCHING_SIGNUP_OTP":
          return {
            ...state,
            // signupDataList: [...state.signupDataList,action.payload],
          };
      case "IS_EMAIL_EXIST":
        return { ...state,emailExist:action.payload}
        case "SENDING_MAIL_FOR_OTP":
          return { ...state,mailSended:action.payload}
      default:
        return state;
    }
  };
  
  export default authReducer;
  