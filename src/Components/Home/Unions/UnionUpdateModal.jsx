import React from "react";

const UnionUpdateModal = () => {
  return (
    <div className="w-[30%] rounded-xl">
      <div className="flex gap-2 w-full">
        <img src="./images/events.jpg" alt="" className="w-[30px] h-[30px]" />
        <div className="flex-col flex ">
          <h1 className="text-xs font-bold">Janasena Party</h1>
          <div className="bg-gray-600 w-[90%] h-[1px]"></div>
        </div>
      </div>
      <div className="flex justify-center gap-5 w-full">
        <button className="w-[35%] bg-blue-400 text-white font-bold py-1 text-xs rounded-lg">
          Update
        </button>
        <button className="w-[35%] text-gray-800 bg-white border-[1px] font-bold py-1 text-xs rounded-lg">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UnionUpdateModal;
