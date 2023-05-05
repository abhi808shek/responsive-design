import React, { useState } from "react";
import CommentMenuModal from "../Modal/CommentMenuModal/CommentMenuModal";
import { BsThreeDotsVertical } from "react-icons/bs";
import Popover from "../../popover/Popover";
import PopOver from "../../popover/Popover";
import { Link } from "react-router-dom";
import UnfriendModal from "../Modal/UnfriendModal/UnfriendModal";
import Portals from "../../Portals/Portals";
import ChangeRelationshipModal from "../Modal/ChangeRelationshipModal/ChangeRelationshipModal";
import BlockModal from "../Modal/BlockModal/BlockModal";

const FriendList = ({ icon, desc, handleMenuClick, data ={} }) => {
  const  { fname, lname, profileid} = data
  const name = fname+lname
  const action = [
    { name: "Un-Friend" },
    { name: "Change Relationship" },
    { name: "Block" },
  ];
  const [modalType, setModalType] = useState({
    unFriend: false,
    changeRelationship: false,
    block: false,
  });
  const openModalOption = (optionName) => {
    if (optionName === "Un-Friend") {
      setModalType({
        ...modalType,
        unFriend: true,
      });
    } else if (optionName === "Change Relationship") {
      setModalType({
        ...modalType,
        changeRelationship: true,
      });
    } else {
      setModalType({
        ...modalType,
        block: true,
      });
    }
  };

  const closeModalOption = () => {
   
      setModalType({
        ...modalType,
        unFriend: false,
        changeRelationship: false,
        block: false,
      });
  }

  return (
    <>
    <div className="flex h-[50px] px-4 items-center py- relative">
      {/* {openMenuModal && <CommentMenuModal data={data} leftPosition={50} topPosition={34}/>} */}

      <div className="">
        <img
          src="./images/events.jpg"
          alt=""
          className="w-[45px] h-[45px] rounded-full"
        />
      </div>
      <Link to={`/profile/${profileid}`} className=" flex flex-1 flex-col justify-center ml-4">
        <span className="font-medium">{name ? `${fname} ${lname}`: "User"}</span>
        {desc && (
          <p className="text-[10px] font-bold text-gray-500">
            Hi Joe.........will plan this week
          </p>
        )}
      </Link>
      {icon ? (
        <PopOver
          options={data}
          button={
            <div className="flex gap-2 items-center cursor-pointer">
              <BsThreeDotsVertical className="" />
            </div>
          }
          openModalOption={openModalOption}
        ></PopOver>
      ) : null}
    </div>


    
    {modalType.unFriend && (
        <Portals>
          <UnfriendModal closeModalOption={closeModalOption} />
        </Portals>
      )}
      {modalType.changeRelationship && (
        <Portals>
          <ChangeRelationshipModal
            title="Change Relationship"
            button="Update"
            closeModalOption={closeModalOption}
          />
        </Portals>
      )}
      {modalType.block && (
        <Portals>
          <BlockModal closeModalOption={closeModalOption} />
        </Portals>
      )}</>
  );
};

export default FriendList;
