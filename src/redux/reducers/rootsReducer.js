const initialState = {
  kicksList: [],
  postList: [],
  likedDetails: {},
  activePost: {},
  userPostList:[],
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
    case "ACTIVE_POST":
      return {
        ...state, activePost: action.payload
      }

    case "GET_POSTS_LIST":
      return { ...state, userPostList: action.payload.data}

    default:
      return state;
  }
};

export default rootsReducer;
