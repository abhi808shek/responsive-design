import React, { useState } from "react";
import { createPortal } from "react-dom";
import { BsPeopleFill } from 'react-icons/bs'
import { FaWalking } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import FollowersModal from "../../Modal/FollowersModal/FollowersModal";
import user from '../../../../Assets/Images/Person.jpg'
import Portals from "../../../Portals/Portals";
import { useDispatch } from "react-redux";
import { getFollower, getFollowing } from "../../../../redux/actionCreators/profileAction";
import { data } from "autoprefixer";
import { getFriendsList } from "../../../../redux/actionCreators/friendsAction";

const ProfileImageSection = ({ isOther, data={}, following, followers, friends, uploadImage, coverImg, profileImg}) => {
  const { id } = data || {}
  const friendsCount =  friends?.data?.length || 0;
  const followingCount = following?.data?.length || 0;
  const followersCount = followers?.data?.length || 0;

  const userName = data?.fname + data?.lname;

  const [state, setState] = useState({})
  const { showModal, modalName } = state;
  const dispatch = useDispatch()

  const handleModal =async (name) => {
    if(name === "Friends"){
      const data =await dispatch(getFriendsList(id))
      setState({...state, showModal: true, modalName: name})
    }else if(name === 'Followers'){
      dispatch(getFollower(id))
       setState({...state, showModal: true, modalName: name})
    }else if( name === 'Following'){
      dispatch(getFollowing(id))
       setState({...state, showModal: true, modalName: name})
    }
  }
  return (
    <div className="lg:w-[80%] xl:w-[70%] bg-white rounded-xl flex flex-col items-center my-3">
      {/*Cover Image Section */}
      <input id="cover-pic" type="file" accept="image/*" className="hidden" onChange={(e) =>uploadImage('coverImg', e.target.files)}/>
      <label htmlFor={`${isOther ? "" : "cover-pic" }`} className="w-[95%] h-[200px] rounded-xl flex justify-center mt-3">
        <img
          src={coverImg || data?.pcoverimage }
          alt=""
          className="w-full h-full rounded-xl border border-gray-400 object-cover"
        />
      </label>

      {/* Profile Image Section  */}
      <section className="w-[95%] my-2 rounded-xl flex flex-col">
        <div className="flex h-[140px] justify-between items-center">
        <input type="file" id="profile-pic" accept="image/*"  onChange={(e) => uploadImage('profileImg', e.target.files)} className="hidden"/>
          <label htmlFor={`${isOther ? "" : "profile-pic"}`} className="w-[200px] h-[200px] 2xl:w-[200px] relative top-[-40px]">
            <img
              src={profileImg  || data?.pimage}
              alt=""
              className="w-full bg-white h-full border-2 border-[#6780af] rounded-full ml-1 object-cover"
            />
          </label>

          {/* Follower Following and Friends Section */}
          <section className=" flex flex-col items-center cursor-pointer" 
          onClick={() => handleModal("Friends")}>
            <BsPeopleFill alt="" className="w-7 h-7 text-[#7991bd] py-0.5" />
            <span className="font-bold text-[11px] my-1 py-[1px] w-full bg-[#d7deeb] px-4  rounded-md">
              {friendsCount} Friends
            </span>
          </section>

          <section className=" flex flex-col items-center cursor-pointer"
          onClick={() => handleModal("Followers")}>
            <FaWalking alt="" className="w-7 h-7 text-[#7991bd] py-0.5" />

            <span className="font-bold text-[11px] my-1 py-[1px] w-full bg-[#d7deeb] px-3 rounded-md" >
              {followersCount} Followers
            </span>

            <span></span>
          </section>

          <section className=" flex flex-col items-center cursor-pointer"
          onClick={() => handleModal('Following')}>
            <IoIosPeople className="w-7 h-7 text-[#7991bd] py-0.5" />
           
            <span className="font-bold text-[11px] my-1 py-[1px] w-full px-4 bg-[#d7deeb] rounded-md">
              {followingCount} Following
            </span>
          </section>
        </div>
        <div className="flex gap-2 items-center mb-3 mt-1">
          <span className="font-bold text-2xl flex items-center justify-center">{`${userName ? `${data?.fname} ${data?.lname}` : "User"}`}</span>
          <span className="text-sm font-medium text-gray-700  2xl:text-[20px] flex items-center justify-center">@Software Engineer</span>
        </div>
      </section>
      {/* {
        showModal && createPortal(<FollowersModal modalName={`Your ${modalName}`} data={friends}/>, document.getElementById('root'))
      } */}
      {
        showModal &&
        <Portals closeModal={() => setState({...state, showModal: false})}>
        <FollowersModal modalName={`Your ${modalName}`} data={friends}/>
        </Portals>
      }
    </div>
  );
};

export default ProfileImageSection;
