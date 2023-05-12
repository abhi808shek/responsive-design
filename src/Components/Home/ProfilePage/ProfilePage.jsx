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
import { getFollower, getFollowing, getProfileById, updateProfile } from "../../../redux/actionCreators/profileAction";
import { getUserDataFromLocalStorage, toasterFunction } from "../../Utility/utility";
import { useMemo } from "react";
import { checkingIsEmailExist } from "../../../redux/actionCreators/authActionCreator";
import { userData } from "../dataList";
import { imageUploadApi } from "../../../redux/actionCreators/eventActionCreator";
import { getFriendsList } from "../../../redux/actionCreators/friendsAction";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const ProfilePage = ({ isOther }) => {
  const [selectedOption, setSelectedOption] = useState("Post");
  const dispatch = useDispatch();
  const params = useParams()
  const user = useMemo(() => {
    return  isOther ? { id: params?.id} : getUserDataFromLocalStorage();
  }, [isOther, params.id])

  const reducerData = useSelector((state) => {
    return {
      following: state?.profileReducer?.following,
      followers: state?.profileReducer?.followers,
      friends: state?.profileReducer?.friends,
      profileDetail: state?.profileReducer?.profileDetail?.data,
      profile: state.profileReducer.profile
    }
  });
  const { following, followers, friends,profileDetail, profile} = reducerData;

  const [state, setState ] = useState({})
  const { coverImg, profileImg, showEditModal} = state
  useEffect(() => {
    dispatch(checkingIsEmailExist())
    dispatch(getProfileById(user?.id)).then((res) => {
      console.log('profile resppppppp', res);
      if(!res.status){
        toasterFunction(res.message)
        // toast.error(res.message)
      }
    });
    dispatch(getFollowing(profile?.id));
    dispatch(getFollower(profile?.id));
    dispatch(getFriendsList(profile?.id));
  }, []);

  const handleUploadImage = async (name, value) => {
    const objUrl = URL.createObjectURL(value[0])
    setState({...state, [name]: objUrl})
    const coverImg = new FormData();
    coverImg.append('file', value[0])
    const uploadResponse =await dispatch(imageUploadApi(coverImg))
    
    if(name === "coverImg"){
      let payloads = {...profileDetail, pcoverimage: uploadResponse.path}
      dispatch(updateProfile(payloads))
    }else if(name === "profileImg"){
      let payloads = {...profileDetail, pimage: uploadResponse.path};
      dispatch(updateProfile(payloads));
    }
  }
  return (
    <div className="w-full flex justify-evenly bg-[#E4E7EC] mt-2">
      <section className="flex lg:w-[50%] flex-col mt-2 items-end">
        <ProfileImageSection 
        uploadImage={handleUploadImage} data={profile || {}}
        friends={friends} following={ following } followers={followers}
        coverImg={coverImg} profileImg={profileImg} isOther={isOther} />

        {/* About Section */}
        <AboutSection isOther={isOther} data={profileDetail || {}} />
      </section>
      <section className="flex w-[50%] pr-[8px] flex-col">
        {/* Category Section */}
        <section className="w-[98%] max-w-2xl ml-3 mt-3 flex items-center justify-between">
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



        <section className="w-full max-w-2xl mt-3 rounded-xl flex justify-center">
          <GridBoxes selectedOption={selectedOption}/>
        </section>
      </section>
    </div>
  );
};

export default ProfilePage;
