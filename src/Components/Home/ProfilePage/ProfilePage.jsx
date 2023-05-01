import React, { useState } from "react";
import ProfileImageSection from "./ProfileImageSection/ProfileImageSection";
import CategorySection from "../CategorySection/CategorySection";
import PostForm from "../PostForm/PostForm";
import PostContent from "../PostContetnt/PostContent";
import AboutSection from "./AboutSection/AboutSection";
import PrivatePage from "./PrivatePage/PrivatePage";
import GridBoxes from "../GridBoxes/GridBoxes";
import SearchComponent from "../SearchComponent/SearchComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollower, getFollowing, getFriendsList, getProfileById } from "../../../redux/actionCreators/profileAction";
import { memo } from "react";
import { getUserDataFromLocalStorage } from "../../Utility/utility";
import { useMemo } from "react";
import { checkingIsEmailExist } from "../../../redux/actionCreators/authActionCreator";
import { userData } from "../dataList";
import { imageUploadApi } from "../../../redux/actionCreators/eventActionCreator";
import { createPortal } from "react-dom";
import { lazy } from "react";

const ProfilePage = ({ isOther }) => {
  const [selectedOption, setSelectedOption] = useState("Post");
  const dispatch = useDispatch();
  const user = useMemo(() => {
   return getUserDataFromLocalStorage();
  }, [])
  const reducerData = useSelector((state) => {
    return {
      following: state?.profileReducer?.following,
      followers: state?.profileReducer?.followers,
      friends: state?.profileReducer?.friends,
    }
  });
  const { following, followers, friends} = reducerData;

  const [state, setState ] = useState({})
  const { coverImg, profileImg, showEditModal} = state
  useEffect(() => {
    dispatch(checkingIsEmailExist())
    dispatch(getProfileById(user?.id));
    dispatch(getFollowing(user?.id));
    dispatch(getFollower(user?.id));
    dispatch(getFriendsList(user?.id));
  }, []);

  const handleUploadImage = async (name, value) => {
    const objUrl = URL.createObjectURL(value[0])
    setState({...state, [name]: objUrl})
    const coverImg = new FormData();
    coverImg.append('file', value[0])
    const uploadResponse =await dispatch(imageUploadApi(coverImg))
    console.log(uploadResponse, '--------');
    
  }
  return (
    <div className="w-full flex justify-evenly bg-[#E4E7EC] h-[1000px] 2xl:h-[1200px]">
      <section className="flex lg:w-[50%] 2xl:h-[1200px] flex-col mt-2 items-end">
        <ProfileImageSection 
        uploadImage={handleUploadImage}
        friends={friends} following={ following } followers={followers}
        coverImg={coverImg} profileImg={profileImg} />

        {/* About Section */}
        <AboutSection isOther={isOther} />
      </section>
      <section className="flex w-[50%] pr-[8px] flex-col">
        {/* Category Section */}
        <section className="w-[98%] mt-3 flex items-center justify-center">
          <CategorySection selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        </section>
        
        {/* Post Form Section */}
        <section className="w-full pl-2">
          {/* <PostForm width={98} bgColor={"#E4E7EC"}/> */}
        </section>

        {/* All Post Section */}
        <section className="w-full">
          {/* <PostContent width={100}/> */}
        </section>

        {/* Private Page Section */}
        {/* <section className="w-full mt-3 h-full">
          <PrivatePage />
        </section> */}



        <section className="w-full mt-3 h-[65%] rounded-xl flex justify-center">
          <GridBoxes selectedOption={selectedOption}/>
        </section>
      </section>
    </div>
  );
};

export default ProfilePage;
