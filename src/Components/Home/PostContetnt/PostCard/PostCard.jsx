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
  getCommentByPostid,
  getLikesById,
} from "../../../../redux/actionCreators/rootsActionCreator";
import OriginalPostModal from "../../Modal/OriginalPostModal/OriginalPostModal";
import UpdatePostModal from "../../Modal/CreatePostModal/CreatePostModal";
import LikeModal from "../../Modal/LikeModal/LikeModal";
import VideoCommentsModal from "../../KicksPage/VideoCommentsModal";
import { getPostLike } from "../../../../redux/actionCreators/postActionCreator";
import { Alert } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import AlertSmall from "../../../common/AlertSmall";

const PostCard = ({ userData, item }) => {
  console.log("postcard", item)
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
    editPost: false,
    originalPost: false,
    externalShare: false,
  });
  const [alert, setAlert] = useState()

  const { likedDetails } = useSelector((state) => state.rootsReducer);
  const reducerData = useSelector((state) => {
    return {
      activePost: state.rootsReducer.activePost,
      profile: state.profileReducer.profile
    }
  });
  const { activePost, profile } = reducerData;
  {
    /* implementing dynamic description, some redesign the postcard component */
  }
  const description = item?.text ? item?.text : ""

  const shortDescription = description.substring(0, 300);
  const onShowShareModal = () => {
    // console.log("jwww");
    setShowShareModal({ ...showShareModal, shareModal: true });
  };
  const dispatch = useDispatch();
  const showMenuListModal = () => {
    dispatch({
      type: "ACTIVE_POST",
      payload: item
    });
    setShowMenuList(!showMenuList);
    setUserStatus(item.userId);
  };

  const [likeButton, setLikeButton] = useState(false);

  const [openModal, setOpenModal] = useState({
    OnLikeModal: false,
    commentModal: false,
  });

  const onHandleOpenLikeModal = () => {
    let payload = {
      pageNumber: 0,
      pageSize: 10,
    };
    dispatch(getPostLike(item?.id, payload))
    setOpenModal({
      ...openModal,
      OnLikeModal: true,
    });
  };

  const onHandleOpenCommentModal = () => {
    dispatch({
      type: "ACTIVE_POST",
      payload: item
    });
    let payload = {
      pageNumber: 1,
      pageSize: 10
    }
    dispatch(getCommentByPostid(item?.id, payload))
    setOpenModal({
      ...openModal,
      commentModal: true,
    });
  };

  const onHandleCloseModal = () => {
    setOpenModal({
      ...openModal,
      OnLikeModal: false,
      commentModal: false,
    });
  };
  const onClickOnNext = () => {
    setShowShareModal({
      ...showShareModal,
      shareModal: false,
      shareWith: true,
    });
  };

  useEffect(() => {
    setLikeButton(item?.isliked);
  }, [likedDetails]);
  const onHandleChange = (event) => {
    setInputComment(event.target.value);
  };
  const { defaultRootData } = useSelector((state) => state.eventReducer);
  const onLikeIncrease = async () => {
    if (item?.isliked) {
      dispatch({
        type: "DECREASE_LIKE_COUNT",
        payload: item?.id,
      });
      const dislikeResponse = await dispatch(
        decreaseLikeByLikeId(
          profile?.id,
          item?.likeid
        )
      );
      if (dislikeResponse?.status) {
        dispatch(
          getAllPostWithLimit(defaultRootData?.data?.postdata?.profileid)
        );
        setLikeButton(false);
      }
    } else {
      const postDeatils = {
        datetime: Date.now().toString(),
        postid: item?.id,
        profileid: item?.profileid,
        type: "p",
      };
      dispatch({
        type: "INCREASE_LIKE_COUNT",
        payload: item?.id
      })
      const response = await dispatch(getLikesById(postDeatils));
      if (response?.status) {
        setLikeButton(true);
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
    if (!inputComment) {
      setAlert(true);
      return;
    }
    setAlert(false)
    dispatch(addCommentOnPost(commentData));
    setInputComment("");
    dispatch({
      type: "INCREASE_COMMENT_COUNT",
      payload: item.id
    })
    // dispatch(getAllPostWithLimit(defaultRootData?.data?.postdata?.profileid));
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
        className={`flex w-full rounded-lg py-2 justify-between items-center px-2 flex-col mt-2 bg-white mb-2`}
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
                src={item?.profile?.pimage ? item?.profile?.pimage : user}
                alt=""
                className="w-full h-full rounded-full mt-1 object-cover"
              />
            </div>

            <div className="flex flex-col flex-1 justify-center ml-2">
              <div className="flex items-center">
                {/*font weight removed*/}
                <span className="ml-1 font-bold">
                  {`${item?.profile?.fname || "User"} ${item?.profile?.lname || ""
                    }`}
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

                {/* <img
                  src="./images/groups.png"
                  alt=""
                  className="w-[12px] relative"
                /> */}
                {/* font size reduced */}
                {/* <span className="text-[11px] font-semibold">1 year ago</span> */}
                {item?.location ? (
                  <>
                    <span className="text-xs">{item?.location}</span>
                    <GrLocation size={10} />
                  </>
                ) : (
                  ""
                )}
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
            data={userData}
            userStatus={userStatus}
            closeModel={handleClickMenu}
          />
        )}

        {/* Content/About And Images Section */}
        <section className="w-full flex flex-col items-center mt-2 px-2">
          <div className=" w-full ">
            <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-[400] text-gray-500">
              {showMore ? description : `${shortDescription}`}

              {description.length > 150 && (
                <span
                  className="text-xs text-[#2F58CD] font-bold cursor-pointer"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show less" : "... Read more"}
                </span>
              )}
            </p>
          </div>
          {item?.image ? (
            <div className="m-3 mb-0 w-full h-[60%] rounded-xl">
              <img
                src={item?.image}
                alt=""
                className="w-full h-[200px] sm:h-[220px] lg:h-[250px] rounded-xl border border-gray-500"
              />
            </div>
          ) : (
            ""
          )}
        </section>

        {/* Like share Comment Button Sections  */}
        <section className="flex justify-between w-full mt-2 mb-1  px-2">
          <div
            className="flex justify-center gap-2 items-center cursor-pointer"
            onClick={onHandleOpenLikeModal}
          >
            <HiUserGroup size={16} />

            <span className="lg:text-[13px] xl:text-[14px] font-medium">
              {item?.likecount}
            </span>
          </div>

          <div className="flex  gap-5 items-center">
            <span
              className="text-[11px] lg:text-[11px] xl:text-[12px] font-medium text-gray-600 cursor-pointer"
              onClick={onHandleOpenCommentModal}
            >
              {item?.commentcount ? item?.commentcount : 0} Comments
            </span>
            {/* <span className=" text-[11px] lg:text-[12px] xl:text-[13px] font-medium text-gray-600">
              28 Shares
            </span> */}
          </div>
        </section>

        {/* Comment Box Section */}

        <section className="w-full flex flex-col">
          <hr className="w-full mb-2 text-gray-500" />
          <div className="flex justify-between ">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              {item?.isliked ? (
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
            <div className="relative flex grow items-center outline-gray-300 py-1 border-[1px] w-[100%] border-gray-500 justify-center gap-2 mx-3 rounded-xl mt-1.5 h-[38px]">
              <input
                type="text"
                className="w-full h-full outline-none rounded-xl pl-3"
                placeholder="add comment"
                value={inputComment}
                onChange={onHandleChange}
              />
              {
                <AlertSmall
                  showAlert={alert}
                  button={
                    <img
                      src="./images/sendIcon.png"
                      alt=""
                      className="w-[40px] pr-2 cursor-pointer"
                      onClick={onCommetIncrease}
                    />
                  }
                  message={"Please add your comment to send"}
                />
              }
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

      {openModal.OnLikeModal && (
        <Portals>
          <LikeModal closeLikeModal={onHandleCloseModal} />
        </Portals>
      )}
      {openModal.commentModal && (
        <Portals>
          <VideoCommentsModal onClose={onHandleCloseModal} />
        </Portals>
      )}
    </>
  );
};

export default PostCard;
