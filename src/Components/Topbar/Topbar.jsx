import React from "react";


const Topbar = () => {
  return (
    <div className="w-[100vw] h-[73px] flex flex-col items-center justify-end">
      <h1 className="font-bold lg:text-2xl text-center md:text-lg">
        Welcome to <span className="text-[#24B9BF]">Uynite</span>
      </h1>

      {/* font weight changed into bold to semi-bold & padding added */ }

      <p className="w-[90%] font-semibold text-center md:text-sm text-[10px] py-1">
        A one stop place for connecting back to your personal world.
      </p>
    </div>
  );
};

export default Topbar;
