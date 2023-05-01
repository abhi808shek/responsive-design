import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi";
import CommentBox from "./CommentBox/CommentBox";
import MenuModal from "../../Modal/MenuModel/MenuModal";
import ReportModal from "../../Modal/ReportModal/ReportModal";
import { useDispatch, useSelector } from "react-redux";
// import { commentsData } from "../../../../redux/actionCreators/userActionCreator";
import ShareWithModal from "../../Modal/ShareWithModal/ShareWithModal";
import Portals from "../../../Portals/Portals";
import KicksBeforeLike from "../../../../assets/images/KicksBeforeLike.png";
import KicksAfterLike from "../../../../assets/images/KicksLike.png";

import user from "../../../../Assets/Images/Person.jpg";
import SharePostModal from "../../Modal/SharePostModal/SharePostModal";
import { useNavigate } from "react-router-dom";
import {
  addCommentOnPost,
  decreaseLikeByLikeId,
  getAllPostWithLimit,
  getLikesById,
} from "../../../../redux/actionCreators/rootsActionCreator";
import OriginalPostModal from "../../Modal/OriginalPostModal/OriginalPostModal";
import UpdatePostModal from "../../Modal/CreatePostModal/CreatePostModal";

const PostCard = ({ userData, item }) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [showMenuList, setShowMenuList] = useState(false);
  const [inputComment, setInputComment] = useState("");
  const [userStatus, setUserStatus] = useState(0);
  const [showShareModal, setShowShareModal] = useState({
    shareModal: false,
    shareWith: false,
  });
  const [postMenuModal, setPostMenuModal] = useState({
    editPost:false,
    originalPost: false,
    externalShare: false,
  });
  const [like, setLike] = useState(false);
  const { likedDetails } = useSelector((state) => state.rootsReducer);
  {
    /* implementing dynamic description, some redesign the postcard component */
  }
  const description = item?.text
    ? item?.text
    : "GOD is so wise that he never created FRIENDS with price tags. Because..... if He did, I can't afford a precious FRIEND like YOU!!! Friendship is sweet when it's new, Sweeter when its true, but sweetest when its u. Throughout life you will meet one person who is like no other.... GOD is so wise that he never created FRIENDS with price tags. Because..... if He did, I can't afford a precious FRIEND like YOU!!! Friendship is sweet when it's new, Sweeter when its true, but sweetest when its u. Throughout life you will meet one person who is like no other.... ";

  const shortDescription = description.substring(0, 300);
  const onShowShareModal = () => {
    console.log("jwww");
    setShowShareModal({ ...showShareModal, shareModal: true });
    // setShowShareModal(showShareModal);
  };
  // const {totalComments} = useSelector((state)=>state.userReducer)
  const dispatch = useDispatch();
  const showMenuListModal = () => {
    setShowMenuList(!showMenuList);
    setUserStatus(item.userId);
  };

  const onClickOnNext = () => {
    setShowShareModal({
      ...showShareModal,
      shareModal: false,
      shareWith: true,
    });
  };

  useEffect(() => {
    setLike(item?.isliked);
  }, [likedDetails]);
  const onHandleChange = (event) => {
    setInputComment(event.target.value);
  };
  const { defaultRootData } = useSelector((state) => state.eventReducer);
  const onLikeIncrease = async () => {
    if (like) {
      const dislikeResponse = await dispatch(
        decreaseLikeByLikeId(
          defaultRootData?.data?.postdata?.profileid,
          item?.likeid
        )
      );
      if (dislikeResponse?.status) {
        dispatch(
          getAllPostWithLimit(defaultRootData?.data?.postdata?.profileid)
        );
        setLike(false);
      }
    } else {
      const postDeatils = {
        datetime: Date.now().toString(),
        postid: item?.id,
        profileid: item?.profileid,
        type: "p",
      };

      const response = await dispatch(getLikesById(postDeatils));
      if (response?.status) {
        dispatch(
          getAllPostWithLimit(defaultRootData?.data?.postdata?.profileid)
        );
        setLike(true);
      }
    }
  };

  const onCommetIncrease = () => {
    const commentData = {
      datetime: Date.now(),
      postid: item?.id,
      profileid: item?.profileid,
      text: inputComment,
    };
    dispatch(addCommentOnPost(commentData));
    setInputComment("");
    dispatch(getAllPostWithLimit(defaultRootData?.data?.postdata?.profileid));
  };

  const handleClickMenu = (modalName) => {
    if (modalName === "Edit Post") {
      setPostMenuModal({ ...postMenuModal, editPost: true });
    } else if (modalName === "History") {
      setPostMenuModal({ ...postMenuModal, originalPost: true });
    } else if (modalName === "External Share") {
      setPostMenuModal({ ...postMenuModal, showReportModal: true });
    }
  };

  const handleCloseModal = () => {
    setPostMenuModal({
      ...postMenuModal,
      originalPost: false,
      editPost: false,
      externalShare: false,
    });
  };

  return (
    <>
      <div
        className={`flex w-[40%] rounded-lg py-2 justify-between items-center px-2 flex-col mt-2 bg-white`}
      >
        {/* Top Section */}
        <section className="w-full flex items-centern justify-between">
          <div
            className="flex cursor-pointer"
            onClick={() => navigate("/profile/${6}")}
          >
            <div className="flex w-[46px] h-[46px]">
              {/* due to img broke dynamic src commented */}
              <img
                // src={item.userIcon}
                src={item?.profile?.pimage ? item?.profile?.pimage : user}
                alt=""
                className="w-full h-full rounded-full mt-1 object-cover"
              />
            </div>

            <div className="flex flex-col flex-1 justify-center ml-2">
              <div className="flex items-center">
                {/*font weight removed*/}
                <span className="ml-1 font-bold">
                  {`${item?.profile?.fname || "User"} ${item?.profile?.lname || ""}`}
                </span>
                <span className="text-xs ml-2 font-semibold mt-0.5">
                  {item?.profile?.job}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {/* <HiUserGroup size={16} /> */}
                <span className="text-[11px] font-semibold">
                  {item?.updatpostdatetime === null ||
                  item?.updatpostdatetime === ""
                    ? item?.postdatetime
                    : item?.updatpostdatetime}
                </span>

                <img
                  src="./images/groups.png"
                  alt=""
                  className="w-[12px] relative"
                />
                {/* font size reduced */}
                <span className="text-[11px] font-semibold">1 year ago</span>
                <GrLocation size={10} />
                {/* <img src="" alt="" /> */}
                <span className="text-[11px] font-semibold">
                  {item?.profile?.location}
                </span>
              </div>
            </div>
          </div>

          <CiMenuKebab
            size={25}
            color="gray"
            className="cursor-pointer font-bold"
            onClick={showMenuListModal}
          />
        </section>
        {showMenuList && (
          <MenuModal
            postId={item?.id}
            profileId={defaultRootData?.data?.postdata?.profileid}
            data={userData}
            userStatus={userStatus}
            closeModel={handleClickMenu}
          />
        )}

        {/* Content/About And Images Section */}
        <section className="w-full flex flex-col items-center mt-2 px-2">
          <div className=" w-full ">
            <p className="text-[13px] font-[400] text-gray-500">
              {showMore ? description : `${shortDescription}...`}

              <span
                className="text-xs text-[#2F58CD] font-bold cursor-pointer"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Read more"}
              </span>
            </p>
          </div>

          <div className="m-3 mb-0 w-full h-[60%] rounded-xl">
            <img
              src={item?.image}
              alt=""
              className="w-full h-[275px] rounded-xl border border-gray-500"
            />
          </div>
        </section>

        {/* Like share Comment Button Sections  */}
        <section className="flex justify-between w-full mt-2 mb-1  px-2">
          <div className="flex justify-center gap-2 items-center">
            <HiUserGroup size={16} />
            <HiUserGroup size={16} />
            <HiUserGroup size={16} />
            <HiUserGroup size={16} />
            <HiUserGroup size={16} />
            <span className="lg:text-[13px] xl:text-[14px] font-medium">
              {item?.likecount}
            </span>
          </div>

          <div className="flex  gap-5 items-center">
            <span
              className="lg:text-[11px] xl:text-[12px] font-medium text-gray-600"
              // onClick={{}}
            >
              {item?.commentcount ? item?.commentcount : 0} Comments
            </span>
            <span className="lg:text-[11px] xl:text-[12px] font-medium text-gray-600">
              28 Shares
            </span>
          </div>
        </section>

        {/* Comment Box Section */}

        <section className="w-full flex flex-col">
          <hr className="w-full mb-2 text-gray-500" />
          <div className="flex justify-between ">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              {like ? (
                <img
                  src={KicksAfterLike}
                  alt=""
                  className="w-[50%] "
                  onClick={onLikeIncrease}
                />
              ) : (
                <img
                  src={KicksBeforeLike}
                  alt=""
                  className="w-[50%] "
                  onClick={onLikeIncrease}
                />
              )}

              {/* <RiDislikeFill/> */}

              <span className="text-xs font-semibold mt-1">Like</span>
            </div>

            {/* Input Box Section */}
            <div className="flex grow items-center outline-gray-300 py-1 border-[1px] w-[100%] border-gray-500 justify-center gap-2 mx-3 rounded-xl mt-1.5 h-[38px]">
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
                onClick={onCommetIncrease}
              />
            </div>

            <div
              className="mr-2 flex flex-col items-center"
              onClick={onShowShareModal}
            >
              <img
                src="./images/share.png"
                alt=""
                className="w-[54%] cursor-pointer"
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
            {/* <CommentBox />
            <CommentBox />
            <CommentBox />
            <CommentBox /> */}
            {/* Reply Comment */}
            <div className="w-[90%] flex flex-col self-end">
              {/* <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox /> */}
            </div>
          </div>
        </section>
      </div>
      {showShareModal.shareModal && (
        <Portals>
          <SharePostModal
            setShowShareModal={setShowShareModal}
            showShareModal={showShareModal}
            onClickOnNext={onClickOnNext}
          />
        </Portals>
      )}
      {showShareModal.shareWith && (
        <Portals>
          <ShareWithModal
            setShowShareModal={setShowShareModal}
            showShareModal={showShareModal}
          />
        </Portals>
      )}
      {postMenuModal.editPost && (
        <Portals>
          <UpdatePostModal title="Edit" handleCloseModal={handleCloseModal} />
        </Portals>
      )}

      {postMenuModal.originalPost && (
        <Portals>
          <OriginalPostModal handleCloseModal={handleCloseModal} />
        </Portals>
      )}

      {/* {postMenuModal.externalShare && (
        <Portals>
          < closeModel={handleCloseModal} />
        </Portals>
      )} */}
    </>
  );
};

export default PostCard;
