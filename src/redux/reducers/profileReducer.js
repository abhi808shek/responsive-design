const initialState = {
    followers: [],
    following: [],
    friends: []
};


const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_FOLLOWING':
            return { ...state, following: action.payload}
        case 'GET_FOLLOWER':
            return { ...state, followers: action.payload}
        case "FRIEND_LIST":
            return { ...state, friends: action.payload}
        default: 
        return state
    }
}

export default profileReducer;