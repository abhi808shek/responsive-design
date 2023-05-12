import React from "react";
import PostCard from "./PostCard/PostCard";
import ReportModal from "../Modal/ReportModal/ReportModal";
import userData from "../dataList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostWithLimit, getPostList } from "../../../redux/actionCreators/rootsActionCreator";

const PostContent = ({ data, showModalFunc, width, userData }) => {
  const dispatch = useDispatch();
  const reducerData = useSelector((state) => {
    return {
      profile: state.profileReducer.profile,
      postList: state.rootsReducer.postList || []
    }
  });
  const { profile, postList  = [] } =  reducerData

  useEffect(() => {
    dispatch(getAllPostWithLimit(profile?.id))
  }, [])
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
      {postList.map((elem, index) => (
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
