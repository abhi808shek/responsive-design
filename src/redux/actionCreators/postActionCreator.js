import axios from "axios";

export const setPostData = (postData) => async (dispatch) => {
  const postDataResult = await axios.post(
    "http://3.233.82.34:8080/api/post/add",
    postData,
    {
      headers: {
        "Accept-Language": "en",
        "Authorization" : `Bearer ${postData.token}`
      },
    }
  );
  console.log("postDataResult", postDataResult);
  dispatch({
    type: "SET_POST_DATA",
    payload: post,
  });
};

export const setLikes = (likeObject) => (dispatch) => {
  dispatch({
    type: "SET_LIKES_DATA",
    payload: likeObject,
  });
};
