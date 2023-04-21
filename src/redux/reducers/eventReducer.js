const initialState = {
    eventData: {},
    total_participant_count: null
};


export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECIVED_EVENT_DATA':
            return {
                ...state,
                eventData: action.payload.postData,
                total_participant_count: action.payload.total_participant_count
            }
        default : return state
    }
}