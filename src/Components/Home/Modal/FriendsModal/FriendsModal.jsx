import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { friendsSelectedTab } from "./../../../../redux/actionCreators/userActionCreator";
import { useNavigate } from "react-router-dom";

const FriendsModal = () => {
  const dispatch = useDispatch();
  const data = [
    {
      title: " My Friends (5)",
    },
    {
      title: " Find Friends",
    },
    {
      title: " Friend Requests",
    },
  ];

  const { friendsTab } = useSelector((state) => state.userReducer);
const navigate = useNavigate()
  const onHandleClick = (optionName)=>{
    dispatch(friendsSelectedTab(optionName))
    if (optionName === " My Friends (5)") {
     navigate("/myfriends")
    }
  }
  return (
    <div className="w-[150px] border-[1px] border-gray-500 flex flex-col items-center absolute left-[70.5%] top-[84px]">
      {data.map((elem) => (
        <button
          key={elem.title}
          className=" border-[1px] w-full border-gray-500 flex flex-col items-center text-[13px] font-bold py-1 "
          style={{
            backgroundColor: friendsTab === elem.title ? "#7991BD" : "#FFF",
            color: friendsTab === elem.title ? "#FFF" : "#707070",
          }}
          onClick={() =>onHandleClick(elem.title)}
        >
          {elem.title}
        </button>
      ))}
    </div>
  );
};

export default FriendsModal;
