import React from "react";
import ReactPlayer from "react-player";
import v2 from '../../../../Assets/Videos/v2.mp4';
import eye from '../../../../Assets/Images/Eye icon.png'
import group from '../../../../Assets/Images/Group 716@3x.png';
import mute from '../../../../Assets/Images/mute.png';
import kicksPageBeforeLike from '../../../../Assets/Images/Kicks before like.png';
import kicksComments from '../../../../Assets/Images/Kicks Comment.png';
import kicksShare from '../../../../Assets/Images/Kicks Share.png';

const VideoComponent = ({ dataList }) => {

  return (
    <div className="mt-5 border-2 h-[54rem]">
      <div className="flex h-[50px] px-4 items-center py-2 relative z-30">
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
            <h1 className="font-semibold text-white ">Elisa K</h1>
            <p className="text-[10px] text-white font-bold">5 hours ago</p>
          </div>

          <div className="flex gap-2 items-center">
            <img
              src={eye}
              alt=""
              className="w-[25px] h-[25px]"
            />
            <p className="text-[10px] font-bold text-white">24 Views</p>
          </div>
        </div>

        <div className="flex gap-2 items-center cursor-pointer">
          <img src={group} alt="" className="w-[20px] transform rotate-90" />
        </div>
      </div>

      {/* For creating mute, likes, comments and share */}

      <div className="relative bottom-16">

        <video className="w-full rounded-[20px]" loop={true} autoPlay="autoplay" controls>
          <source src={v2} type="video/mp4" />
        </video>

        {dataList.map((elem, index) => (
          <div
            key={elem.title}
            className="flex items-end gap-3 font-bold flex-col relative bottom-[25rem] right-6"
          >
            <img
              src={index == 0 ? mute : index == 1 ? kicksPageBeforeLike : index == 2 ? kicksComments : kicksShare}
              alt=""
              className="w-[30px] cursor-pointer"
            />
            <div className="text-[12px] text-white flex items-center">
              {elem.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
