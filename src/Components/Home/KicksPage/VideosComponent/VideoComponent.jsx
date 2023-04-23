import React from "react";
import ReactPlayer from "react-player";
import v2 from '../../../../Assets/Videos/v2.mp4';
import { BsThreeDotsVertical } from 'react-icons/bs'
import eye from '../../../../Assets/Images/Eye icon.png'

const VideoComponent = ({ dataList, imgName }) => {

  return (
    <div className="relative h-full">

      <section className="absolute overflow-hidden top-0 left-0 h-full w-full">
         <video className="h-auto w-full" loop={true} autoPlay="autoplay" controls>
           <source src={v2} type="video/mp4" />
         </video>
      </section>
      <div className="flex h-[50px] z-20 px-1 items-center py-2 relative">
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=vNeN13EQbqk' /> */}


        {/* For profile picture */}

        <div className="">
          <img
            src="./images/events.jpg"
            alt=""
            className="w-[45px] h-[45px] rounded-full object-cover"
          />
        </div>

        {/* For Username and time when he created the video and views */}

        <div className=" flex flex-1 flex-col text-white justify-center ml-2">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold ">Elisa K</h1>
            <p className="text-[10px] font-medium">5 hours ago</p>
          </div>

          <div className="flex gap-2 items-center">
            <img
              src={eye}
              alt=""
              className="w-[15px] h-[15px]"
            />
            <p className="text-[10px]">24 Views</p>
          </div>
        </div>

        <div className="flex items-center cursor-pointer">
          <BsThreeDotsVertical className="w-[27px] h-[27px] text-white" />
        </div>
      </div>

      {/* For creating mute, likes, comments and share */}

      <div className="flex flex-col items-end justify-end w-full h-[78vh] px-3">        
        {dataList.map((elem) => (
          <div
            key={elem.title}
            className="flex z-20 items-end gap-2 font-semibold flex-col"
          >
            <img
              src={elem.img}
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
