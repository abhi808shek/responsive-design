const initialState = {
  kicksList: [],
  postList: [],
  likedDetails: {},
};

const rootsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_KICKS_VIDEOS_WITH_LIMITS":
      return {
        ...state,
        kicksList: [action.payload, ...state.kicksList],
      };
    case "GET_ALL_POST_WITH_LIMITS":
      return {
        ...state,
        postList: [action.payload, ...state.postList],
      };

    case "GET_LIKE_BY_POST_ID":
      return {
        ...state,
        likedDetails: action.payload,
      };

    default:
      return state;
  }
};

export default rootsReducer;
