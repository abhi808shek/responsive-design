import React from "react";


const Topbar = () => {
  return (
    <div className="w-full flex flex-col items-center sm:w-full md:w-[55%] lg:w-[50%] mt-[5%]">
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
