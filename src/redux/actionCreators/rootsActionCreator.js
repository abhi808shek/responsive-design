import axios from "axios";
import { getUserDataFromLocalStorage } from "../../Components/Utility/utility";
// -----------------------------------------------FOR ALL POST RELATED API------------------------------------------------------------
// GET POST BY POST ID
export const getPostByPostId = (postId) => async (dispatch) => {
  try {
    const getStoredData = await getUserDataFromLocalStorage();
    const getPostbyid = await axios.get(
      `http://3.233.82.34:8080/api/post/getpostbypostid/${postId}`,
      {
        headers: {
          "Accept-Language": "en",
          Authorization: `Bearer ${getStoredData?.token}`,
        },
      }
    );
    console.log("getPostbyid", getPostbyid);
    dispatch({
      type: "GET_POST_BY_POST_ID",
      payload: getPostbyid?.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// GET POST HISTORY
export const getPostHistoryByPostId = (postId) => async (dispatch) => {
  try {
    const getStoredData = await getUserDataFromLocalStorage();
    const getPostHistory = await axios.get(
      `http://3.233.82.34:8080/api/post/posthistory/${postId}`,
      {
        headers: {
          "Accept-Language": "en",
          Authorization: `Bearer ${getStoredData?.token}`,
        },
      }
    );
    console.log("getPostHistory", getPostHistory);
    dispatch({
      type: "GET_POST_HISTORY_BY_POST_ID",
      payload: getPostHistory?.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// SET POST REPORT
export const setPostReport = (reportResult) => async (dispatch) => {
  try {
    const getStoredData = await getUserDataFromLocalStorage();
    const postReportResult = await axios.get(
      `http://3.233.82.34:8080/api/post/report/`,
      reportResult,
      {
        headers: {
          "Accept-Language": "en",
          Authorization: `Bearer ${getStoredData?.token}`,
        },
      }
    );
    console.log("postReportResult", postReportResult);
    dispatch({
      type: "POST_REPORT",
      payload: getPostHistory?.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// GET LIKES DETAIL BY USER ON POST
export const getLikesByUserOnPost = (profileid, postid) => async (dispatch) => {
  try {
    const getStoredData = await getUserDataFromLocalStorage();
    const likesResult = await axios.get(
      `http://3.233.82.34:8080/api/like/getlikeyesno/${profileid}/${postid}`,
      reportResult,
      {
        headers: {
          "Accept-Language": "en",
          Authorization: `Bearer ${getStoredData?.token}`,
        },
      }
    );
    console.log("likesResult", likesResult);
    dispatch({
      type: "POST_REPORT",
      payload: likesResult?.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// -----------------------------------------------FOR POST MADE BY USER RELATED API------------------------------------------------------------

// GET LIKES DETAIL BY USER ON POST
// export const getLikesByUserOnPost = (profileid, postid) => async (dispatch) => {
//   try {
//     const getStoredData = await getUserDataFromLocalStorage();
//     const likesResult = await axios.get(
//       `http://3.233.82.34:8080/api/like/getlikeyesno/${profileid}/${postid}`,
//       reportResult,
//       {
//         headers: {
//           "Accept-Language": "en",
//           Authorization: `Bearer ${getStoredData?.token}`,
//         },
//       }
//     );
//     console.log("likesResult", likesResult);
//     dispatch({
//       type: "POST_REPORT",
//       payload: likesResult?.data,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// -----------------------------------------------IMAGE UPLOAD BY USER RELATED API------------------------------------------------------------

//SINGLE IMAGE UPLOAD API
export const imageUploadApi = (file) => async (dispatch) => {
  try {
    //
     console.log("Files",file);
    const getStoredData = await getUserDataFromLocalStorage();
const body = {file:file}
    const getUploadedResult = await axios.post(
      `http://35.183.76.174:9098/s3/upload`,
      body,
      {
        headers: {
          "Accept-Language": "en",
          "Content-Type":"multipart/form-data",
          Authorization: `Bearer ${getStoredData?.token}`,

        },
      }
    );
    console.log("getUploadedResult", getUploadedResult);
    dispatch({
      type: "GET_IMAGE_UPLOAD",
    
    });

    return getUploadedResult?.data;
  } catch (error) {
    return error;
  }
};

//MULTIPLE IMAGE UPLOAD API
export const multipleImageUpload = (image) => async (dispatch) => {
  try {
    const getStoredData = await getUserDataFromLocalStorage();

    const multipleImageResult = await axios.post(
      `http://35.183.76.174:9098/files`,
      image,
      {
        headers: {
          "Accept-Language": "en",
          Authorization: `Bearer ${getStoredData?.token}`,
        },
      }
    );
    console.log("multipleImageResult", multipleImageResult);
    dispatch({
      type: "GET_IMAGE_UPLOAD",
      payload: multipleImageResult,
    });
    return multipleImageResult;
  } catch (error) {
    console.log(error.message);
  }
};



//GET LIST OF IMAGES BY PROFILE ID AND PROFILE TYPE (DOUBT IN URL)
export const getListOfImagesByPiPT = () => async (dispatch) => {
    try {
      const getStoredData = await getUserDataFromLocalStorage();
  
      const getImageListResult = await axios.get(
        `http://35.183.76.174:9098/api/image/getbyid/${profileid}/${profiletype}`,
        image,
        {
          headers: {
            "Accept-Language": "en",
            Authorization: `Bearer ${getStoredData?.token}`,
          },
        }
      );
      console.log("getImageListResult", getImageListResult);
      dispatch({
        type: "GET_LIST_OF_IMAGE_UPLOAD",
        payload: getImageListResult,
      });
      return getImageListResult;
    } catch (error) {
      console.log(error.message);
    }
  };




  //ADD IMAGE USING PROFILE ID  (DOUBT IN URL WHERE to pass profile id or params to send)
export const addImageByProfileId = () => async (dispatch) => {
    try {
      const getStoredData = await getUserDataFromLocalStorage();
  
      const addImageResult = await axios.post(
        `http://35.183.76.174:9098/api/image/add`,
        image,
        {
          headers: {
            "Accept-Language": "en",
            Authorization: `Bearer ${getStoredData?.token}`,
          },
        }
      );
      console.log("addImageResult", addImageResult);
      dispatch({
        type: "ADD_IMAGE_BY_PROFILE_ID",
        payload: addImageResult?.data,
      });
      return addImageResult?.data;
    } catch (error) {
      console.log(error.message);
    }
  };