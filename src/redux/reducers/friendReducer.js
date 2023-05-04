const initialState = {
  usersList: []
};

const  friendReducer= (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, usersList: action.payload.data };
    default:
      return state;
  }
};

export default friendReducer
