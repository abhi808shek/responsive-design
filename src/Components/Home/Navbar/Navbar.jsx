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
    <div className="w-full h-[55px] bg-white flex relative pt-1">
      {profileModal && <ProfileModal />}
      {notificationModal && <NotificationModal />}
      {friendsModal && <FriendsModal />}
      {/* logo */}
      <section className="w-[25%] flex">
        <div className=" h-full w-[45px]">
          <img src="./images/Logo.png" alt="" />
        </div>

        {/* searchBar */}
        <div className=" h-full flex items-center pl-2 white">
          <div className="bg-[#E4E7EC] flex items-center h-10 pr-1 rounded-r-md">
            <input
              type="text"
              className="outline-none rounded-sm w-full h-10 pl-2 bg-[#E4E7EC]"
              placeholder="Search..."
            />
            <img
              src="./images/Search.png"
              alt=""
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Root */}
      <section className="w-[45%] flex ml-[5px]">
        {dataList.map((elem) => (
          <div
            key={elem.name}
            className={`flex w-[33.33%] items-center mt-2 mr-1 rounded-t-sm cursor-pointer gap-2  justify-center `}
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
      </section>

      {/* user Details */}
      <section className="w-[30%] flex justify-between">
        <div className="w-full flex justify-evenly items-center">
          {/* Peoples */}
          <div className="flex flex-col items-center ">
            <img src="./images/groups.png" alt="" className=" h-[30px]" />
            <div className="text-[10px] font-bold">Peoples</div>
          </div>

          {/* Chats */}
          <div className="flex flex-col items-center">
            <img
              src="./images/Messages.png"
              alt=""
              className="w-[30px] h-[30px]"
            />
            <div className="text-[10px] font-bold">Chats</div>
          </div>
          {/* Radios Media */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={userFriendsModal}
          >
            <img src="./images/user.png" alt="" className="w-[30px] h-[30px]" />
            <div className="text-[10px] font-bold">Interest</div>
          </div>
          {/* Notification*/}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={userNotificationModal}
          >
            <img src="./images/Mute.png" alt="" className="w-[30px] h-[30px]" />
            <div className="text-[10px] font-bold">U-Stream</div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="./images/Notifications.png"
              alt=""
              className="w-[30px] h-[30px]"
            />
            <div className="text-[10px] font-bold">Notifications</div>
          </div>
          {/* User Profile */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={userProfileModal}
          >
            <img
              src="./images/events.jpg"
              alt=""
              className="w-[30px] h-[30px] rounded-full"
            />

            <BsChevronCompactDown />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
