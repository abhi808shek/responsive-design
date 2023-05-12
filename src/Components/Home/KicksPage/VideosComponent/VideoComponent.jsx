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
import { Link, useNavigate } from "react-router-dom";
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
      const payload = {
        postid: id,
        profileid: profileid,
        type: 'c',
        datetime: moment().format('YYYY-MM-DDTHH:mm:ss:ms')
      }
      dispatch(addLikes(payload)).then((res) => {
        if (res.data.status) {
          toast.success(res.data.message)
        } else {
          toast.error(res.data.message)
        }
      }).catch((err) => {
        toast.error(err.message)
      })
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

  return (
    <div key={profile?.id} className="relative my-10 h-full snap-y snap-mandatory">
      <div className="flex px-1 pt-5 mb-5">
        <div className="z-10">
          <img
            src={profile?.pimage}
            alt=""
            className="w-[45px] h-[45px] rounded-full object-cover"
          />
        </div>
        <div className=" flex flex-1 z-10 flex-col text-white justify-center ml-2">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold ">
              {name ? `${profile?.fname} ${profile?.lname}` : "User"}
            </h1>
            <p className="text-[10px] font-medium">5 hours ago</p>
          </div>

          <div className="flex gap-2 items-center">
            <img src={eye} alt="" className="w-[15px] h-[15px]" />
            <p className="text-[10px]">{viewcount} Views</p>
          </div>

        </div>
        <div className="flex items-center cursor-pointer z-30">
          <BsThreeDotsVertical
            onClick={() => handleIsMyVideo(data)}
            className="w-[27px] h-[27px] text-white"
          />
        </div>
      </div>
      <section className="absolute fixed flex items-center bg-black overflow-hidden right-0  left-0 h-1/2 w-full z-0">
        <video
          className="h-[500px] w-full cursor-pointer"
          loop={true}
          autoPlay="autoplay"
          muted={isMute}
          width="320" height="240"
          ref={videoRef}
          onClick={onVideoClick}        >
          <source src={video} type="video/mp4" />
        </video>
      </section>
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
        <OtherUserVideoModal onClose={() => setShowOthersVideoModal(false)} />
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
