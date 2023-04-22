import React from "react";
import ReactPlayer from "react-player";
import v2 from '../../../../Assets/Videos/v2.mp4';

const VideoComponent = ({ dataList, imgName }) => {

  return (
    <div className="mt-5 mb-4 border-2 border-red-600 rounded-[20px] p-3">
      <div className="flex h-[50px] px-4 items-center py-2 relative">
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=vNeN13EQbqk' /> */}


        {/* For profile picture */}

        <div className="">
          <img
            src="./images/events.jpg"
            alt=""
            className="w-[45px] h-[45px] rounded-full"
          />
        </div>

        {/* For Username and time when he created the video and views */}

        <div className=" flex flex-1 flex-col justify-center ml-2">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-black ">Elisa K</h1>
            <p className="text-[10px] text-black font-bold">5 hours ago</p>
          </div>

          <div className="flex gap-2 items-center">
            <img
              src="./images/groups.png"
              alt=""
              className="w-[10px] h-[10px]"
            />
            <p className="text-[10px] font-bold text-black">24 Views</p>
          </div>
        </div>

        <div className="flex gap-2 items-center cursor-pointer">
          <img src="./images/groups.png" alt="" className="w-[30px] h-[30px]" />
        </div>
      </div>

      {/* For creating mute, likes, comments and share */}

      <div className="flex flex-col items-end justify-end w-full h-[80vh] px-3">
        <section className="relative right-20 top-[45vh]">
        <video className="h-[80%] w-full" loop={true} autoPlay="autoplay" controls>
          <source src={v2} type="video/mp4" />
        </video>
        </section>
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
            <div className="text-[12px] text-black flex items-center">
              {elem.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
