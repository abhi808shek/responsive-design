import React, { useState } from "react";
import PostForm from "../PostForm/PostForm";
import FriendList from "../FriendList/FriendList";
import CustomGroupModal from "../Modal/CustomGroupModal/CustomGroupModal";
import Portals from "../../Portals/Portals";

const ChatPages = () => {
  const [createGroupModal, setCreateGroupModal] = useState(false)
  const showCreateGroupModal = () => {
    setCreateGroupModal(true)
  }
  return (
    <>
      <div className=" w-full grid grid-cols-12 gap-2 mt-1">

        {/* Recent Chats */}
        <section className=" col-span-3 bg-white">
          <div className="py-2 flex justify-between items-center px-3">
            <h1 className="font-bold text-lg ">Recent Chat</h1>
            <span className="text-[#6780AF] text-[13px] font-bold cursor-pointer" onClick={showCreateGroupModal}>
              Form a group
            </span>
          </div>
          <div className="bg-white col-span-6">
            <PostForm width={96} />
          </div>
          <div className="h-[450px] overflow-y-scroll pt-3 flex flex-col gap-4">
            {[1, 2, 3, 4, 55, 56, 67, 7, 4, 43, 43, 33, 2, 2, 2, 2].map((elem, index) => (<FriendList key={index} icon={true} desc={true} />))}
          </div>
        </section>

        {/* Chats Section */}
        <section className="bg-blue-400 col-span-6">
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
              <img src="./images/groups.png" alt="" className="w-[30px] h-[30px]" />
              <img src="./images/groups.png" alt="" className="w-[30px] h-[30px]" />
            </div>
          </div>

          {/* Chat Section */}
          <div>

          </div>

          {/* Media Share Section */}

        </section>

        {/* Friend List Section */}
        <div className=" col-span-3 bg-white">
          <div className="py-2 flex px-2">
            <span className="flex-1 font-bold text-lg ">Friends List</span>
          </div>

          <div className="bg-blue-800 col-span-6">
            <PostForm width={96} />
          </div>

          <div className="h-[450px] overflow-y-scroll pt-2 flex flex-col gap-4">
            {[1, 2, 3, 4, 55, 56, 67, 7, 4, 43, 43, 33, 2, 2, 2, 2].map(() => (<FriendList icon={null} desc={null} />))}
          </div>
        </div>
      </div>
      {createGroupModal && <Portals><CustomGroupModal setGroupModal={setCreateGroupModal} /></Portals>}
    </>
  );
};

export default ChatPages;
