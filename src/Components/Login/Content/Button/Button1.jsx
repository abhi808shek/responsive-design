import React from "react";
import { Link } from "react-router-dom";

const Button1 = ({ title, onClick, path}) => {
  return (
    <div className={`w-full flex justify-center`}>
      <button
        className={`bg-white text-[#7991BD] w-[70%] py-1.5 my-0.5 rounded-3xl py-1 font-bold text-xs border-2 border-[#7991BD]`}
        onClick={onClick}
      >
        <Link to={path}>{title}</Link>
      </button>
    </div>
  );
};

export default Button1;
