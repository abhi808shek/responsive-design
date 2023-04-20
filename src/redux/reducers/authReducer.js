const initialState = {
    emailExist:{}
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "USER_EXIST_OR_NOT":
        return { ...state,emailExist:action.payload}
      default:
        return state;
    }
  };
  
  export default authReducer;
  