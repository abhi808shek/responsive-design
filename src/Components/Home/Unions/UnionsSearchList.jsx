import React from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import UnionsFriendsList from "./UnionsFriendsList";
import UnionFindFriends from "./UnionFindFriends";
import { useDispatch, useSelector } from "react-redux";
import { unionsFriendsTab } from "../../../redux/actionCreators/userActionCreator";

const UnionsSearchList = () => {
  const friendsTab = ["Friends", "Find Friends"];
  const { unionFriendsTab } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const onUnionFriendsTabSelected = (option) => {
    dispatch(unionsFriendsTab(option));
  };
  return (
    <div className="w-[40%] bg-[#E4E7EC] mx-auto flex flex-col items-center gap-3 mt-[4px] h-[88%] py-2 px-4">
      <div className="flex gap-2 w-full">
        <img src="./images/events.jpg" alt="" className="w-[30px] h-[30px]" />
        <div className="flex-col flex ">
          <h1 className="text-xs font-bold">Janasena Party</h1>
          <p className="text-gray-500 text-[10px]">0 Joined</p>
        </div>
      </div>
      <div className="flex justify-center gap-5 w-full">
        {friendsTab?.map((elem) => (
          <button
            key={elem}
            className="w-[35%] bg-blue-400 text-white font-bold py-1 text-xs rounded-lg"
            style={{
              backgroundColor: unionFriendsTab === elem ? "#7991BD" : "#666567",
            }}
            onClick={() => onUnionFriendsTabSelected(elem)}
          >
            {elem}
          </button>
        ))}
      </div>

      <div className="w-full">
        <SearchComponent bgColor="white" />
      </div>
      { unionFriendsTab === "Find Friends" && <h1 className="text-xs font-semibold">Suggestions</h1>}

      <div className="w-full overflow-y-scroll h-[72%] flex flex-col gap-3">
    { unionFriendsTab === "Friends" &&  [1,2,32,3,3,3,].map(()=>( <UnionsFriendsList />)) }
     { unionFriendsTab === "Find Friends" && [1,2,32,3,3,3,2,2,2].map(()=>( <UnionFindFriends />))}
      </div>
    </div>
  );
};

export default UnionsSearchList;
