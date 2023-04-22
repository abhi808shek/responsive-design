export const setPostData = (post) => (dispatch) => {
    dispatch({
        type: 'SET_POST_DATA',
        payload: post
    })
};

export const setLikes = (likeObject) => (dispatch) => {
    dispatch({
        type: 'SET_LIKES_DATA',
        payload: likeObject
    })
};
