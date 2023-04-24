import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import PostForm from "./PostForm/PostForm";
import HeroSection from "./HeroSection/HeroSection";
import SliderSection from "./SliderSection/SliderSection";
import PostContent from "./PostContetnt/PostContent";

import postData, { userData } from "./dataList";
import { useDispatch, useSelector } from "react-redux";
import { defaultRootScreen } from "../../redux/actionCreators/eventActionCreator";

const Home = ({ onShowReportModal, showReportModal }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultRootScreen());
  }, []);
  return (
    // -----------------USER PAGE----------------
    <div className="w-full h-[100%] bg-[#E4E7EC] flex flex-col items-center">
      {/* NAVBAR */}

      <PostForm />
      <section className="w-full h-[95%] overflow-y-scroll flex flex-col items-center rounded-lg">
        <HeroSection />
        <SliderSection />
        <PostContent
          data={postData}
          showModalFunc={onShowReportModal}
          userData={userData}
        />
      </section>
    </div>

    // --------------------------------END USER PAGE ---------------
  );
};

export default Home;
