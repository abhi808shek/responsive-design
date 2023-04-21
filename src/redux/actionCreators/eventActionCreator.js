import axios from 'axios';

export const getEventData = () => async (dispatch) => {
    try {
        const eventData = await axios.get('http://3.233.82.34:8080/post/api/post/getspost', {
            headers: {
                "Accept-Language": "en"
            }
        });
        console.log("Event", eventData.data);
        dispatch({
            type: "RECIVED_EVENT_DATA",
            payload: eventData.data
        })
    } catch (error) {
        console.log(error);
    }
}