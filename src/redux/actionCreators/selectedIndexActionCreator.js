export const setSelectedIndex = (index) => (dispatch) => {
    dispatch({
        type: "SET_SELECTED_INDEX",
        payload: index
    })
};
