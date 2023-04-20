import React from "react";
import Navbar from "./Navbar/Navbar";
import PostForm from "./PostForm/PostForm";
import HeroSection from "./HeroSection/HeroSection";
import SliderSection from "./SliderSection/SliderSection";
import PostContent from "./PostContetnt/PostContent";
import ReportModal from "./Modal/ReportModal/ReportModal";
import ThankuModal from "./Modal/ThankuModal/ThankuModal";
import OriginalPostModal from "./Modal/OriginalPostModal/OriginalPostModal";
import ChooseFreindsModal from "./Modal/ChooseFreindsModal/ChooseFreindsModal";
import User from "../User/User";
import Friends from "./Friends/Friends";
import ShareWithModal from "./Modal/ShareWithModal/ShareWithModal";
import CustomGroupModal from "./Modal/CustomGroupModal/CustomGroupModal";
import { Outlet, Route, Routes } from "react-router-dom";
import ChangeRelationshipModal from "./Modal/ChangeRelationshipModal/ChangeRelationshipModal";
import UnfriendModal from "./Modal/UnfriendModal/UnfriendModal";
import BlockModal from "./Modal/BlockModal/BlockModal";
import FollowersModal from "./Modal/FollowersModal/FollowersModal";
import FollowingModal from "./Modal/FollowersModal/FollowersModal";
import PreferredCategoriesModal from "./Modal/PreferredCategoriesModal/PreferredCategoriesModal";
import UserProfilePage from "./ProfilePage/ProfilePage";
import SharePostModal from "./Modal/SharePostModal/SharePostModal";
import FriendsModal from "./Modal/FriendsModal/FriendsModal";
import VerifiedAccount from "./VerifiedAccount/VerifiedAccount";
import ChatPages from "./ChatPages/ChatPages";
import MyFriendsPage from "./MyFriendsPage/MyFriendsPage";
import SearchComponent from "./SearchComponent/SearchComponent";
import FindFriendsPage from "./SearchFriendPage/SearchFriendsPage";
import FriendRequestPage from "./SearchFriendPage/SearchFriendsPage";
import dataList from "./Modal/ReportModal/data";
import ProfilePage from "./ProfilePage/ProfilePage";
import Kicks from "./KicksPage/Kicks";
import CreatePostModal from "./Modal/CreatePostModal/CreatePostModal";
import SearchKicksPage from "./SearchKicksPage/SearchKicksPage";
import postData, { userData } from "./dataList";


const Home = ({ onShowReportModal, showReportModal }) => {

  return (
    // <div className="flex flex-col h-[550px]">
    //   <section className="w-full fixed bg-blue-700">
    //
    //   </section>

    //   <section className="w-full fixed top-[55px] h-[70px]">
    //     <PostForm width={47} bgColor={"#E4E7EC"} />
    //   </section>

    //
    //   {/* <User /> */}
    //  <Friends />
    //   {/* <ThankuModal /> */}
    //   {/* <OriginalPostModal /> */}
    //   {/* <ChooseFreindsModal /> */}
    //   {/* <ShareWithModal /> */}
    //   {/* <CustomGroupModal /> */}
    //   {/* <ChangeRelationshipModal /> */}
    //   {/* <UnfriendModal /> */}
    //   {/* <BlockModal /> */}
    //   {/* <SearchFriendsPage /> */}
    //   {/* <FollowersModal title="Followers"/> */}
    //   {/* <FollowingModal title="Following"/> */}
    //   {/* <PreferredCategoriesModal /> */}
    //   {/* */}

    //

    //   {/* <SharePostModal /> */}
    //   {/* <FriendsModal /> */}
    //   {/* <VerifiedAccount /> */}
    //   {/* <ChatPages /> */}
    //   {/* <MyFriendsPage /> */}
    //   {/* <Kicks /> */}
    //   {/* <SearchKicksPage /> */}
    //   {/* <CreatePostModal /> */}


    // -----------------USER PAGE----------------
    <div className="w-full h-[100%] bg-[#E4E7EC] flex flex-col items-center">
      {/* NAVBAR */}

      <PostForm />
      <section className="w-full h-[95%] overflow-y-scroll flex flex-col items-center rounded-lg">
        <HeroSection />
        <SliderSection />
        <PostContent data={postData} showModalFunc={onShowReportModal} userData={userData} />
      </section>
    </div>

    // --------------------------------END USER PAGE ---------------
  );
};

export default Home;
