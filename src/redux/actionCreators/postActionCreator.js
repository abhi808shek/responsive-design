import axios from "axios";
import { getQueryParams } from "../../Components/Utility/utility";

export const createPost = (postData) => async (dispatch) => {
  const postDataResult = await axios.post(
    "http://3.233.82.34:8080/post/api/post/add",
    postData,
    {
      headers: {
        "Accept-Language": "en",
        // "Authorization" : `Bearer ${postData.token}`
      },
    }
  );
  console.log("postDataResult", postDataResult);
  dispatch({
    type: "SET_POST_DATA",
    payload: postDataResult.data,
  });
  return postDataResult
};


export const updatePost = (postData) => async (dispatch) => {
  const postDataResult = await axios.put(
    `http://3.233.82.34:8080/post/api/post/updatePost`,
    postData,
    {
      headers: {
        "Accept-Language": "en",
        // "Authorization" : `Bearer ${postData.token}`
      },
    }
  );
  console.log("postDataResult", postDataResult);
  dispatch({
    type: "SET_POST_DATA",
    payload: postDataResult.data,
  });
  return postDataResult.data;
};


export const getPostHistory = (postData) => async (dispatch) => {
  const postDataResult = await axios.get(
    `http://3.233.82.34:8080/post/api/post/posthistory/${postData}`,
    postData,
    {
      headers: {
        "Accept-Language": "en",
        // "Authorization" : `Bearer ${postData.token}`
      },
    }
  );
  console.log("postDataResult", postDataResult);
  dispatch({
    type: "GET_POST_HISTORY",
    payload: postDataResult.data,
  });
  return postDataResult.data;
};


export const getPostLike = (postid, params) => async (dispatch) => {
  const postDataResult = await axios.get(
    `http://3.233.82.34:8080/post/api/like/${postid}?${getQueryParams(params)}`,
    {
      headers: {
        "Accept-Language": "en",
        // "Authorization" : `Bearer ${postData.token}`
      },
    }
  );
  console.log("postDataResult", postDataResult);
  dispatch({
    type: "GET_POST_LIKE",
    payload: postDataResult.data,
  });
  return postDataResult.data;
};

export const setLikes = (likeObject) => (dispatch) => {
  dispatch({
    type: "SET_LIKES_DATA",
    payload: likeObject,
  });
};


