import React from "react";

const Input = ({title ,errorMessage,inputValue,onHandleChange,name,touched,onBlur}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <input
        type="text"
        name={name}
        placeholder={title}
        value={inputValue}
        className="outline-none border-[1px] border-gray-600 rounded-[5px] w-full text-xs py-1.5 pl-2 font-semibold"
        onChange={onHandleChange}
        onBlur={onBlur}
      />
     {touched &&  errorMessage ? <p className="text-[10px] text-[red] self-start ml-8 mt-1 w-[80%] ">
       {errorMessage}
      </p> : null}
    </div>
  );
};

export default Input;
