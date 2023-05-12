import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import events from "./events.jpg";
import VideoComponent from "./VideosComponent/VideoComponent";
import { HiPlus, HiSearch } from "react-icons/hi";
import beforeFollow from "../../../Assets/Images/Kicks before follow.png"
import "./kicks.css";
import {
  addCommentOnKicks,
  getFollowingKicks,
  getLatestKicks,
  getTrendingKicks,
  selectKicksType,
} from "../../../redux/actionCreators/kicksActionCreator";
import v1 from "../../../Assets/Videos/v1.mp4";
import v2 from "../../../Assets/Videos/v2.mp4";
import v3 from "../../../Assets/Videos/v3.mp4";
import v4 from "../../../Assets/Videos/v4.mp4";
import v5 from "../../../Assets/Videos/v5.mp4";
import { BsMusicNoteList } from "react-icons/bs";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import mute from "../../../assets/images/mute.png";
import Messages from "../../../assets/images/Messages.png";
import like from "../../../assets/images/KicksBeforeLike.png";
import share from "../../../assets/images/share.png";
import collection from "../../../Assets/Images/collection.png";
import "./kicks.css";
import { Link } from "react-router-dom";
import KicksComment from "./KicksComment";
import SelectedVideoModal from "../SearchKicksPage/SelectedVideoModal";
import EmptyComponent from "../../../Components/empty component/EmptyComponent";
import { isEmpty } from "../../Utility/utility";
import moment from "moment";
import { BiCategory } from "react-icons/bi";
import CategoriesModal from "../SearchKicksPage/CategoriesModal";

const Kicks = () => {
  const dispatch = useDispatch();

  const reducerDate = useSelector((state) => {
    return {
      profile: state.profileReducer.profile,
      followingsContent: state.kicksReducer.followingKicks,
      trendingContents: state.kicksReducer.trendingKicks,
      latestContents: state.kicksReducer.latestKicks,
    };
  });

  const { profile, followingsContent, trendingContents, latestContents } =
    reducerDate;
  const [state, setState] = useState({});
  const { kicksType = "Following" } = state;
  const [comments, setComments] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectVideo, setSelectVideo] = useState(false);
  const [showCategories, setShowCategories] = useState(false)

  const videoData = useMemo(() => {
    return kicksType === "Following"
      ? followingsContent
      : kicksType === "Trending"
        ? trendingContents
        : kicksType === "Latest"
          ? latestContents
          : {};
  }, [kicksType]);

  useEffect(() => {
    getKicks("Following");
  }, []);

  const data = [
    { title: "Following" },
    { title: "Latest" },
    { title: "Trending" },
  ];

  const dataList = [
    { title: "mute", img: mute },
    { title: "likes", img: like },
    { title: 'follow', img: beforeFollow },
    { title: "comments", img: Messages },
    { title: "share", img: share },
    { title: "save", img: collection },
  ];

  function handleFileSelection(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedVideo(reader.result);
    };

    reader.readAsDataURL(file);
  }

  // const { kicksType } = useSelector((state) => state.userReducer);

  const getKicks = (kicksType) => {
    setState({ ...state, kicksType: kicksType });
    const data = {
      categories: [],
      profileId: profile?.id,
      rootRequest: false,
    };
    let params = { index: 0, size: 10 };
    if (kicksType === "Latest") {
      dispatch(getLatestKicks(params, { ...data, segment: "LATEST" }));
    } else if (kicksType === "Trending") {
      dispatch(getTrendingKicks(params, { ...data, segment: "TRENDING" }));
    } else if (kicksType === "Following") {
      dispatch(getFollowingKicks(params, { ...data, segment: "FOLLOWING" }));
    }
  };
  const handleComment = (commentText, postid) => {
    if (commentText?.trim()) {
      const payload = {
        profileid: profile?.id,
        postid: postid,
        text: commentText,
        image: "image",
        emogi: "emogi",
        datetime: moment().format("YYYY-MM-DDTHH:mm:ms"),
      };
      dispatch(addCommentOnKicks(payload));
    }
  };
  console.log("item", videoData)
  return (

    // mobile view//
    <div className={`w-full flex flex-col items-center bg-[url(${events})]`}>
      <section className=" w-[95%] sm:w-[50%] lg:w-[40%] p-3 bg-black">

        <div className="flex justify-between sticky top-[10%] p-2">
          <div className="mt-1">
            {/* <input type='file' id='chooseVideo' onChange={handleFileSelection} className='hidden' /> */}
            <span onClick={() => setShowCategories(true)} className='cursor-pointer'>
              <BiCategory className='text-white bg-[#6e6f6f] h-10 w-10 rounded-full p-0.5' /></span>
          </div>
          {data.map((elem) => (
            <p
              key={elem.title}
              className="text-white cursor-pointer flex items-center justify-center rounded-xl font-semibold"
              style={{
                padding: kicksType === elem.title ? "0.5rem 1rem" : "0rem",
                backgroundColor:
                  kicksType === elem.title ? "#DD8E58" : "black",
              }}
              onClick={() => getKicks(elem.title)}
            >
              {elem.title}
            </p>
          ))}
          <section className=" mt-1">
            <Link to="/veiwallkicks">
              <HiSearch className="w-8 p-0.5 h-8 cursor-pointer bg-[#6e6f6f] text-white rounded-full" />
            </Link>
          </section>
        </div>


        {/*Left Arrow Button Section */}

        {/* <div className="">
          <FaArrowAltCircleLeft className="w-9 h-9 text-white cursor-pointer" />
        </div> */}


        <section className="overflow-y-scroll flex-1 text-white bg-black   h-[90vh] hideScroll">
          {isEmpty(videoData?.content) ? (
            <EmptyComponent
              message={`There is no video in ${kicksType} section`}
            />
          ) : (
            videoData?.content?.map((item) => {
              const { text, id } = item;
              return (
                <div className="">
                  <VideoComponent dataList={dataList} data={item} />

                  {/* Comment Section */}

                  {/* <section className="flex flex-1 items-center bg-black ml-20">
                    <div className="w-[80%] flex flex-col text-[12px] text-white gap-2 pl-4">
                      <h1 className="font-bold">#nature_lover #nature_lover</h1>
                      <p>{text}</p>
                      <div className="flex gap-4">
                        <div className=" px-3 font-bold bg-white text-gray-500 flex items-center justify-center rounded-lg">
                          @music
                        </div>
                        <BsMusicNoteList className="w-7 h-7 text-white cursor-pointer" />
                        <p className="flex items-center">
                          maayadari maayadari andamaa
                        </p>
                      </div>
                      {comments && (
                        <KicksComment
                          addComment={(text) => handleComment(text, id)}
                        />
                      )}
                    </div>

                    {/*Right Arrow Button */}
                  {/* <div className="w-[20%]">
                      <FaArrowAltCircleRight className="w-9 h-9 text-white cursor-pointer" />
                    </div> */}
                  {/* </section> */}
                </div>
              );
            })
          )}
          {/* <VideoComponent dataList={dataList} />
        <VideoComponent dataList={dataList} />
        <VideoComponent dataList={dataList} /> */}
        </section>
      </section>

      {/* Reels Section */}

      {selectVideo && (
        <SelectedVideoModal
          selectedVideo={selectedVideo}
          onClose={() => setSelectVideo(false)}
        />
      )}

      {showCategories && <CategoriesModal onClose={() => setShowCategories(false)} />}

    </div>


    // desktop version//
    // <div className={`w-full flex h-[90vh] bg-[url(${events})] z-10`}>
    //   <section className="flex w-[35%] items-center justify-center bg-black">
    //     <div className="w-[80%] flex flex-col items-center">
    //       <div className="flex flex-col gap-3">
    //         {data.map((elem) => (
    //           <p
    //             key={elem.title}
    //             className="text-white cursor-pointer flex items-center justify-center rounded-xl font-semibold"
    //             style={{
    //               padding: kicksType === elem.title ? "0.5rem 1rem" : "0rem",
    //               backgroundColor:
    //                 kicksType === elem.title ? "#DD8E58" : "black",
    //             }}
    //             onClick={() => getKicks(elem.title)}
    //           >
    //             {elem.title}
    //           </p>
    //         ))}
    //         <section className="flex justify-evenly gap-2 mt-1">
    //           <Link to="/veiwallkicks">
    //             <HiSearch className="w-8 p-0.5 h-8 cursor-pointer bg-[#6e6f6f] text-white rounded-full" />
    //           </Link>
    //           <div>
    //             {/* <input type='file' id='chooseVideo' onChange={handleFileSelection} className='hidden' /> */}
    //             <span>
    //               <label
    //                 onClick={() => setSelectVideo(true)}
    //                 htmlFor="chooseVideo"
    //               >
    //                 <HiPlus className="w-8 h-8 p-0.5 bg-[#6e6f6f] cursor-pointer rounded-full text-white" />
    //               </label>
    //             </span>
    //           </div>
    //         </section>
    //       </div>
    //     </div>

    //     {/*Left Arrow Button Section */}
    //     <div className="w-[20%]">
    //       <FaArrowAltCircleLeft className="w-9 h-9 text-white cursor-pointer" />
    //     </div>
    //   </section>

    //   {/* Reels Section */}

    //   <section className="overflow-y-scroll flex-1 w-1/2 text-white bg-black  h-[90vh] hideScroll">
    //     {isEmpty(videoData?.content) ? (
    //       <EmptyComponent
    //         message={`There is no video in ${kicksType} section`}
    //       />
    //     ) : (
    //       videoData?.content?.map((item) => {
    //         const { text, id } = item;
    //         return (
    //           <div className="flex ">
    //             <VideoComponent dataList={dataList} data={item} />

    //             {/* Comment Section */}
    //             <section className="flex flex-1 items-center bg-black ml-20">
    //               <div className="w-[80%] flex flex-col text-[12px] text-white gap-2 pl-4">
    //                 <h1 className="font-bold">#nature_lover #nature_lover</h1>
    //                 <p>{text}</p>
    //                 <div className="flex gap-4">
    //                   <div className=" px-3 font-bold bg-white text-gray-500 flex items-center justify-center rounded-lg">
    //                     @music
    //                   </div>
    //                   <BsMusicNoteList className="w-7 h-7 text-white cursor-pointer" />
    //                   <p className="flex items-center">
    //                     maayadari maayadari andamaa
    //                   </p>
    //                 </div>
    //                 {comments && (
    //                   <KicksComment
    //                     addComment={(text) => handleComment(text, id)}
    //                   />
    //                 )}
    //               </div>

    //               {/*Right Arrow Button */}
    //               <div className="w-[20%]">
    //                 <FaArrowAltCircleRight className="w-9 h-9 text-white cursor-pointer" />
    //               </div>
    //             </section>
    //           </div>
    //         );
    //       })
    //     )}
    //     {/* <VideoComponent dataList={dataList} />
    //     <VideoComponent dataList={dataList} />
    //     <VideoComponent dataList={dataList} /> */}
    //   </section>

    //   {selectVideo && (
    //     <SelectedVideoModal
    //       selectedVideo={selectedVideo}
    //       onClose={() => setSelectVideo(false)}
    //     />
    //   )}
    // </div>

  );
};

export default Kicks;
