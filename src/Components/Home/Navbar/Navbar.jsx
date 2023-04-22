import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import ProfileModal from "../Modal/ProfileModal/ProfileModal";
import NotificationModal from "../Modal/NotificationModal/NotificationModal";
import FriendsModal from "../Modal/FriendsModal/FriendsModal";
import { dataList, data } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { isTabSelected } from "../../../redux/actionCreators/userActionCreator";
import { BsChevronCompactDown } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import g from "../../../assets/images/notification1.png"

const Navbar = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [friendsModal, setFriendsModal] = useState(false);
  const { selectedTab } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userFriendsModal = () => {
    setFriendsModal(!friendsModal);
  };

  const userProfileModal = () => {
    setProfileModal(!profileModal);
  };

  const userNotificationModal = () => {
    setNotificationModal(!notificationModal);
  };

  const onHandleClick = (option) => {
    if (option.name === "Friends") {
      userFriendsModal();
    } else if (option.name === "Notifications") {
      userNotificationModal();
    } else {
      navigate(option.url);
    }
  };

  const onClickSlectedTab = (option) => {
    dispatch(isTabSelected(option.name));
    navigate(option.url);
  };

  return (
    <section className="h-[65px] w-full flex bg-white relative top-0 z-10">
      {/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Left Section */}
      <div className=" w-[30%] flex h-[68px] flex-row justify-evenly items-center ">
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
        <section className="w-full flex h-full items-end bg-[#E4E7EC] rounded-tl-xl rounded-tr-xl relative">
          <div className="absolute top-0 p-1.5 bg-white w-full"></div>
          <div className=" h-[80%] flex w-full rounded-t-md items-end px-1 gap-1 ">
            {dataList.map((elem) => (
              <div
                key={elem.name}
                className={`flex w-[33.33%] items-center rounded-t-md cursor-pointer gap-2 h-[90%] justify-center `}
                style={{
                  backgroundColor:
                    selectedTab === elem.name ? "#6780AF" : "#D8D8D8",
                }}
                onClick={() => onClickSlectedTab(elem)}
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

          {/* U-Straem and Interests are removed */}

          {data.map((elem) => (
            <div
              key={elem.name}
              className="flex flex-col items-center cursor-pointer relative"
              onClick={() => onHandleClick(elem)}
            >
              <img src={elem.icon} alt={elem.name} className=" h-[30px] " />

              <div className="lg:text-[10px] xl:text-[12px] font-bold">
                {elem.name}
              </div>
            </div>
          ))}

          {/* User Profile */}
          <div
            className="flex flex-col items-center cursor-pointer relative"
            onClick={userProfileModal}
          >
            <img
              src="./images/events.jpg"
              alt=""
              className="w-[36px] h-[36px] rounded-full"
            />
            <BsChevronCompactDown className="" />
          </div>
          {profileModal && <ProfileModal />}
          {notificationModal && <NotificationModal />}
          {friendsModal && <FriendsModal setFriendsModal={setFriendsModal} />}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
