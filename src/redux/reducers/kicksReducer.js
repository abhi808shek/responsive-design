const initialState = {
  latestKicks: [],
  trendingKicks: [],
  followingKicks: [],
  comments: []
};

const kicksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LATEST_KICKS":
      return { ...state, latestKicks: action.payload.data };
    case "GET_TRENDING_KICKS":
      return { ...state, trendingKicks: action.payload.data };
    case "GET_FOLLOWING_KICKS":
      return { ...state, followingKicks: action.payload.data };
    case "ADD_LIKE":
      return { ...state, totalLikes: action.payload.data};
    case "COMMENTS_LIST":
      return { ...state, comments: action.payload.data}
    default:
      return state;
  }
};

export default kicksReducer;
