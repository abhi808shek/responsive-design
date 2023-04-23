import React from "react";
import ReactPlayer from "react-player";
import v2 from '../../../../Assets/Videos/v2.mp4';
<<<<<<< HEAD
import { BsThreeDotsVertical } from 'react-icons/bs'
import eye from '../../../../Assets/Images/Eye icon.png'
=======
import eye from '../../../../Assets/Images/Eye icon.png'
import group from '../../../../Assets/Images/Group 716@3x.png';
import mute from '../../../../Assets/Images/mute.png';
import kicksPageBeforeLike from '../../../../Assets/Images/Kicks before like.png';
import kicksComments from '../../../../Assets/Images/Kicks Comment.png';
import kicksShare from '../../../../Assets/Images/Kicks Share.png';
>>>>>>> b087e5860a4feb0e893a52b588611fa425e590c1

const VideoComponent = ({ dataList }) => {

  return (
<<<<<<< HEAD
    <div className="relative h-full">

      <section className="absolute overflow-hidden top-0 left-0 h-full w-full">
         <video className="h-auto w-full" loop={true} autoPlay="autoplay" controls>
           <source src={v2} type="video/mp4" />
         </video>
      </section>
      <div className="flex h-[50px] z-20 px-1 items-center py-2 relative">
=======
    <div className="mt-5 border-2 h-[54rem]">
      <div className="flex h-[50px] px-4 items-center py-2 relative z-30">
>>>>>>> b087e5860a4feb0e893a52b588611fa425e590c1
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
<<<<<<< HEAD
            <h1 className="font-semibold ">Elisa K</h1>
            <p className="text-[10px] font-medium">5 hours ago</p>
=======
            <h1 className="font-semibold text-white ">Elisa K</h1>
            <p className="text-[10px] text-white font-bold">5 hours ago</p>
>>>>>>> b087e5860a4feb0e893a52b588611fa425e590c1
          </div>

          <div className="flex gap-2 items-center">
            <img
              src={eye}
              alt=""
<<<<<<< HEAD
              className="w-[15px] h-[15px]"
            />
            <p className="text-[10px]">24 Views</p>
          </div>
        </div>

        <div className="flex items-center cursor-pointer">
          <BsThreeDotsVertical className="w-[27px] h-[27px] text-white" />
=======
              className="w-[25px] h-[25px]"
            />
            <p className="text-[10px] font-bold text-white">24 Views</p>
          </div>
        </div>

        <div className="flex gap-2 items-center cursor-pointer">
          <img src={group} alt="" className="w-[20px] transform rotate-90" />
>>>>>>> b087e5860a4feb0e893a52b588611fa425e590c1
        </div>
      </div>

      {/* For creating mute, likes, comments and share */}

<<<<<<< HEAD
      <div className="flex flex-col items-end justify-end w-full h-[78vh] px-3">        
        {dataList.map((elem) => (
          <div
            key={elem.title}
            className="flex z-20 items-end gap-2 font-semibold flex-col"
          >
            <img
              src={elem.img}
=======
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
>>>>>>> b087e5860a4feb0e893a52b588611fa425e590c1
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
