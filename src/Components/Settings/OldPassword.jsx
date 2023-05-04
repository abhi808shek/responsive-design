import React from "react";
import PasswordInput from "../Login/Content/InputBox/PasswordInput";

const OldPassword = ({OldPasswordChange}) => {
  return (
    <div className="flex justify-around">
      <div className="w-[90%]">
        <PasswordInput />
      </div>
      <img src="./images/groups.png" alt="" className="w-[35px] h-[35px] cursor-pointer" onClick={OldPasswordChange}/>
    </div>
  );
};

export default OldPassword;
