import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import { friendsSelectedTab } from './../../../../redux/actionCreators/userActionCreator';

const FriendsModal = () => {
  const dispatch=useDispatch()
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

  const {friendsTab} = useSelector((state)=>state.userReducer)
  return (
    <div className="w-[150px] border-[1px] border-gray-500 flex flex-col items-center absolute left-[75.5%] top-[52px] mt-2">
      {data.map((elem) => (
        <button key={elem.title} className=" border-[1px] w-full border-gray-500 flex flex-col items-center text-[13px] font-bold py-1 text-[]" style={{backgroundColor:friendsTab === elem.title? "#7991BD" : "#FFF",color:friendsTab === elem.title? "#FFF" : "#707070"}} onClick={()=>dispatch(friendsSelectedTab(elem.title))}>
          {elem.title}
        </button>
      ))}
    </div>
  );
};

export default FriendsModal;
