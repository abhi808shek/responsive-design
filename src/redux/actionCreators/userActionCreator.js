export const settingUserData = (isLoggedIn,user)=>(dispatch)=>{
    dispatch({
        type:"SET_USER_DATA",
        payload:{isLoggedIn,user}
    })
}

export const isTabSelected = (isSelected)=>(dispatch)=>{
    dispatch({
        type:"SELECT_TAB",
        payload:isSelected
    })
}

export const friendsSelectedTab = (isSelected)=>(dispatch)=>{
    dispatch({
        type:"FRIENDS_TAB",
        payload:isSelected
    })
}

export const selectKicksType = (kicksType)=>(dispatch)=>{
    dispatch({
        type:"SELECT_KICKS_TYPE",
        payload:kicksType
    })
}