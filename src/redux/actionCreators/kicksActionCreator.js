import axios from 'axios';
import { getQueryParams} from '../../Components/Utility/utility';


export const selectKicksType = (kicksType) => (dispatch) => {
    if(kicksType === 'Latest'){
        getLatestKicks(kicksType)
    }else if(kicksType === 'Trending'){

    }else if(kicksType === 'Following'){

    }
  dispatch({
    type: "SELECT_KICKS_TYPE",
    payload: kicksType,
  });
};
export const addKicks= (data) => async (dispatch) => {
    try{
        const response = await axios.post(
          `http://3.233.82.34:8080/instance/api/instancepost/add`, data
        );
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getLatestKicks = (urlParams, data) => async (dispatch) => {
    try{
        const response = await axios.post(
          `http://3.233.82.34:8080/instance/api/fetch/kicks?${getQueryParams(urlParams)}`, data
        );
        console.log(response);
        dispatch({
            type: 'GET_LATEST_KICKS',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getFollowingKicks = (urlParams, data) => async (dispatch) => {
    try{
        const response = await axios.post(
          `http://3.233.82.34:8080/instance/api/fetch/kicks?${getQueryParams(urlParams)}`, data
        );
        console.log(response);
        dispatch({
            type: 'GET_FOLLOWING_KICKS',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getTrendingKicks= (urlParams, data) => async (dispatch) => {
    try{
        const response = await axios.post(
          `http://3.233.82.34:8080/instance/api/fetch/kicks?${getQueryParams(urlParams)}`, data
        );
        console.log(response);
        dispatch({
            type: 'GET_TRENDING_KICKS',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

// http://3.233.82.34:8080/instance/api/instancelike/add
export const addLikes = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`http://3.233.82.34:8080/instance/api/instancelike/add`, data);
        dispatch({
            type: 'ADD_LIKE',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error;
    }
}

export const getCommentsByPostid = (data) => async (dispatch) => {
    try {
        const response = await axios.get(`http://3.233.82.34:8080/instance/api/comment/${data}`)
        dispatch({
            type: "COMMENTS_LIST",
            payload: response.data
        })
    }catch(error){
        throw error;
    }
}

export const createKicksPost = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`http://3.233.82.34:8080/instance/api/instancepost/add`, data);
        dispatch({
            type: '',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error;
    }
}
export const addCommentOnKicks = (commentDetails) => async (dispatch) => {
  try {
    // const getStoredData = await getUserDataFromLocalStorage
    const getCommentResult = await axios.post(
      `http://3.233.82.34:8080/instance/api/comment/add`,
      commentDetails,
      {
        headers: {
          "Accept-Language": "en",
        //   Authorization: `Bearer ${getStoredData?.token}`,
        },
      }
    );
    dispatch({
        type: "ADD_COMMENT",
        payload: getCommentResult?.data,
    });
    return getCommentResult?.data
  } catch (error) {
    console.log(error.message);
  }
};

// http://3.233.82.34:8080/instance/api/instancepost/getpoststag/utag1/utype1
// http://3.233.82.34:8080/instance/api/instancetag/getprofile/utag