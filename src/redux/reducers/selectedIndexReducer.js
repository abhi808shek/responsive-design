const initialState = {
    selectedIndex: 0,
};

const selectedIndexReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_INDEX':
            return { ...state, selectedIndex: action.payload };
        default:
            return state;
    }
};

export default selectedIndexReducer;