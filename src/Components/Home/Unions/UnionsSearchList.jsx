import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import UnionsFriendsList from "./UnionsFriendsList";
import UnionFindFriends from "./UnionFindFriends";
import { useDispatch, useSelector } from "react-redux";
import { unionsFriendsTab } from "../../../redux/actionCreators/userActionCreator";
import { useEffect } from "react";
import { findFriends, getFriendsList, getSuggestedFriends, getUsers } from "../../../redux/actionCreators/friendsAction";
import { inviteMember } from "../../../redux/actionCreators/unionActionCreator";
import { toast } from "react-toastify";
import unionIcon from '../../../Assets/Images/unionIcon.png'

const UnionsSearchList = () => {
  const dispatch = useDispatch()
  const friendsTab = ["Friends", "Find Friends"];
  const { unionFriendsTab } = useSelector((state) => state.userReducer);
  const reducerData = useSelector((state) => {
    return {
      activeItem: state.rootsReducer.activePost,
      profile: state.profileReducer.profile,
      usersList: state.friendReducer.usersList || [],
      friendList: state.friendReducer.friends,
      tabName: state.userReducer.unionFriendsTab,
      suggestion: state.friendReducer.mutualFriends
    }
  });
  const { profile, usersList, friendList, activeItem, suggestion, tabName} = reducerData

  const relationOptions = [
     { name: "Friends", key: "friend", checked: false},
     { name: "Relative", key: "relative", checked: false },
     { name: "Classmate", key: "classmate", checked: false },
     { name: "Officemate", key: "officemate", checked: false },
     { name: activeItem?.groupName, key: activeItem?.groupId, checked: true, disable: true}
   ];
   const [state, setState] = useState({})
   const { relationOption = relationOptions, friends = friendList, users = suggestion.content} = state
  useEffect(() => {
    dispatch(getFriendsList(profile?.id));
  }, [])
  const onUnionFriendsTabSelected = (option) => {
    if(option === 'Find Friends'){
      dispatch(getSuggestedFriends(profile?.id))
    }
    dispatch(unionsFriendsTab(option));
  };

  const findUser = (e) => {

    const { value } = e.target
    if( tabName === 'Find Friends' && value?.length > 2){
      dispatch(findFriends( value, profile?.id)).then((res) => {
        if(res?.status){
          console.log(res, 'OOOOO HHHHHH');
          setState({ ...state, users: res?.data})
        }
      })
    }
    const friend = friendList?.filter((item) => `${item.profile?.fname} ${item.profile?.lname}`.includes(value));
    setState({ ...state, friends: friend})
  }

  const handleInvite = (item) => {
    const payload = {
      "groupId":activeItem?.groupId,
      "groupName": activeItem?.groupName,
      "profileId": item?.id
    }
    dispatch(inviteMember(payload)).then((res) => {
      if(res?.status){
        toast.success(res.message)
      }else {
        toast.error(res?.message)
      }
    })
  }
    const handleRelation = (e) => {
      const name = e.target.name;
      const value = e.target.checked;
      console.log(name, value);
      const selected = relationOption.map((item) => {
        return item?.name === name ? { ...item, checked: value } : item;
      });
      setState({ ...state, relationOption: selected });
    };
  return (
    <div className="w-[95%] sm:w-[50%] lg:w-[40%] bg-[#E4E7EC] mx-auto flex flex-col items-center gap-3 mt-[4px] h-[88%] py-2 px-4">
      <div className="flex gap-2 w-full">
        <img src={unionIcon} alt="" className="w-[40px] h-[40px]" />
        <div className="flex-col flex ">
          <h1 className=" font-bold">{activeItem?.groupName}</h1>
          <p className="text-gray-500 text-[10px]">
            {activeItem?.count} Joined
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-5 w-full">
        {friendsTab?.map((elem) => (
          <button
            key={elem}
            className="w-1/2 bg-blue-400 text-white font-bold py-2 text-[10px] sm:text-xs rounded-lg"
            style={{
              backgroundColor: unionFriendsTab === elem ? "#3b82f6" : "#6f6f6f",
            }}
            onClick={() => onUnionFriendsTabSelected(elem)}
          >
            {elem}
          </button>
        ))}
      </div>

      <div className="w-full">
        <SearchComponent bgColor="white" handleChange={findUser} placeholder={'Search'}/>
      </div>
      {unionFriendsTab === "Find Friends" && (
        <h1 className="text-xs font-semibold">Suggestions</h1>
      )}

      <div className="w-full overflow-y-scroll h-[72%] flex flex-col gap-3">
        {unionFriendsTab === "Friends" &&
          friends?.map(( item ) => <UnionsFriendsList item={item}  />)}
        {unionFriendsTab === "Find Friends" &&
          users?.map(( item) => <UnionFindFriends data={item}
          relationOption={relationOption} 
          handleRelation={handleRelation}
          handleSendRequest={() => handleInvite(item)} />)}
      </div>
    </div>
  );
};

export default UnionsSearchList;
