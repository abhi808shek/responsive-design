import axios from "axios"
import { getUserDataFromLocalStorage } from "../../Components/Utility/utility";

export const getProfileById= (data) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('userCredential')).token
    try{
        const response = await axios.get(`http://3.233.82.34:8080/profile/api/profile/profilebyuser/${data}`,
           {
            headers:{
                "Accept-Language": "en",
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`
            }
      })
      console.log(response.data, "<<<<<<<<<<????????");
        dispatch({
            type: 'GET_PROFILE_DETAILS',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}

// export const addProfile= (data) => async (dispatch) => {
//     try{
//         const response = await axios.get(`http://3.233.82.34:8080/api/profile/profilebyuser/${data}`,
//            {
//         headers: {
//           "Accept-Language": "us",
//           "Content-Type": "application/json",
//           'Authorization': `Bearer ${getUserDataFromLocalStorage().token}`
//         },
//       })        ;
//         console.log(response);
//         dispatch({
//             type: 'GET_PROFILE_DETAILS',
//             payload: response.data
//         })
//     }catch(error){

//         throw error
//     }
// }


export const getFriendsList= (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/friend/getfriendids/${data}`);
        dispatch({
            type: 'FRIEND_LIST',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}

export const getFollowing = (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/follow/following/${data}`)        ;
        dispatch({
            type: 'GET_FOLLOWING',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const getFollower = (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/follow/follower/${data}`,
           {
        headers: {
          "Accept-Language": "us",
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${getUserDataFromLocalStorage().token}`
        },
      })
        dispatch({
            type: 'GET_FOLLOWER',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const getBlockedList= (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/friend/getblockedlistprofile/${data}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getBlockedProfile = (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/friend/getblockedlistprofile/${data}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const checkFriend = (data) => async (dispatch) => {
  const { ownProfileId , othersProfileId } = data
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/friend/chkfriends/${ownProfileId}/${othersProfileId}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getPrivacyDetail= (data) => async (dispatch) => {
  const othersId = data;
    try{
        const response = await axios.get(`http://3.233.82.34:8080/profile/api/profile/privacy/${othersId}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}




export const getFRlist = (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/friend/getprofileidwithdetail/${data}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}



export const checkFollowing = (data) => async (dispatch) => {
  const { ownProfileId, othersProfileId} = data
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/follow/followyesno/${ownProfileId}/${othersProfileId}`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const startFollowing = (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/friend/api/follow/add`, data);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const updateProfile= (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/profile/api/profile/update`, data);
        console.log(response, ">>PPPPPPPPP");
        dispatch({
            type: '',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}
// export const = (data) => async (dispatch) => {
//     try{
//         const response = await axios.get(``);
//         console.log(response);
//         dispatch({
//             type: '',
//             payload: response.data
//         })
//     }catch(error){
//         throw error
//     }
// }