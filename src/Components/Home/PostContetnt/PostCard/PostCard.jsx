import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi";
import { RiDislikeFill } from "react-icons/ri";
import CommentBox from "./CommentBox/CommentBox";
import MenuModal from "../../Modal/MenuModel/MenuModal";
import ReportModal from "../../Modal/ReportModal/ReportModal";
import { useDispatch } from "react-redux";
import { commentsData } from "../../../../redux/actionCreators/userActionCreator";

const PostCard = ({ data, showModal, width }) => {
  const [showReportModel, setShowReportModel] = useState(false);
  const [showMenuList, setShowMenuList] = useState(false);
  const [inputComment, setInputComment] = useState("");
const dispatch = useDispatch()
  const showMenuListModal = () => {
    setShowMenuList(!showMenuList);
  };

const onHandleChange = (event)=>{
  setInputComment(event.target.value)
}

const onSubmit =()=>{
  const commentData = {
    id:1,
    comment:inputComment,
    like:0,
    reply:[]
  }
  console.log("commentData",commentData);
  dispatch(commentsData(commentData))
  setInputComment("")
}
  // const shortDescription =
  return (
    <>
      {/* {showReportModel && <ReportModal />} */}
      <div
        className={`flex w-[40%] rounded-md justify-between items-center px-2 py-2 mt-2 flex-col bg-white`}
      >
        {showMenuList && (
          <MenuModal
            data={data}
            showModal={setShowReportModel}
            closeModel={setShowMenuList}
          />
        )}
        {/* Top Section */}
        <section className="w-full flex items-center">
          <div className="flex w-[50px] h-[50px]">
            <img
              src="./images/events.jpg"
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="flex flex-col flex-1 justify-center ml-2">
            <div className="flex items-start">
              <span className="text-sm ml-1 font-bold"> Joe D</span>
              <span className="text-xs ml-2 font-semibold mt-0.5">
                @Software Developer
              </span>
            </div>

            <div className="flex items-center gap-1">
              {/* <HiUserGroup size={16} /> */}
              <img src="./images/groups.png" alt="" className="w-[12px]" />

              <span className="text-xs font-semibold">1 year ago</span>
              <GrLocation size={10} />
              {/* <img src="" alt="" /> */}
              <span className="text-xs font-semibold"> Chicago</span>
            </div>
          </div>

          <CiMenuKebab
            size={25}
            color="gray"
            className="cursor-pointer"
            onClick={showMenuListModal}
          />
        </section>

        {/* Content/About And Images Section */}
        <section className="w-full flex flex-col items-center mt-2 px-2">
          <div className=" w-full h-[24%]">
            <p className="text-[13px] font-[400] text-gray-500">
              GOD is so wise that he never created FRIENDS with price tags.
              Because..... if He did, I can't afford a precious FRIEND like
              YOU!!! Friendship is sweet when it's new, Sweeter when its true,
              but sweetest when its u. Throughout life you will meet one person
              who is like no other. ...
              <span className="text-[blue] font-bold cursor-pointer">
                Read More
              </span>
            </p>
          </div>

          <div className="m-3 mb-0 w-full h-[60%] rounded-xl">
            <img
              src="./images/events.jpg"
              alt=""
              className="w-full h-[275px] rounded-xl"
            />
          </div>
        </section>

        {/* Like share Comment Button Sections  */}
        <section className="flex w-full mt-2 mb-1  px-2">
          <div className="flex w-[60%] gap-2 items-center">
            <HiUserGroup size={16} />
            <HiUserGroup size={16} />
            <HiUserGroup size={16} />
            <HiUserGroup size={16} />
            <HiUserGroup size={16} />
            <span>100</span>
          </div>

          <div className="flex w-[40%] gap-5 items-center">
            <span className="text-[14px] font-semibold text-gray-500">
              5 Comments
            </span>
            <span className="text-[14px] font-semibold text-gray-500">
              28 Shares
            </span>
          </div>
        </section>

        {/* Comment Box Section */}

        <section className="w-full flex flex-col">
          <hr className="w-full mb-2 text-gray-500" />
          <div className="flex justify-between ">
            <div className="flex flex-col items-center justify-center ">
              <img src="./images/share.png" alt="" className="w-[50%] " />
              {/* <RiDislikeFill/> */}

              <span className="text-xs font-semibold mt-1">Like</span>
            </div>

            {/* Input Box Section */}
            <div className="flex grow items-center border-[1px] w-[100%] border-gray-500 justify-center gap-2 mx-3 rounded-xl mt-1.5 h-[35px]">
              <input
                type="text"
                className="w-full h-full outline-none rounded-xl pl-3"
                placeholder="add comment"
                value={inputComment}
                onChange={onHandleChange}
              />
              <img
                src="./images/sendIcon.png"
                alt=""
                className="w-[40px] pr-2 cursor-pointer"
                onClick={onSubmit}
              />
            </div>

            <div className="mr-2 flex flex-col items-center">
              <img
                src="./images/share.png"
                alt=""
                className="w-[50%] cursor-pointer"
              />
              <span className="text-xs font-semibold mt-1">Share</span>
            </div>
          </div>
          <hr className="w-full mb-2 text-gray-500 mt-2" />
        </section>

        {/* Total Comments And Chats Section */}
        <section className="w-full flex flex-col items-center">
          {/* Single Comment */}
          <div className="flex flex-col w-full ">
            {/* User Comment */}
            {/* <CommentBox /> */}

            {/* Reply Comment */}
            <div className="w-[90%] flex flex-col self-end">
              {/* <CommentBox /> */}
            </div>
          </div>
        </section>
      </div>
  </>
  );
};

export default PostCard;
