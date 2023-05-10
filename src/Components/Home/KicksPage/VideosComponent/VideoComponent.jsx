import React, { useState } from "react";
import ReactPlayer from "react-player";
import v2 from '../../../../Assets/Videos/v2.mp4';
import { BsThreeDotsVertical } from 'react-icons/bs'
import eye from '../../../../Assets/Images/Eye icon.png'
import group from '../../../../Assets/Images/Group 716@3x.png';
import mute from '../../../../Assets/Images/Mute.png';
import kicksPageBeforeLike from '../../../../Assets/Images/Kicks before like.png';
import kicksComments from '../../../../Assets/Images/Kicks Comment.png';
import kicksShare from '../../../../Assets/Images/Kicks Share.png';
import OwnUserVideoModal from '../OwnUserVideoModal'
import DeleteVideoModal from '../DeleteVideoModal'
import EditMyVideoModal from '../EditMyVideoModal'
import OtherUserVideoModal from '../OtherUserVideoModal'
import VideoCommentsModal from '../VideoCommentsModal'
import { useDispatch } from "react-redux";
import { addLikes, getCommentsByPostid } from "../../../../redux/actionCreators/kicksActionCreator";
import moment from "moment/moment";

const VideoComponent = ({ dataList , data}) => {
  const dispatch = useDispatch()
  const [isMyVideo, setIsMyVideo] = useState(false)
  const [showOwnVideoModal, setShowOwnVideoModal] = useState(false)
  const [showOthersVideoModal, setShowOthersVideoModal] = useState(false)
  const [deleteVideo, setDeletetVideo] = useState(false)
  const [editVideo, setEditVideo] = useState(false)  
  const [commentVideo, setCommentVideo] = useState(false);
  const [state, setState] = useState({})
  const { isMute = true} = state
const {
  id,
  commentcount = '',
  createddatetime,
  duration,
  image,
  isliked,
  likecount = '',
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
const name = profile?.fname+profile?.lname
  const handleDelete = ()=>{
    setShowOwnVideoModal(false)
    setDeletetVideo(true)
  }

  const handleEdit = ()=>{
    setShowOwnVideoModal(false)
    setEditVideo(true)
  }

  const handleIsMyVideo = (data)=>{
    dispatch({
      type: "ACTIVE_POST",
      payload: data
    })
    if(isMyVideo){
      setShowOthersVideoModal(false)
      setShowOwnVideoModal(true)
    }else{
      setShowOthersVideoModal(true)
      setShowOwnVideoModal(false)
    }
  }

  const handleIconClick = (title) => {
    if(title === 'comments'){
      dispatch(getCommentsByPostid(id));
      setCommentVideo(true);
    }else if(title === 'mute'){
      setState({...state, isMute: !isMute})
    }else if(title === 'likes'){
      const payload = {
        postid : id,
        profileid: profileid,
        type:'c',
        datetime: moment().format('YYYY-MM-DDTHH:mm:ss:ms')
      }
      dispatch(addLikes(payload))
    }
  }

  return (
    <div key={profile?.id} className="relative my-10 h-full">
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
          className="absolute bg-red-300 h-auto w-full"
          loop={true}
          autoPlay="autoplay"
          controls
          muted = {isMute}
        >
          <source src={video} type="video/mp4" />
        </video>
      </section>
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=vNeN13EQbqk' /> */}

      {/* For profile picture */}

      {/* For Username and time when he created the video and views */}

      {/* For creating mute, likes, comments and share */}

      <div className="relative bottom-2 h-[600px]">
        <div className="absolute bottom-[60px] right-[20px]">
          {dataList?.map((elem, index) => (
            <div
              key={elem.title}
              onClick={() => handleIconClick(elem.title) }
              className="flex items-end mb-3 gap- font-semibold flex-col"
            >
              <img
                src={elem.img}
                alt=""
                className="w-[30px] cursor-pointer"
              />
              <div className="text-[12px] text-white flex items-center">
                {elem.title === 'likes' ? `${likecount} likes` : elem.title === 'comments' ? `${commentcount} comments`: elem.title}
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </div>
  );
}

export default VideoComponent;