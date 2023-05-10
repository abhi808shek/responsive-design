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