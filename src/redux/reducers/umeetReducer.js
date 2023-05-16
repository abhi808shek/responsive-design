const initialState = {
  eventCreateSuccess: false,
  allEvents: [],
  eventDetail: {}
};

const umeetReducer = (state = initialState, action) => {
    switch (action.type) {
      case "EVENT_CREATE_SUCCESS":
        return { ...state, eventCreateSuccess: true };
      case 'EVENT_CREATE_FAILURE':
        return { ...state, eventCreateSuccess: false };
      case "GET_ALL_EVEVTS":
        return { ...state, allEvents: action.payload.data};
      case "SINGLE_EVEVT_DETAIL":
        return { ...state, eventDetail: action.payload.data};
      default:
        return state;
    }
}

export default umeetReducer;