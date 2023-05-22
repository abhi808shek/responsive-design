const initialState = {
  usersList: [],
  requestList: [],
};

const  friendReducer= (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, usersList: action.payload.data };
    case "GET_REQUEST_LIST":
      return { ...state, requestList: action.payload.data };
    case "FRIEND_LIST":
      return { ...state, friends: action.payload.data };
    default:
      return state;
  }
};

export default friendReducer
