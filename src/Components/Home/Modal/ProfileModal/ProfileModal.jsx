import React from "react";
import dataList from "./data";
import Footer from "../../../Footer/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { settingUserData } from "../../../../redux/actionCreators/userActionCreator";

const ProfileModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onHandleClick = (option) => {
    if (option === "Logout") {
      localStorage.clear();
      dispatch(settingUserData(false, {}));
      navigate("/auth/login");
    }
  };

  return (
    <div className=" lg:w-[28%] xl:w-[22%] bg-white gap-2 flex flex-col rounded-xl absolute lg:left-[71%] xl:left-[77%] top-[52px] mt-2">
      <div className="flex gap-2 py-2  px-3">
        <img
          src="./images/events.jpg"
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold text-lg ml-1"> Joe D</span>
          <span className="text-sm text-gray-600 font-semibold">
            @Software Developer
          </span>
        </div>
      </div>
      <hr className="mb-2" />

      {dataList.map((elem) => (
        <div
        key={elem.name}
          className="flex items-center px-3 cursor-pointer"
          onClick={() => onHandleClick(elem.name)}
        >
          <span className="font-bold flex-1">{elem.name}</span>
          <img
            src="./images/rightArrow.png"
            alt=""
            className="w-[10px] h-[15px]"
          />
        </div>
      ))}
      <div className="mb-2">
        <Footer />
      </div>
    </div>
  );
};

export default ProfileModal;
