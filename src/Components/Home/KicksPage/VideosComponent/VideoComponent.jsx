import React from "react";
import ReactPlayer from "react-player";

const VideoComponent = ({dataList}) => {
 
 
  return (
    <>
      <div className="flex h-[50px] px-4 items-center py-2 relative">
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=vNeN13EQbqk' /> */}
        <div className="">
          <img
            src="./images/events.jpg"
            alt=""
            className="w-[45px] h-[45px] rounded-full"
          />
        </div>
        <div className=" flex flex-1 flex-col justify-center ml-2">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-white ">Elisa K</h1>
            <p className="text-[10px] text-white font-bold">5 hours ago</p>
          </div>

          <div className="flex gap-2 items-center">
            <img
              src="./images/groups.png"
              alt=""
              className="w-[10px] h-[10px]"
            />
            <p className="text-[10px] font-bold text-white">24 Views</p>
          </div>
        </div>

        <div className="flex gap-2 items-center cursor-pointer">
          <img src="./images/groups.png" alt="" className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="flex flex-col items-end justify-end w-full h-[80vh] px-3">
        {dataList.map((elem) => (
          <div
            key={elem.title}
            className="flex items-end gap-2 font-bold flex-col"
          >
            <img
              src="./images/groups.png"
              alt=""
              className="w-[30px] cursor-pointer"
            />
            <div className="text-[12px] text-white flex items-center">
              {elem.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoComponent;
