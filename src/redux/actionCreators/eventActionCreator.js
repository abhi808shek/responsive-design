import axios from "axios";

export const getEventData = () => async (dispatch) => {
  try {
    const eventData = await axios.get(
      "http://3.233.82.34:8080/post/api/post/getspost",
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    console.log("Event", eventData.data);
    dispatch({
      type: "RECIVED_EVENT_DATA",
      payload: eventData.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// DEFAULT ROOT SCREEN API CALL 
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmhpODA4Z3VwdGFAZ21haWwuY29tIiwiZXhwIjo2MTY3NDU2NjQwMCwiaWF0IjoxNjgyMjc2MTczfQ.7idSndpWt9nLeXM9tRrHJrwV1cJmDdEMpVfq_37mZYD9u0mmCmfK6CAtxvr-3wvEyORAhBYIOpg6E71xrA3HVw"
export const defaultRootScreen = () => async (dispatch) => {
    try {
      const defaultRootResult = await axios.get(
        `http://3.233.82.34:8080/post/api/post/getspost`,
        data,
        {
          headers: {
            "Accept-Language": "en",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("defaultRootResult", defaultRootResult);
      dispatch({
        type: "DEFAULT_ROOT_SCREEN",
        payload: defaultRootResult?.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

// DEFAULT CLICKED ON EVENT SCREEN API CALL 
export const defaultEventScreen = (profileid) => async (dispatch) => {
    try {
      const defaultEventResult = await axios.get(
        ` http://3.233.82.34:8080/post/api/post/getpostbypostid/${profileid}`,
        data,
        {
          headers: {
            "Accept-Language": "en",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("defaultEventResult", defaultEventResult);
      dispatch({
        type: "DEFAULT_EVENT_SCREEN",
        payload: defaultEventResult?.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

// ADD EVENT POST API
export const addEventPost = (data) => async (dispatch) => {
  try {
    const eventResult = await axios.post(
      "http://3.233.82.34:8080/post/api/post/add ",
      data,
      {
        headers: {
          "Accept-Language": "en",
         Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("eventResult", eventResult);
    dispatch({
      type: "ADD_EVENT_POST_DATA",
    });
  } catch (error) {
    console.log(error.message);
  }
};

// GET ALL EVENT  API
export const getAllEventPost =(eventpostid,profileid)  => async (dispatch) => {
  try {
    const allEventResult = await axios.get(
      `http://3.233.82.34:8080/post/api/post/getsponser/${eventpostid}/${profileid}`,
      data,
      {
        headers: {
          "Accept-Language": "en",
         Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("allEventResult", allEventResult);
    dispatch({
      type: "GET_ALL_EVENTS_POST_LIST",
      payload: allEventResult?.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// GET ALL TRENDING POST 
export const getAllTrendingPost = (eventpostid,profileid) => async (dispatch) => {
    try {
      const trendingPostResult = await axios.get(
        `http://3.233.82.34:8080/post/api/post/topgetsponser/${eventpostid}/${profileid}`,
        data,
        {
          headers: {
            "Accept-Language": "en",
           Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("trendingPostResult", trendingPostResult);
      dispatch({
        type: "TRENDING_EVENTS_POST_LIST",
        payload: trendingPostResult?.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };