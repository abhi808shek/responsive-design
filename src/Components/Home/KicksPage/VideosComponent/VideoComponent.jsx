import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import v2 from "../../../../Assets/Videos/v2.mp4";
import { BsThreeDotsVertical } from "react-icons/bs";
import eye from "../../../../Assets/Images/Eye icon.png";
import group from "../../../../Assets/Images/Group 716@3x.png";
import mute from "../../../../Assets/Images/Mute.png";
import kicksPageBeforeLike from "../../../../Assets/Images/Kicks before like.png";
import kicksComments from "../../../../Assets/Images/Kicks Comment.png";
import kicksShare from "../../../../Assets/Images/Kicks Share.png";
import collection from "../../../../Assets/Images/Collections.png";
import kicksLiked from "../../../../Assets/Images/KicksLike.png";
import unmute from "../../../../Assets/Images/Un-Mute.png"
import OwnUserVideoModal from "../OwnUserVideoModal";
import DeleteVideoModal from "../DeleteVideoModal";
import EditMyVideoModal from "../EditMyVideoModal";
import OtherUserVideoModal from "../OtherUserVideoModal";
import VideoCommentsModal from "../VideoCommentsModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addLikes,
  deletePostLike,
  getCommentsByPostid,
} from "../../../../redux/actionCreators/kicksActionCreator";
import moment from "moment/moment";
import { startFollowing } from "../../../../redux/actionCreators/profileAction";
import { toast } from "react-toastify";
import SelectedVideoModal from "../../SearchKicksPage/SelectedVideoModal";
import { HiPlus } from "react-icons/hi";
import shortVideo from "../../../../Assets/Videos/v1.mp4"
import "../kicks.css"
import { useEffect } from "react";
import { debounce } from "../../../Utility/utility";
import { GrWaypoint } from "react-icons/gr";

const VideoComponent = ({ dataList, data }) => {
  const dispatch = useDispatch();
  const reducerData = useSelector((state) => {
    return {
      profileDetail: state.profileReducer.profile
    }
  });
  const { profileDetail } = reducerData;
  const [isMyVideo, setIsMyVideo] = useState(false);
  const [showOwnVideoModal, setShowOwnVideoModal] = useState(false);
  const [showOthersVideoModal, setShowOthersVideoModal] = useState(false);
  const [deleteVideo, setDeletetVideo] = useState(false);
  const [editVideo, setEditVideo] = useState(false);
  const [commentVideo, setCommentVideo] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectVideo, setSelectVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoPlaying, setIsvideoPlaying] = useState(false);

  const videoRef = useRef(null);


  // const handleButtonActions = (elem) => {
  //   if (elem.title == "mute") {
  //     console.log(isMuted, videoRef.current.muted);
  //     setIsMuted(!isMuted);
  //     videoRef.current.muted = !videoRef.current.muted;
  //   } else if (elem.title == "comments") {
  //     setCommentVideo(true);
  //   }
  // };
  const onVideoClick = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsvideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsvideoPlaying(true);
    }
  }
  const [state, setState] = useState({});
  const { isMute = true } = state;
  const {
    id,
    commentcount = "",
    createddatetime,
    duration,
    image,
    isliked,
    likecount = "",
    profile,
    segment,
    shareto,
    text,
    type,
    video,
    viewcount,
    viptype,
    profileid,
  } = data;
  const name = profile?.fname + profile?.lname;
  const handleDelete = () => {
    setShowOwnVideoModal(false);
    setDeletetVideo(true);
  };

  const handleEdit = () => {
    setShowOwnVideoModal(false);
    setEditVideo(true);
  };

  const handleIsMyVideo = (data) => {
    dispatch({
      type: "ACTIVE_POST",
      payload: data,
    });
    if (isMyVideo) {
      setShowOthersVideoModal(false);
      setShowOwnVideoModal(true);
    } else {
      setShowOthersVideoModal(true);
      setShowOwnVideoModal(false);
    }
  };

  const handleIconClick = (title) => {
    dispatch({
      type: "ACTIVE_POST",
      payload: data
    })
    if (title === "comments") {
      dispatch(getCommentsByPostid(id));
      setCommentVideo(true);
    } else if (title === "mute") {
      setState({ ...state, isMute: !isMute });
    } else if (title === "likes") {
      if(isliked){
         dispatch({ type: "REMOVE_LIKE", payload: id });
         const payload = {
           postid: id,
           profileid: profileid,
           type: "c",
           datetime: moment().format("YYYY-MM-DDTHH:mm:ss:ms"),
         };
         dispatch(deletePostLike(id)).then((res) => {
           if (res.status) {
             toast.success(res.message);
           } else {
             toast.error(res.message);
           }
         });
      }else {
         console.log(id, "LIKKKKKKKKKKKKKKKKK");
         dispatch({ type: "INCREASE_LIKE", payload: id });
         const payload = {
           postid: id,
           profileid: profileid,
           type: "c",
           datetime: moment().format("YYYY-MM-DDTHH:mm:ss:ms"),
         };
         dispatch(addLikes(payload)).then((res) => {
           if (res.status) {
             toast.success(res.message);
           } else {
             toast.error(res.message);
           }
         });
      }
     
    } else if (title === 'follow') {
      const payload = {
        myprofileid: profileDetail?.id,
        followerprofileid: profileid,
        datetimes: "01-02-2021",
      };
      dispatch(startFollowing(payload)).then((res) => {
        if (res?.status) {
          toast.success(res?.message)
        } else {
          toast.error(res.message)
        }
      })
    }
  };

  const handleBlock = () => {
    
  }
  return (
    <div key={profile?.id} className="snap-y snap-mandatory">
      <div className="">

        <section className="relative snap-y snap-mandatory justify-center overflow-scroll flex items-center bg-black hideScroll right-0  left-0 h-1/2 w-full z-0">

          <div className="relative">
            <video
              className="h-[500px] w-[300px] cursor-pointer "
              loop={true}
              autoPlay="autoplay"
              muted={isMute}
              ref={videoRef}
              onClick={onVideoClick}
              src={video}
            >
              {/* <source
                // src={data?.video} type="video/mp4"
                src={video} type="video/mp4"
              /> */}
            </video>

            <div className="absolute right-[5%] bottom-[8%]">
              {dataList?.map((elem, index) => (
                (elem.title === 'follow' & profileid === profileDetail?.id) ? "" :
                  <div
                    key={elem.title}
                    onClick={() => handleIconClick(elem.title)}
                    className="flex items-end mb-3 gap- font-semibold flex-col"
                  >
                    <img
                      src={(elem.title === 'likes' && isliked) ? kicksLiked : (elem.title === 'mute' && isMute) ? unmute : elem.img}
                      alt=""
                      className="w-[30px] cursor-pointer"
                    />

                    <div className="text-[12px] text-white flex items-center">
                      {elem.title === "likes"
                        ? `${likecount} likes`
                        : elem.title === "comments"
                          ? `${commentcount} comments`
                          : elem.title}
                    </div>

                  </div>

              ))}
              <span>
                <label
                  onClick={() => setSelectVideo(true)}
                  htmlFor="chooseVideo"
                >
                  <HiPlus className="w-8 h-8 p-0.5 bg-[#6e6f6f] cursor-pointer rounded-full text-white ml-[52px]" />
                </label>
              </span>
            </div>
          </div>
        </section>



        <div className="flex relative bottom-[67px]">
          <div className="">
            <div className="flex gap-2 items-center mb-3">
              <img src={eye} alt="" className="w-[15px] h-[15px]" />
              <p className="text-[10px]">{viewcount} Views </p>
            </div>
            <div className="flex">
              <img
                src={profile?.pimage}
                alt=""
                className="w-[50px] h-[50px] rounded-full object-cover inline mr-3"
              />
              <span className="font-semibold flex items-start">
                {name ? `${profile?.fname} ${profile?.lname}` : "User"}
              </span>
              <div className="flex items-start cursor-pointer z-30">
                <BsThreeDotsVertical
                  onClick={() => handleIsMyVideo(data)}
                  className="w-[27px] h-[27px] text-white"
                />
              </div>
            </div>
            <div className="ml-[53px] mt-[-22px]">
              <span className="px-3 py-[2px] border-white p-1 text-[10px] rounded-lg bg-white text-slate-400 mr-4">Adventures</span>
              <span className="text-[10px] font-medium">5 hours ago</span>
            </div>
          </div>
        </div>


      </div>
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=vNeN13EQbqk' /> */}

      {/* For profile picture */}

      {/* For Username and time when he created the video and views */}

      {/* For creating mute, likes, comments and share */}

      {showOwnVideoModal && (
        <OwnUserVideoModal
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          onClose={() => setShowOwnVideoModal(false)}
        />
      )}
      {showOthersVideoModal && (
        <OtherUserVideoModal handleBlock={handleBlock} onClose={() => setShowOthersVideoModal(false)} />
      )}
      {editVideo && <EditMyVideoModal onClose={() => setEditVideo(false)} />}
      {deleteVideo && (
        <DeleteVideoModal onClose={() => setDeletetVideo(false)} />
      )}
      {commentVideo && (
        <VideoCommentsModal onClose={() => setCommentVideo(false)} />
      )}

      {selectVideo && (
        <SelectedVideoModal
          selectedVideo={selectedVideo}
          onClose={() => setSelectVideo(false)}
        />
      )}
    </div>
  );
};

export default VideoComponent;
