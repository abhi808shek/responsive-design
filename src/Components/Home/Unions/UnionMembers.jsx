import React from "react";

const UnionMembers = ({ button }) => {
  return (
    <div className="flex h-[50px] items-center w-full">
      <div className="">
        <img
          src="./images/events.jpg"
          alt=""
          className="w-[45px] h-[45px] rounded-full"
        />
      </div>
      <div className=" flex flex-1 flex-col justify-center ml-2">
        <span className="font-bold text-sm">Elisa K</span>
      </div>

      <div className="flex gap-2 items-center cursor-pointer">
        <button
          className="px-5 bg-blue-400 text-white font-bold py-1 text-xs rounded-lg"
          // onClick={onCreateUnion}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default UnionMembers;
