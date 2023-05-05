import React from 'react'
import LikeIcon from "../../../../assets/images/KicksLike.png"


const LikeModal = () => {
  return (
    <div className='w-[30%] h-[70%] bg-white rounded-lg'>
      <div className='flex w-full justify-center'>
        <img src={LikeIcon} alt="" className='w-[30px] h-[30px]'/>
        <h1>7 Likes</h1>
      </div>
    </div>
  )
}

export default LikeModal;
