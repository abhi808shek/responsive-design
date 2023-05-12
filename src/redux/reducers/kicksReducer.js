const initialState = {
  latestKicks: [],
  trendingKicks: [],
  followingKicks: [],
  comments: [],
  segment: "Following",
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
      const {  followingKicks, latestKicks, trendingKicks} = state;
      console.log(trendingKicks, state.segment, "{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{");
      if (state.segment === "Following") {
        const liked = followingKicks.content.map((item) => {
          return action.payload.data.postid === item.id
            ? { ...item, isliked: true }
            : item;
        });
        return {
          ...state,
          totalLikes: action.payload.data,
          followingKicks: {...followingKicks, content: liked},
        };
      } else if (state.segment === "Trending") {
        const liked = trendingKicks.content.map((item) => {
          return action.payload.data.data.postid === item.id
            ? { ...item, isliked: true }
            : item;
        });
        return {
          ...state,
          totalLikes: action.payload.data,
          trendingKicks: {...trendingKicks, content:liked},
        };
      } else if (state.segment === "Latest") {
        const liked = latestKicks.content.map((item) => {
          return action.payload.data.postid === item.id
            ? { ...item, isliked: true }
            : item;
        });
        return {
          ...state,
          totalLikes: action.payload.data,
          latestKicks: {...latestKicks, content: liked},
        };
      }
    case "COMMENTS_LIST":
      return { ...state, comments: action.payload.data };
    case "KICKS_SEGMENT":
      console.log(action.payload, "_______________TTTTTTTTTTTTTTTTT");
      return { ...state, segment: action.payload };
    default:
      return state;
  }
};

export default kicksReducer;
