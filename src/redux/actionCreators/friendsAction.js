
export const requestAction= (data, Action) => async (dispatch) => {
    try{
        const response = await axios.get(`http://3.233.82.34:8080/friend/api/friend/${data}/${Action}`);
        dispatch({
            type: '',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}

export const addFriend= (data) => async (dispatch) => {
    try{
        const response = await axios.post(`http://3.233.82.34:8080/friend/api/friend/add`, data);
        dispatch({
            type: '',
            payload: response.data
        })
        return response.data
    }catch(error){
        throw error
    }
}