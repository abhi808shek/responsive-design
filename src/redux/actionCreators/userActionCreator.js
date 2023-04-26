// USER LOGIN DATA
export const settingUserLoginData = (isLoggedIn,user)=>(dispatch)=>{
    dispatch({
        type:"SET_USER_LOGIN_DATA",
        payload:{isLoggedIn,user}
    })
}

// USER SIGNUP DATA
export const settingUserSignupData = (isLoggedIn,user)=>(dispatch)=>{
    dispatch({
        type:"SET_USER_SIGNUP_DATA",
        payload:{isLoggedIn,user}
    })
}

// SELECTED TAB IN NAVBAR ROOT SECTION
export const isTabSelected = (isSelected)=>(dispatch)=>{
    dispatch({
        type:"SELECT_TAB",
        payload:isSelected
    })
}

// SELECTED TAB IN FRIENDS MODAL SECTION
export const friendsSelectedTab = (isSelected)=>(dispatch)=>{
    dispatch({
        type:"FRIENDS_TAB",
        payload:isSelected
    })
}

// SELECTED KICKS TYPE IN KICKS PAGE SECTION
export const selectKicksType = (kicksType)=>(dispatch)=>{
    dispatch({
        type:"SELECT_KICKS_TYPE",
        payload:kicksType
    })
}


// SELECTED TAB IN MENU MODAL SECTION
export const menuModalTabSelect = (menuTab)=>(dispatch)=>{
    dispatch({
        type:"MENU_MODAL_SELCTED_TAB",
        payload:menuTab
    })
}


// SELECTED TAB SPONSHERED EVENT SECTION
export const sponseredTabSelected = (selectedTab)=>(dispatch)=>{
    dispatch({
        type:"SELECTED_TAB_SPONSERED_EVENT",
        payload:selectedTab
    })
}

// export const commentsData = (comments)=>(dispatch)=>{
//     dispatch({
//         type:"ADD_COMMENTS",
//         payload:comments
//     })
// }