import axios from "axios";

const token = localStorage.getItem("userCredential")
  ? JSON.parse(localStorage.getItem("userCredential")).token
  : "";

export const createEvent = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://web.uynite.com/event/api/event/createEvent`,
      data
    );
    dispatch({ type: "EVENT_CREATE_SUCCESS", payload: response.data });
    // console.log(response);
    return response?.data;
  } catch (error) {
    dispatch({ type: "EVENT_CREATE_FAILURE", payload: error.message });
    throw error;
  }
};

export const updateEvent = (data) => async (dispatch) => {
  try {
    const response = await axios.put(
      `https://web.uynite.com/event/api/event/updateEvent`,
      data
    );
    dispatch({
      type: "",
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = (data) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://web.uynite.com/event/api/event/deleteEvent/${data}`
    );
    dispatch({
      type: "",
      payload: response.data,
    });
    console.log(response.data, "deleted");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const cancelEvent = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://web.uynite.com/event/api/event/admin/cancelevent`,
      data
    );
    dispatch({
      type: "",
      payload: response.data,
    });
    console.log(response.data, "deleted event");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// ok
export const getEventDetails = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/event/geteventbyid/${data}/${Date.now()}`
    );
    console.log(response, "single event details");
    dispatch({
      type: "SINGLE_EVEVT_DETAIL",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

// ok
export const getEventList = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/event/getEvent`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response, "getAllEventList");
    dispatch({
      type: "GET_ALL_EVEVTS",
      payload: response.data,
    });
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};

// all events creatd by user by Ajith ok but no data returns
export const getEventByProfileid = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/event/getmyallevent/${data}/${Date.now()}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response, "myevents by id", data);
    dispatch({
      type: "GET_ALL_MYEVEVTS",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const getInviteList = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/invities/getprofiles/${data}/true`
    );
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const getInviteListByFood = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/invities/getprofilesvegnonveg/${data}/false`
    );
    console.log(response);
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const updateInviteeName = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://web.uynite.com/event/api/invities/add`,
      data
    );
    console.log(response);
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const addInvitee = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://web.uynite.com/event/api/invities/add`,
      data
    );
    console.log(response);
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const getInviteesList = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/invities/add`,
      data
    );
    console.log(response);
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const addInvitees = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/invities/addInvities`,
      data
    );
    console.log(data, response.data, "addInvitees");
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const createEventTemplate = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://web.uynite.com/event/api/eventtemp/createtemp`,
      data
    );
    console.log(response);
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const getTemplateByEventid = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/eventtemp/12`,
      data
    );
    console.log(response);
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const getAllEvents = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/invities/getmyevent/${data}`
    );
    console.log(response);
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

//Add eventmessage by event by anurag
export const addEventMessage = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://web.uynite.com/event/api/eventmessage/add`,
      data
    );
    console.log(response);
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }

  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/invities/getmyevent/${data}`
    );
    console.log(response);
    dispatch({
      type: "",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const searchByCountryInUmeet = (country) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/profile/api/profile/searchcountry/${country}`
    );
    console.log("aaaaaaaaaaaa", response);
    dispatch({
      type: "",
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchByStateInUmeet = (coutrycode) => async (dispatch) => {
  console.log("COoooooooooooood", coutrycode);
  try {
    const response = await axios.get(
      `https://web.uynite.com/profile/api/country/getstate/${coutrycode}`
    );
    console.log("asdsadasas", response);
    dispatch({
      type: "ADD_GUEST_BY_STATE",
      payload: response?.data,
    });
  } catch (error) {
    throw error;
  }
};

export const addEmailToList = (emailList) => async (dispatch) => {
  console.log("emailList", emailList);
  try {
    // const response = await axios.get(
    //   `https://web.uynite.com/profile/api/country/getstate/${coutrycode}`
    // );
    // console.log("asdsadasas", response);
    dispatch({
      type: "ADD_EMAIL_TO_LIST",
      payload: emailList,
    });
  } catch (error) {
    throw error;
  }
};

export const allEmailInvites = (emailList) => async (dispatch) => {
  console.log("emailList", emailList);
  try {
    const response = await axios.get(
      `https://web.uynite.com/profile/event/api/user/all/sendemails`,
      emailList
    );
    console.log("allll EMaillll Invited", response);
    dispatch({
      type: "ALL_EMAIL_INVITES",
      //   payload: emailList,
    });
  } catch (error) {
    throw error;
  }
};

export const getAllEventChatMessage = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://web.uynite.com/event/api/eventmessage/getallmessage/${data}`
    );
    console.log(response, "eventmessages");
    dispatch({
      type: "EVEVT_CHAT_DETAIL",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const getAllUgFriends = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://web.uynite.com/profile/api/education/getugfriends`,
      data
    );
    console.log(response.data, "getAllUgFriends");
    dispatch({
      type: "GET_UG_FRIENDS",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};

export const getAllPgFriends = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://web.uynite.com/profile/api/education/getpgfriends`,
      data
    );
    console.log(response.data, "getAllPgFriends");
    dispatch({
      type: "GET_UG_FRIENDS",
      payload: response.data,
    });
  } catch (error) {
    throw error;
  }
};
