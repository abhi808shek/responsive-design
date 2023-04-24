const initialState = {
  signupData:{},
  isLoggedIn: false,
  signupDataList:[],
  otp:"",
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
          case "SETTING_OTP":
            return {
              ...state,
              otp:action.payload,
            };
      case "IS_EMAIL_EXIST":
        return { ...state,emailExist:action.payload};

      case "LOGIN_SUCCESSFUL" :
        console.log(state, '------------SSSSSSSSSSSS');
        return {...state, isLoggedIn: true}   

        case "SENDING_MAIL_FOR_OTP":
          return { ...state,mailSended:action.payload}
        case "SET_USER_DATA":
          console.log('set user id', action.payload);
          return { ...state, signupData: {...state.signupData, userId: action.payload.data.id}}
      default:
        return state;
    }
  };
  
  export default authReducer;
  