const initialState = {
  usersList: [],
  requestList: [{ name: "rah" }],
};

const  friendReducer= (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, usersList: action.payload.data };
    case "GET_REQUEST_LIST":
      return { ...state, resuestList: action.payload.data};
      
    default:
      return state;
  }
};

export default friendReducer
