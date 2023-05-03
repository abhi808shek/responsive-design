import React from "react";

const OopsModal = ({ onOkClick }) => {
  return (
    <div className="w-[35%] h-[50%] bg-white flex flex-col justify-center rounded-lg">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="./images/events.jpg" alt="" className="w-[100px] h-[80px] rounded-md"/>
        <h1 className="font-bold">Oops !</h1>
        <p className="text-center text-sm">
          Unblock this user from settings, to view this Profile
        </p>
        <button className="bg-blue-400 py-2 w-[70%] font-bold text-white rounded-md" onClick={onOkClick}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default OopsModal;
