import React from "react";
import EventResultContentBox from "./EventResultContentBox";

const EventResultsPage = () => {

  return (
    <div className="w-[40%] mt-1 px-4 bg-[#E4E7EC] mx-auto py-4">
      <div className="px-2 flex flex-col gap-2 w-full bg-gray-400">
        <div
          className="flex cursor-pointer w-full py-1"
          id="changePassword"
        >
          <h1 className="text-sm flex-1">Uynite Fashion Show 2020</h1>
          <img src="./images/groups.png" alt="" className="w-[20px] h-[20px]" />
        </div>
      </div>

      <EventResultContentBox />

      <div className="px-2 flex flex-col gap-2 w-full bg-gray-400">
        <div
          className="flex cursor-pointer w-full py-1"
          id="changePassword"
        >
          <h1 className="text-sm flex-1">Indian Tradition Dress Contest</h1>
          <img src="./images/groups.png" alt="" className="w-[20px] h-[20px]" />
        </div>
      </div>

      <EventResultContentBox />
    </div>
  );
};

export default EventResultsPage;
