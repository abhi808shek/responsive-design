import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectKicksType } from "../../../redux/actionCreators/userActionCreator";
import events from "./events.jpg"
import VideoComponent from "./VideosComponent/VideoComponent";
import ReactPlayer from 'react-player'
import v1 from '../../../Assets/Videos/v1.mp4';
import v2 from '../../../Assets/Videos/v2.mp4';
import v3 from '../../../Assets/Videos/v3.mp4';
import v4 from '../../../Assets/Videos/v4.mp4';
import v5 from '../../../Assets/Videos/v5.mp4';
import { HiPlus, HiSearch } from 'react-icons/hi'
import { BsMusicNoteList } from 'react-icons/bs'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import mute from '../../../assets/images/mute.png'
import Messages from '../../../assets/images/Messages.png'
import like from '../../../assets/images/KicksBeforeLike.png'
import share from '../../../assets/images/share.png'
import './kicks.css'
import { Link } from 'react-router-dom'
import KicksComment from './KicksComment'
import SelectedVideoModal from '../SearchKicksPage/SelectedVideoModal'

const Kicks = () => {
  const [comments, setComments] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectVideo, setSelectVideo] = useState(false)  

  const data = [
    { title: "Following" },
    { title: "Latest" },
    { title: "Trending" },
  ];

  const dataList = [
    { title: "mute", img: mute  },
    { title: "25 likes", img: like },
    { title: "comments", img: Messages },
    { title: "share", img: share },
  ];

  function handleFileSelection(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedVideo(reader.result);
    };

    reader.readAsDataURL(file);
  }

  const dispatch = useDispatch();
  const { kicksType } = useSelector((state) => state.userReducer);

  return (
    <div className={`w-full flex h-[90vh] bg-[url(${events})] z-10`}>
      <section className="flex w-[25%] items-center justify-center bg-black">
        <div className="w-[80%] flex flex-col items-center">
          <div className="flex flex-col gap-3">
            {data.map((elem) => (
              <p
                key={elem.title}
                className="text-white cursor-pointer flex items-center justify-center rounded-xl font-semibold"
                style={{
                  padding: kicksType === elem.title ? "0.5rem 1rem" : "0rem",
                  backgroundColor:
                    kicksType === elem.title ? "#DD8E58" : "black",
                }}
                onClick={() => dispatch(selectKicksType(elem.title))}
              >
                {elem.title}
              </p>
            ))}
            <section className="flex justify-evenly gap-2 mt-1">
             <Link to='/veiwallkicks'>
              <HiSearch className='w-8 p-0.5 h-8 cursor-pointer bg-[#6e6f6f] text-white rounded-full'/>
             </Link>
             <div>
              <input type='file' id='chooseVideo' onChange={handleFileSelection} className='hidden' />
              <span><label onClick={()=>setSelectVideo(true)} htmlFor='chooseVideo'><HiPlus className='w-8 h-8 p-0.5 bg-[#6e6f6f] cursor-pointer rounded-full text-white'/></label></span>
             </div>
            </section>
          </div>
        </div>

        {/*Left Arrow Button Section */}
        <div className="w-[20%]">
          <FaArrowAltCircleLeft className="w-9 h-9 text-white cursor-pointer" />
        </div>
      </section>

      {/* Reels Section */}


      <section className="overflow-y-scroll w-[30%] h-[90vh] hideScroll">
        <VideoComponent dataList={dataList} />
        <VideoComponent dataList={dataList} />
        <VideoComponent dataList={dataList} />
      </section>

      {/* Comment Section */}
      <section className="flex w-[45%] items-center bg-black">
        <div className="w-[80%] flex flex-col text-[12px] text-white gap-2 pl-4">
          <h1 className="font-bold">#nature_lover #nature_lover</h1>
          <p>
            “Nature is a creative and controlling force in the universe,” “the
            external world in its entirety” or “humankind's original condition.”
          </p>
          <div className="flex gap-4">
            <div className="w-[20%] font-bold bg-white text-gray-500 flex items-center justify-center rounded-lg">
              @music
            </div>
            <BsMusicNoteList className="w-7 h-7 text-white cursor-pointer"/>
            <p className="flex items-center">
              maayadari maayadari andamaa
            </p>
          </div>
          {comments && <KicksComment />}
        </div>

        {/*Right Arrow Button */}
        <div className="w-[20%]">
          <FaArrowAltCircleRight className="w-9 h-9 text-white cursor-pointer" />
        </div>
      </section>
      {selectVideo && <SelectedVideoModal selectedVideo={selectedVideo} onClose={()=>setSelectVideo(false)} />}        
    </div >
  );
};

export default Kicks;
