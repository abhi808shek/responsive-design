import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-[500px] mt-[5px] flex justify-center">
      <div className="flex flex-col items-center gap-2 bg-white w-[40%] h-[92%] rounded-lg mt-2 " >
        <h1 className="text-lg font-bold my-2 w-[90%]">Indian Traditional Dress Contest</h1>
        <div className="w-full h-[600px] flex justify-center">
          <img src="./images/events.jpg" alt="" className="w-[90%] h-[100%] rounded-lg"/>
        </div>
        <p className="font-bold pb-[2px]">Total Post Made for this event: 34</p>
      </div>
    </div>
  );
};

export default HeroSection;
