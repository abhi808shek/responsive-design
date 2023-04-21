import React from "react";

const Input = ({title ,errorMessage,inputValue,onHandleChange,name,touched,onBlur}) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* heigth of input changed & color of border changed
          margin added to input */}
      <input
        type="text"
        name={name}
        placeholder={title}
        value={inputValue}
        className="outline-none border-[1px] my-1 h-9 border-gray-300 rounded-[5px] w-full text-xs py-1.5 pl-2 font-semibold"
        onChange={onHandleChange}
        onBlur={onBlur}
      />
     {touched &&  errorMessage ? <p className="text-[10px] text-[red] self-start mt-1 w-[80%] ">
       {errorMessage}
      </p> : null}
    </div>
  );
};

export default Input;
