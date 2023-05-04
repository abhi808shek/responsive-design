const initialState = {
    followers: [],
    following: [],
    friends: [],
    profileDetail: {},
    educationDetails: {}
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_FOLLOWING":
        return { ...state, following: action.payload };
      case "GET_FOLLOWER":
        return { ...state, followers: action.payload };
      case "FRIEND_LIST":
        return { ...state, friends: action.payload };
      case "GET_PROFILE_DETAILS":
        localStorage.setItem("profileid", action.payload?.data?.id);
        return { ...state, profileDetail: action.payload };
      case "GET_SCHOOL_DETAIL":
        return { ...state, educationDetails: action.payload };
      case "GET_UG_DEGREE":
        return { ...state, ugdegreeList: action.payload.data};
      case "GET_PG_LIST":
        return { ...state, pgdegreeList: action.payload.data}
      default:
        return state;
    }
}

export default profileReducer;