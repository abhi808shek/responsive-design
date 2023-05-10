import { useRef, useState } from 'react';
import ReactPlayer from "react-player";
import v2 from '../../../../Assets/Videos/v2.mp4';
import { BsThreeDotsVertical } from 'react-icons/bs'
import eye from '../../../../Assets/Images/Eye icon.png'
import group from '../../../../Assets/Images/Group 716@3x.png';
import mute from '../../../../Assets/Images/Mute.png';
import kicksPageBeforeLike from '../../../../Assets/Images/Kicks before like.png';
import kicksComments from '../../../../Assets/Images/Kicks Comment.png';
import kicksShare from '../../../../Assets/Images/Kicks Share.png';
import collection from '../../../../Assets/Images/Collections.png'
import OwnUserVideoModal from '../OwnUserVideoModal'
import DeleteVideoModal from '../DeleteVideoModal'
import EditMyVideoModal from '../EditMyVideoModal'
import OtherUserVideoModal from '../OtherUserVideoModal'
import VideoCommentsModal from '../VideoCommentsModal'
import SavedCollections from '../SavedCollections'

const VideoComponent = ({ dataList, handleLikeModal }) => {
  const [isMyVideo, setIsMyVideo] = useState(true)
  const [showOwnVideoModal, setShowOwnVideoModal] = useState(false)
  const [showOthersVideoModal, setShowOthersVideoModal] = useState(false)
  const [deleteVideo, setDeletetVideo] = useState(false)
  const [editVideo, setEditVideo] = useState(false)  
  const [commentVideo, setCommentVideo] = useState(false)
  const [showCollection, setShowCollection] = useState(false)
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef(null);

  const handleButtonActions = (elem) => {
    if(elem.title == 'mute'){
      console.log(isMuted, videoRef.current.muted)
      setIsMuted(!isMuted);
      videoRef.current.muted = !videoRef.current.muted;
    }else if(elem.title == 'comments'){
      setCommentVideo(true)
    }
  }

  const handleDelete = ()=>{
    setShowOwnVideoModal(false)
    setDeletetVideo(true)
  }

  const handleEdit = ()=>{
    setShowOwnVideoModal(false)
    setEditVideo(true)
  }

  const handleIsMyVideo = ()=>{
    if(isMyVideo){
      setShowOthersVideoModal(false)
      setShowOwnVideoModal(true)
    }else{
      setShowOthersVideoModal(true)
      setShowOwnVideoModal(false)
    }
  }

  const handleActionModals = (elem)=>{
    if(elem.title == 'likes') handleLikeModal()
  }

  return (
    <div className="relative h-full">

      <section className="absolute fixed overflow-hidden top-0 right-0 bottom-0 left-0 h-full w-full z-0">
         <video ref={videoRef} src={v2} type="video/mp4" className="absolute top-0 bottom-0 bg-red-300 h-auto w-full" loop={true} autoPlay controls />
      </section>
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=vNeN13EQbqk' /> */}

      {/* For profile picture */}
        
      {/* For Username and time when he created the video and views */}
      <div className='flex px-1 pt-1'>
        <div className="z-10">
          <img
            src="./images/events.jpg"
            alt=""
            className="w-[45px] h-[45px] rounded-full object-cover"
          />
        </div>
        <div className=" flex flex-1 z-10 flex-col text-white justify-center ml-2">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold ">Elisa K</h1>
            <p className="text-[10px] font-medium">5 hours ago</p>
          </div>

          <div className="flex gap-2 items-center">
            <img
              src={eye}
              alt=""
              className="w-[15px] h-[15px]"
            />
            <p className="text-[10px]">24 Views</p>
          </div>
        </div>
        <div className="flex items-center cursor-pointer z-30">
          <BsThreeDotsVertical onClick={handleIsMyVideo} className="w-[27px] h-[27px] text-white" />          
        </div>
      </div>


      {/* For creating mute, likes, comments and share */}

      <div className="relative bottom-2 h-full">
       <div className='absolute bottom-[60px] right-[20px]'>
        {dataList.map((elem, index) => (
          <div
            key={elem.title}            
            className="flex items-end gap-3 font-bold flex-col"
          >
            <img
              src={index == 0 ? mute : index == 1 ? kicksPageBeforeLike : index == 2 ? kicksComments : index == 3 ? kicksShare : collection}
              alt=""
              onClick={()=>handleButtonActions(elem)}
              className="w-[30px] cursor-pointer"
            />
            <div onClick={()=>handleActionModals(elem)} className="text-[12px] cursor-pointer text-white flex items-center">
              {elem.title}
            </div>
          </div>
          ))
        } 
       </div>
      </div>
      {showOwnVideoModal && <OwnUserVideoModal handleEdit={handleEdit} handleDelete={handleDelete} handleCollection={()=>setShowCollection(true)} onClose={()=>setShowOwnVideoModal(false)} />}
      {showOthersVideoModal && <OtherUserVideoModal onClose={()=>setShowOthersVideoModal(false)} />}
      {editVideo && <EditMyVideoModal onClose={()=>setEditVideo(false)} />}
      {deleteVideo && <DeleteVideoModal onClose={()=>setDeletetVideo(false)} />}
      {commentVideo && <VideoCommentsModal onClose={()=>setCommentVideo(false)} />}
      {showCollection && <SavedCollections onClose={()=>setShowCollection(false)} />}
    </div>
  )
}

export default VideoComponent;