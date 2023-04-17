const initialState = {
  isLoggedIn: false,
  user: {},
  selectedTab: "Root",
  friendsTab: " My Friends (5)",
  kicksType: "Following",
  totalComments:[]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LOGIN_DATA":
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
      };
    case "SELECT_TAB":
      return { ...state, selectedTab: action.payload };
    case "FRIENDS_TAB":
      return { ...state, friendsTab: action.payload };

    case "SELECT_KICKS_TYPE":
      return { ...state, kicksType: action.payload };

      case "ADD_COMMENTS":
      return { ...state, totalComments: [...state.totalComments,action.payload] };
    default:
      return state;
  }
};

export default userReducer;
