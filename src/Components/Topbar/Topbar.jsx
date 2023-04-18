import React from "react";


const Topbar = () => {
  return (
    <div className="w-[100vw] h-[70px] flex flex-col items-center justify-center bg-[#CDD6E8]">
      <h1 className="font-bold lg:text-2xl text-center md:text-lg">
        Welcome to Uynite
      </h1>
      <p className="font-bold text-center md:text-sm text-[10px] ">
        A one stop place for connecting back to your personal world.
      </p>
    </div>
  );
};

export default Topbar;
