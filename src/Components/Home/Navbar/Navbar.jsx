import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import ProfileModal from "../Modal/ProfileModal/ProfileModal";
import NotificationModal from "../Modal/NotificationModal/NotificationModal";
import FriendsModal from "../Modal/FriendsModal/FriendsModal";
import { dataList, data } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { isTabSelected } from "../../../redux/actionCreators/userActionCreator";
import { BsChevronCompactDown } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import g from "../../../assets/images/notification1.png";
import "./navbar.css";

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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 900;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

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
    {
      /* navbar scrollable to fixed postion and its relative class removed */
    },
    (
      <section className="h-[65px] w-full fixed flex bg-white z-20 responsive_navbar2">
        {/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* Left Section */}
        <div className="md:w-[30%] flex h-[65px] flex-row justify-center items-center">
          {/* Logo Section */}

          <div className="w-[50px] mx-[14px]">
            <img
              src="./images/Logo.png"
              alt=""
              className=" w-[52px] h-[52px]"
            />
          </div>

          {/* Search Bar Section */}
          <div className=" w-[80%] h-[38px] rounded-md relative bg-[#e4e7ec]  md:mr-5 hide_searchbar">
            <input
              type="text"
              className="outline-none rounded-sm h-[38px] bg-[#e4e7ec]"
              placeholder="Search..."
            />
            <img
              src="./images/Search.png"
              alt=""
              className="w-5 h-5 cursor-pointer absolute top-[30%] right-[6%]"
            />
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------- */}
        <div className="responsive_navbar">
          {/* Root */}
          <section className="w-full flex h-full items-end bg-[#E4E7EC] rounded-tl-xl rounded-tr-xl relative">
            <div className="absolute top-0 p-0 lg:p-1.5 bg-white w-full"></div>
            <div className=" h-[80%] flex w-full rounded-t-md items-end px-2 pb-1 gap-0 lg:gap-3 md:px-2">
              {dataList?.map((elem) => (
                <div
                  key={elem?.name}
                  className={`w-[33.33%] items-center rounded-t-md cursor-pointer gap-2 h-[90%] justify-center ${
                    isMobile ? "" : "flex"
                  }`}
                  style={{
                    backgroundColor:
                      selectedTab === elem?.name ? "#6780AF" : "#D8D8D8",
                  }}
                  onClick={() => onClickSlectedTab(elem)}
                >
                  <div
                    className={`h-full flex items-center justify-center ${
                      isMobile ? "w-full text-center pt-1" : "w-[35px]"
                    }`}
                  >
                    <img
                      src={
                        selectedTab === elem?.name
                          ? elem?.afterIcon
                          : elem?.iconBefore
                      }
                      alt=""
                      className="w-[27px] lg:w-[35px]"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h1
                      className={`text-sm font-bold  ${
                        isMobile ? "text-center" : ""
                      }`}
                    >
                      {elem?.name}
                    </h1>
                    <span className="text-[9px] font-semibold display_title">
                      {elem?.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ---------------------------------------------------------------------------------------------------- */}
        <div className=" w-[31%] responsive_navbar1">
          <div className="w-full flex justify-evenly items-center h-full">
            {/* Peoples */}

            {/* U-Straem and Interests are removed */}

            {data?.map((elem) => (
              <div
                key={elem?.name}
                className="flex flex-col items-center cursor-pointer relative"
                onClick={() => onHandleClick(elem)}
              >
                <img
                  src={elem?.icon}
                  alt={elem?.name}
                  className="h-[30px] profile_img"
                />

                <div className=" font-bold">{elem?.name}</div>
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
                className="rounded-full object-cover w-[35px] h-[35px]"
              />
              <BsChevronCompactDown className="" />
            </div>
            {profileModal && <ProfileModal />}
            {notificationModal && <NotificationModal />}
            {friendsModal && <FriendsModal setFriendsModal={setFriendsModal} />}
          </div>
        </div>
      </section>
    )
  );
};

export default Navbar;
