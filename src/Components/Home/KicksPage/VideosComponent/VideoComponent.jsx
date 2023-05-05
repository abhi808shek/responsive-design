import React, { useState } from "react";
import ReactPlayer from "react-player";
import v2 from '../../../../Assets/Videos/v2.mp4';
import { BsThreeDotsVertical } from 'react-icons/bs'
import eye from '../../../../Assets/Images/Eye icon.png'
import group from '../../../../Assets/Images/Group 716@3x.png';
import mute from '../../../../Assets/Images/Mute.png';
import kicksPageBeforeLike from '../../../../Assets/Images/Kicks before like.png';
import kicksComments from '../../../../Assets/Images/Kicks Comment.png';
import kicksShare from '../../../../Assets/Images/Kicks Share.png';
import OwnUserVideoModal from '../OwnUserVideoModal'

const VideoComponent = ({ dataList }) => {
  const [showOwnVideoModal, setShowOwnVideoModal] = useState(false)

  return (
    <div className="relative h-full">

      <section className="absolute fixed overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full z-0">
         <video className="absolute top-0 bottom-0 bg-red-300 h-auto w-full" loop={true} autoPlay="autoplay" controls>
           <source src={v2} type="video/mp4" />
         </video>
      </section>
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=vNeN13EQbqk' /> */}

      {/* For profile picture */}
        
      {/* For Username and time when he created the video and views */}
      <div className='flex px-1 pt-1 z-30'>
        <div className="z-30">
          <img
            src="./images/events.jpg"
            alt=""
            className="w-[45px] h-[45px] rounded-full object-cover"
          />
        </div>
        <div className=" flex flex-1 z-30 flex-col text-white justify-center ml-2">
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
        <div className="flex items-center cursor-pointer z-30">
          <BsThreeDotsVertical onClick={()=>setShowOwnVideoModal(true)} className="w-[27px] h-[27px] text-white" />          
        </div>
      </div>


      {/* For creating mute, likes, comments and share */}

      <div className="relative bottom-2 h-full">
       <div className='absolute bottom-[60px] right-[20px]'>
        {dataList.map((elem, index) => (
          <div
            key={elem.title}
            className="flex items-end gap-3 font-bold flex-col"
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
          ))
        } 
       </div>
      </div>
      {showOwnVideoModal && <OwnUserVideoModal onClose={()=>setShowOwnVideoModal(false)} />}
    </div>
  )
}

export default VideoComponent;