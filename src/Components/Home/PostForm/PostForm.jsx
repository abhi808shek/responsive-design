import React from "react";
import { BsImage } from "react-icons/bs";

const PostForm = ({width,bgColor}) => {
  return (
    <div className={`w-full h-[60px] border-2 flex justify-center fixed top-[78px]`} style={{backgroundColor:bgColor}} >
      <div className={`flex border-gray-400 bg-white rounded-md justify-between items-center outline-none mt-2 w-[40%]` }>
        <input type="text" placeholder="Write Your Thoughts....." className="w-[94%] rounded-md pl-3 py-2"/>
        <span className="mr-2">
          <BsImage size={25}/>
        </span>
      </div>
    </div>
  );
};

export default PostForm;
