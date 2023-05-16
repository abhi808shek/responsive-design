import axios from "axios";

export const createEvent = (data) => async (dispatch) => {
    try{
        const response = await axios.post(
          `http://3.233.82.34:8080/event/api/event/createEvent`,data
        );
        dispatch({ type: 'EVENT_CREATE_SUCCESS', payload: response.data });
        console.log(response);
    }catch(error){
        dispatch({ type: 'EVENT_CREATE_FAILURE', payload: error.message });
        throw error
    }
}

export const updateEvent= (data) => async (dispatch) => {
    try{
        const response = await axios.put(
          `http://3.233.82.34:8080/event/api/event/updateEvent`, data
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const deleteEvent = (data) => async (dispatch) => {
    try{
        const response = await axios.delete(
          `http://3.233.82.34:8080/event/api/event/deleteEvent/${data}`
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        });
        response.data
    }catch(error){
        console.log(error)
        throw error
    }
}

export const getEventDetails = (data) => async (dispatch) => {
    try{
        const response = await axios.get(
          `http://3.233.82.34:8080/event/api/event/geteventbyid/${data}`
        );
        console.log(response);
        dispatch({
            type: 'SINGLE_EVEVT_DETAIL',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const getEventList = (data) => async (dispatch) => {
    try{
        const response = await axios.get(
          `http://3.233.82.34:8080/event/api/event/getEvent?limit_10`, data
        );
        console.log(response);
        dispatch({
            type: 'GET_ALL_EVEVTS',
            payload: response.data
        })
    }catch(error){
        console.log('err',error)
        throw error
    }
}

export const getEventByProfileid = (data) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/event/api/event/getmyallevent/id1`);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getInviteList= (data) => async (dispatch) => {
    try{
        const response = await axios.get(
          `http://3.233.82.34:8080/event/api/invities/getprofiles/${data}/true`
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getInviteListByFood= (data) => async (dispatch) => {
    try{
        const response = await axios.get(
          `http://3.233.82.34:8080/event/api/invities/getprofilesvegnonveg/${data}/false`
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const updateInviteeName= (data) => async (dispatch) => {
    try{
        const response = await axios.post(
          `http://3.233.82.34:8080/event/api/invities/add`, data
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}

export const addInvitee= (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/event/api/invities/add`, data);
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getInviteesList= (data) => async (dispatch) => {
    try{
        const response = await axios.get(
          `http://3.233.82.34:8080/event/api/invities/add`, data
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const addInvitees= (data) => async (dispatch) => {
    try{
        const response = await axios.get(
          `http://3.233.82.34:8080/event/api/invities/addInvities`, data
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const createEventTemplate= (data) => async (dispatch) => {
    try{
        const response = await axios.post(
          `http://3.233.82.34:8080/event/api/eventtemp/createtemp`, data
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getTemplateByEventid= (data) => async (dispatch) => {
    try{
        const response = await axios.get(
          `http://3.233.82.34:8080/event/api/eventtemp/12`, data
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}


export const getAllEvents= (data) => async (dispatch) => {
    try{
        const response = await axios.get(
          `http://3.233.82.34:8080/event/api/invities/getmyevent/${data}`
        );
        console.log(response);
        dispatch({
            type: '',
            payload: response.data
        })
    }catch(error){
        throw error
    }
}