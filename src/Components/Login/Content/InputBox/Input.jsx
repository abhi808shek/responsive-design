import React from "react";

const Input = ({id, title ,errorMessage,inputValue,onHandleChange,name,touched,onBlur,disabled}) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* heigth of input changed & color of border changed
          margin added to input */}
      <input
      id={id}
        type="text"
        name={name}
        placeholder={title}
        value={inputValue}
        className="outline-none border-[1px] border-gray-600 rounded-[5px] w-full text-xs py-1.5 pl-2 font-semibold disabled:bg-gray-300"
        onChange={onHandleChange}
        onBlur={onBlur}
        disabled={disabled}
      />
     {touched &&  errorMessage ? <p className="text-[10px] text-[red] self-start mt-1 w-[80%] ">
       {errorMessage}
      </p> : null}
    </div>
  );
};

export default Input;
