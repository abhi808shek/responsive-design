import React from "react";
import PostCard from "./PostCard/PostCard";
import ReportModal from "../Modal/ReportModal/ReportModal";
import userData from "../dataList";

const PostContent = ({ data, showModalFunc, width, userData }) => {
  return (
    // <div className="w-full h-[100%] flex items-center justify-center flex-col">
    //   {data?.map((item, index) => (
    //     item?.content?.map((elem) => (
    //       <PostCard
    //         key={elem?.id}
    //         item={elem}
    //         userData={userData}
    //         showModal={showModalFunc}
    //         width={width}
    //       />
    //     ))
    //   ))}
    // </div>
    <div className="w-full flex items-center justify-center flex-col">
      {[1, 2, 3, 4].map((elem, index) => (
        <div className=" sm:w-[50%] lg:w-[40%] flex items-center justify-center flex-col px-2">
          <PostCard
            key={elem?.id}
            item={elem}
            userData={userData}
            showModal={showModalFunc}
            width={width}
          />
        </div>
      ))}
    </div>
  );
};

export default PostContent;
