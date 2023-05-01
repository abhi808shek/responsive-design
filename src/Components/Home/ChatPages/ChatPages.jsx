import React, { useState } from "react";
import PostForm from "../PostForm/PostForm";
import FriendList from "../FriendList/FriendList";
import CustomGroupModal from "../Modal/CustomGroupModal/CustomGroupModal";
import Portals from "../../Portals/Portals";
import SearchComponent from "../SearchComponent/SearchComponent";
import { ImPhone } from 'react-icons/im'
import { TbVideoPlus } from "react-icons/tb";
import ChatMessage from "../../chat/ChatMessage";
import TypeMessage from "../../chat/TypeMessage";

const ChatPages = () => {
  const [createGroupModal, setCreateGroupModal] = useState(false)
  const showCreateGroupModal = () => {
    setCreateGroupModal(true)
  }
  return (
    <>
      <div className="flex-1 w-full grid grid-cols-12 gap-2 mt-1" style={{ maxHeight: "calc(100vh - 200px)"}}>

        {/* Recent Chats */}
        <section className=" col-span-3 bg-white">
          <div className="py-2 flex justify-between items-center px-3">
            <h1 className="font-bold text-lg ">Recent Chat</h1>
            <span className="text-[#6780AF] text-[13px] font-bold cursor-pointer" onClick={showCreateGroupModal}>
              Form a group
            </span>
          </div>
          <div className="bg-white col-span-6">
            {/* <PostForm width={96} /> */}
            <SearchComponent classes={'mx-4'} bgColor={'#e4e7ec'} placeholder={'Search...'}/>
          </div>
          <div className="h-[600px] overflow-y-scroll pt-3 flex flex-col gap-4">
            {[1, 2, 3, 4, 55, 56, 67, 7, 4, 43, 43, 33, 2, 2, 2, 2].map((elem, index) => (<FriendList key={index} icon={true} desc={true} menuButton/>))}
          </div>
        </section>

        {/* Chats Section */}
        <section className="px-3 col-span-6 flex flex-col justify-between">
          {/* Top Section */}
          <div className="flex h-[55px] px-2 items-center bg-[#F6F6F6]">
            <div className="">
              <img src="./images/events.jpg" alt="" className="w-[45px] h-[45px] rounded-full" />
            </div>
            <div className=" flex flex-1 flex-col justify-center ml-2">
              <h1 className="font-bold">Elisa K</h1>
              <p className="text-[10px] font-bold">Active 3 hours ago</p>
            </div>
            <div className="flex gap-2 items-center">
              <ImPhone size={25} color="#6780af" className="cursor-pointer"/>
              <TbVideoPlus size={30} className="ml-2 cursor-pointer" color="#6780af"/>
              {/* <img src="./images/groups.png" alt="" className="w-[30px] h-[30px]" /> */}
              {/* <img src="./images/groups.png" alt="" className="w-[30px] h-[30px]" /> */}
            </div>
          </div>

          {/* Chat Section */}
          <div className="">
              <ChatMessage/>
              <TypeMessage/>
          </div>

          {/* Media Share Section */}

        </section>

        {/* Friend List Section */}
        <div className=" col-span-3 bg-white">
          <div className="py-2 flex px-2">
            <span className="flex-1 font-bold text-lg ">Friends List</span>
          </div>

          <div className="col-span-6">
            {/* <PostForm width={96} /> */}
            <SearchComponent classes={'mx-4'} bgColor={'#e4e7ec'} placeholder={'Search...'}/>
          </div>

          <div className="h-[600px] overflow-y-scroll pt-2 flex flex-col gap-4">
            {[1, 2, 3, 4, 55, 56, 67, 7, 4, 43, 43, 33, 2, 2, 2, 2].map(() => 
                (<FriendList icon={null} desc={null}  />))
            }
          </div>
        </div>
      </div>
      {createGroupModal && <Portals><CustomGroupModal setGroupModal={setCreateGroupModal} /></Portals>}
    </>
  );
};

export default ChatPages;
