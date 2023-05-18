import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import PostForm from "./PostForm/PostForm";
import HeroSection from "./HeroSection/HeroSection";
import SliderSection from "./SliderSection/SliderSection";
import PostContent from "./PostContetnt/PostContent";

import postData, { userData } from "./dataList";
import { useDispatch, useSelector } from "react-redux";
import { defaultRootScreen } from "../../redux/actionCreators/eventActionCreator";
import {
  getAllPostWithLimit,
  getKicksVideosWithLimit,
  getUnionListByProfileId,
} from "../../redux/actionCreators/rootsActionCreator";
import NoPostPage from "./NoPostPage/NoPostPage";
import { getLatestKicks } from "../../redux/actionCreators/kicksActionCreator";

const Home = ({ onShowReportModal, showReportModal }) => {
  const dispatch = useDispatch();

  const { defaultRootData } = useSelector((state) => state.eventReducer);
  const reducerData = useSelector((state) => {
    return {
      profile: state.profileReducer.profile || {}
    }
  })
  const { profile } = reducerData
  const { postList } = useSelector((state) => state.rootsReducer);
  const onLoad = () => {
    if (!Object.keys(defaultRootData)?.length) {
      dispatch(defaultRootScreen());
    } else {
      // const data = {
      //   profileId: defaultRootData?.data?.postdata?.profileid,
      //   rootRequest: true,
      //   segment: "FOLLOWING",
      // };
         let params = { index: 0, size: 10 };
         const data = {
           categories: [],
           profileId: profile?.id,
           rootRequest: false,
           segment: "LATEST",
         };
         dispatch(getLatestKicks(params, data));
      // dispatch(getKicksVideosWithLimit(data));
      dispatch(getAllPostWithLimit(profile.id));
      dispatch(
        getUnionListByProfileId(defaultRootData?.data?.postdata?.profileid)
      );
    }
  };
  useEffect(() => {
    onLoad();
  }, [defaultRootData]);
  return (
    // -----------------USER PAGE----------------
    <div className="w-full bg-[#E4E7EC] flex flex-col items-center">
      {/* NAVBAR */}

      <div className="w-full flex py-2 sm:w-[50%] lg:w-[40%] bg-white">
        <PostForm />
      </div>
      <HeroSection />
      <SliderSection />
      <PostContent
        data={postList}
        showModalFunc={onShowReportModal}
        userData={userData}
      />
      {/* <section className="w-full h-[95%] overflow-y-scroll flex flex-col items-center rounded-lg">
        <PostContent
          data={postList}
          showModalFunc={onShowReportModal}
          userData={userData}
        />
      </section> */}
      {/* <NoPostPage /> */}
    </div>

    // --------------------------------END USER PAGE ---------------
  );
};

export default Home;
