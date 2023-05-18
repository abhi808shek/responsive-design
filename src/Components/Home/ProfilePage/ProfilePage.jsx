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
import { getEducationDetail, getFollower, getFollowing, getFriendProfile, getProfileById, updateProfile } from "../../../redux/actionCreators/profileAction";
import { getUserDataFromLocalStorage, toasterFunction } from "../../Utility/utility";
import { useMemo } from "react";
import { checkingIsEmailExist } from "../../../redux/actionCreators/authActionCreator";
import { userData } from "../dataList";
import { imageUploadApi } from "../../../redux/actionCreators/eventActionCreator";
import { getFriendsList } from "../../../redux/actionCreators/friendsAction";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import PostCard from "../PostContetnt/PostCard/PostCard";

const ProfilePage = ({ isOther }) => {
  const [selectedOption, setSelectedOption] = useState("Post");
  const dispatch = useDispatch();
  const params = useParams()
  const user = useMemo(() => {
    return  isOther ? { id: params?.id} : { id: localStorage.getItem('profileid')};
  }, [isOther, params.id])

  
  const reducerData = useSelector((state) => {
    return {
      following: state?.profileReducer?.following,
      followers: state?.profileReducer?.followers,
      friends: state?.friendReducer?.friends,
      profileDetail: state?.profileReducer?.profileDetail?.data,
      profile: state.profileReducer.profile || {}
    }
  });
  const { following, followers, friends,profileDetail, profile} = reducerData;
  
  const isPersonal = profile?.profiletype === "Personal";
  const [state, setState ] = useState({})
  const { coverImg, profileImg, showEditModal} = state
  useEffect(() => {
     isPersonal ? getEducation(): '';

    dispatch(checkingIsEmailExist())
    dispatch(
      isOther ? getFriendProfile(user?.id) : getProfileById(user?.id)
    ).then((res) => {
      if (!res.status) {
        toasterFunction(res.message);
        // toast.error(res.message)
      }
    });
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
    
    if(name === "coverImg"){
      let payloads = {...profileDetail, pcoverimage: uploadResponse.path}
      dispatch(updateProfile(payloads))
    }else if(name === "profileImg"){
      let payloads = {...profileDetail, pimage: uploadResponse.path};
      dispatch(updateProfile(payloads));
    }
  }
  function getEducation (){
    dispatch(getEducationDetail(user?.id))
  }
  return (
    <div className="w-full flex flex-col sm:flex-row justify-evenly bg-[#E4E7EC] mt-2">
      <section className="flex sm:w-[50%] flex-col mt-2 items-center lg:items-end">
        <ProfileImageSection
          uploadImage={handleUploadImage}
          data={profile || {}}
          friends={friends}
          following={following}
          followers={followers}
          coverImg={coverImg}
          profileImg={profileImg}
          isOther={isOther}
        />

        {/* About Section */}
        <AboutSection isOther={isOther} data={profileDetail || {}} />
      </section>
      <section className="flex sm:w-[50%] flex-col items-center">
        {/* Category Section */}
        <section className="w-full sm:w-[90%] flex items-center justify-between">
          <CategorySection
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </section>

        {/* All Post Section */}
        {/* <section className="w-full sm:w-[50%] lg:w-[80%] flex items-center justify-center flex-col px-2 ">
          <PostCard
            // key={elem?.id}
            // item={elem}
            // userData={userData}
            // showModal={showModalFunc}
            // width={50}
          />
        </section> */}

        {/* Private Page Section */}
        {/* <section className="w-full mt-3 h-full">
          <PrivatePage />
        </section> */}

        <section className="w-full mt-3 rounded-xl flex justify-center sm:w-[92%] lg:w-full xl:w-[93%]">
          <GridBoxes selectedOption={selectedOption} />
        </section>
      </section>
    </div>
  );
};

export default ProfilePage;
