import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import ProfileModal from "../Modal/ProfileModal/ProfileModal";
import NotificationModal from "../Modal/NotificationModal/NotificationModal";
import FriendsModal from "../Modal/FriendsModal/FriendsModal";
import dataList from "./data";
import { useSelector, useDispatch } from "react-redux";
import { isTabSelected } from "../../../redux/actionCreators/userActionCreator";
import { BsChevronCompactDown } from "react-icons/bs";

const Navbar = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [friendsModal, setFriendsModal] = useState(false);
  const { selectedTab } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const userFriendsModal = () => {
    setFriendsModal(!friendsModal);
  };

  const userProfileModal = () => {
    setProfileModal(!profileModal);
  };

  const userNotificationModal = () => {
    setNotificationModal(!notificationModal);
  };

  return (
    <section className="h-[80px] w-full flex bg-white fixed">
      {/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Left Section */}
      <div className=" w-[30%] flex h-[80px] flex-row justify-evenly items-center ">
        {/* Logo Section */}

        <div className="w-[15%]">
          <img src="./images/Logo.png" alt="" className=" w-[52px] h-[52px]" />
        </div>

        {/* Search Bar Section */}
        <div className="bg-[#E4E7EC] w-[80%] flex lg:gap-1 xl:gap-0 items-center h-10 rounded-md">
          <input
            type="text"
            className="outline-none rounded-sm lg:w-[85%] xl:w-[90%] h-10 bg-[#E4E7EC] ml-2"
            placeholder="Search..."
          />
          <img
            src="./images/Search.png"
            alt=""
            className="w-5 h-5 cursor-pointer lg:"
          />
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}
      <div className="w-[40%]">
        {/* Root */}
        <section className="w-full flex h-full items-end">
          <div className=" h-[90%] flex w-full rounded-t-md items-end px-1 gap-1">
            {dataList.map((elem) => (
              <div
                key={elem.name}
                className={`flex w-[33.33%] items-center rounded-t-md cursor-pointer gap-2 h-[90%] justify-center `}
                style={{
                  backgroundColor:
                    selectedTab === elem.name ? "#6780AF" : "#D8D8D8",
                }}
                onClick={() => dispatch(isTabSelected(elem.name))}
              >
                <div className="w-[35px] h-full flex items-center justify-center">
                  <img src={elem.icon} alt="" className="w-[35px]" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-sm font-bold">{elem.name}</h1>
                  <span className="text-[9px] font-semibold">{elem.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ---------------------------------------------------------------------------------------------------- */}
      <div className=" w-[30%]">
        <div className="w-full flex justify-evenly items-center h-full">
          {/* Peoples */}

          {[1, 2, 3, 4, 5].map(() => (
            <div className="flex flex-col items-center">
              <img src="./images/groups.png" alt="" className=" h-[40px]" />
              <div className="text-[12px] font-bold">Peoples</div>
            </div>
          ))}
          {/* User Profile */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={userProfileModal}
          >
            <img
              src="./images/events.jpg"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />

            <BsChevronCompactDown />
          </div>
        </div>
      </div>
    </section>
    // <div className="w-full h-[55px] bg-white flex pt-1">
    //   {profileModal && <ProfileModal />}
    //   {notificationModal && <NotificationModal />}
    //   {friendsModal && <FriendsModal />}
    //   {/* logo */}

    //   {/* user Details */}
    //   <section className="w-[30%] flex justify-between">
    //     <div className="w-full flex justify-evenly items-center">
    //       {/* Peoples */}
    //       <div className="flex flex-col items-center ">
    //         <img src="./images/groups.png" alt="" className=" h-[30px]" />
    //         <div className="text-[10px] font-bold">Peoples</div>
    //       </div>

    //       {/* Chats */}
    //       <div className="flex flex-col items-center">
    //         <img
    //           src="./images/Messages.png"
    //           alt=""
    //           className="w-[30px] h-[30px]"
    //         />
    //         <div className="text-[10px] font-bold">Chats</div>
    //       </div>
    //       {/* Radios Media */}
    //       <div
    //         className="flex flex-col items-center cursor-pointer"
    //         onClick={userFriendsModal}
    //       >
    //         <img src="./images/user.png" alt="" className="w-[30px] h-[30px]" />
    //         <div className="text-[10px] font-bold">Interest</div>
    //       </div>
    //       {/* Notification*/}
    //       <div
    //         className="flex flex-col items-center cursor-pointer"
    //         onClick={userNotificationModal}
    //       >
    //         <img src="./images/Mute.png" alt="" className="w-[30px] h-[30px]" />
    //         <div className="text-[10px] font-bold">U-Stream</div>
    //       </div>

    //       <div className="flex flex-col items-center">
    //         <img
    //           src="./images/Notifications.png"
    //           alt=""
    //           className="w-[30px] h-[30px]"
    //         />
    //         <div className="text-[10px] font-bold">Notifications</div>
    //       </div>
    //       {/* User Profile */}
    //       <div
    //         className="flex flex-col items-center cursor-pointer"
    //         onClick={userProfileModal}
    //       >
    //         <img
    //           src="./images/events.jpg"
    //           alt=""
    //           className="w-[30px] h-[30px] rounded-full"
    //         />

    //         <BsChevronCompactDown />
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Navbar;
