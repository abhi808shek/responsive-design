import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const PasswordInput = ({
  title,
  errorMessage,
  inputValue,
  name,
  onBlur,
  touched,
  onHandleChange
}) => {
  const [passwordType, setPasswordType] = useState("password");

  const onShowHidePassword = (event) => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className=" flex w-full items-center border-[1px] border-gray-300 rounded-[5px] pl-1">
        {/* heigth of input changed */}
        <input
          type={passwordType}
          placeholder={title}
          name={name}
          value={inputValue}
          onBlur={onBlur}
          className="outline-none w-[90%] h-[34px] text-xs py-1.5 pl-2 font-semibold border-none"
          onChange={onHandleChange}
        />

        {/* the color of icon changed */}

        {passwordType !== "password" ? (
          <AiFillEye
            className="cursor-pointer text-[#7991bd] mr-3 p-0"
            onClick={onShowHidePassword}
          />
        ) : (
          <AiFillEyeInvisible
            className="cursor-pointer text-[#7991bd] mr-3 p-0"
            onClick={onShowHidePassword}
          />
        )}
      </div>

      {touched && errorMessage ? (
        <p className="text-[10px] text-[red] self-start mt-1 w-[80%] ">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default PasswordInput;
