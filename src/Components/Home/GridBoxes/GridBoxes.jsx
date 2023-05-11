import React from 'react'
import Post from '../ProfilePage/posts/Post';
import PostPhotos from "../ProfilePage/posts/PostPhotos";
import PostVideo from "../ProfilePage/posts/PostVideo";
import PostKicks from "../ProfilePage/posts/PostKicks";


const GridBoxes = ({selectedOption}) => {
  
  return (
    <div className='xl:w-[95%] lg:w-[98%] w-full grid-cols-4 gap-3 text-center rounded-xl ml-1'>
     {
      <div className='rounded-lg '>
      {selectedOption === "Post" &&  
      <Post/>
      }
      {selectedOption === "Photos" &&  
      <PostPhotos/>
      }
      {selectedOption === "Videos" && 
      <PostVideo/>
      }
      {selectedOption === "Kicks" && 
      <PostKicks/>
      }
     </div>
     }
      {/* <img src="./images/events.jpg" alt=""  className='w-full h-full rounded-lg object-cover'/> */}
    </div>
  )
}

export default GridBoxes;
