const initialState = {
  eventCreateSuccess: false,
  allEvents: [],
  eventDetail: {},
  guestByStateList:[],
  emailList:[],
  allMyEvents: [],
  eventChatMessages: []
};

const umeetReducer = (state = initialState, action) => {
    switch (action.type) {
      case "EVENT_CREATE_SUCCESS":
        return { ...state, eventCreateSuccess: true };
      case "EVENT_CREATE_FAILURE":
        return { ...state, eventCreateSuccess: false };
      case "GET_ALL_EVEVTS":
        return { ...state, allEvents: action.payload.data };
      case "GET_ALL_MYEVEVTS":
        return { ...state, allMyEvents: action.payload.data };
      case "SINGLE_EVEVT_DETAIL":
        return { ...state, eventDetail: action.payload.data };
      case "ADD_GUEST_BY_STATE":
        console.log("aactooionnn", action.payload);
        return { ...state, guestByStateList: action.payload };
      case "ADD_EMAIL_TO_LIST":
        console.log("emailList", action.payload);
        return { ...state, emailList: [...state.emailList,action.payload] };
      case "EVEVT_CHAT_DETAIL":
        return { ...state, eventChatMessages: action.payload.data }
      default:
        return state;
    }
}

export default umeetReducer;