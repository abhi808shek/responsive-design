import React, { useState } from "react";
import { createPortal } from "react-dom";
import { BsPeopleFill } from 'react-icons/bs'
import { FaWalking } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import FollowersModal from "../../Modal/FollowersModal/FollowersModal";
import user from '../../../../Assets/Images/Person.jpg'

const ProfileImageSection = ({ following, followers, friends, uploadImage, coverImg, profileImg}) => {
  const friendsCount =  friends?.data?.length || 0;
  const followingCount = following?.data?.length || 0;
  const followersCount = followers?.data?.length || 0;

  const [state, setState] = useState({})
  const { showModal, modalName } = state
  return (
    <div className="lg:w-[80%] xl:w-[70%] lg:h-[320px] xl:h-[310px] 2xl:h-[590px] bg-white rounded-xl flex flex-col items-center my-3">
      {/*Cover Image Section */}
      <input id="cover-pic" type="file" accept="image/*" className="hidden" onChange={(e) =>uploadImage('coverImg', e.target.files)}/>
      <label htmlFor="cover-pic" className="w-[95%] h-[55%] rounded-xl flex justify-center mt-3">
        <img
          src={coverImg }
          alt=""
          className="w-full h-full rounded-xl object-cover"
        />
      </label>

      {/* Profile Image Section  */}
      <section className="w-[95%] h-[120px] my-2 rounded-xl flex flex-col">
        <div className="flex justify-evenly  h-[50%] 2xl:h-[100%] items-center">
        <input type="file" id="profile-pic" accept="image/*"  onChange={(e) => uploadImage('profileImg', e.target.files)} className="hidden"/>
          <label htmlFor="profile-pic" className="w-[110px] h-[110px] 2xl:w-[200px] 2xl:h-[200px] relative top-[-40px]">
            <img
              src={profileImg  || user}
              alt=""
              className="w-full h-full border-2 border-[#6780af] rounded-full ml-1 object-cover"
            />
          </label>

          {/* Follower Following and Friends Section */}
          <section className=" flex flex-col items-center cursor-pointer" 
          onClick={() => setState({...state, showModal: !showModal, modalName: "Friends"})}>
            <BsPeopleFill alt="" className="w-7 h-7 text-[#7991bd] py-0.5" />
            <span className="font-bold text-[11px] my-1 py-[1px] w-full bg-[#d7deeb] px-4  rounded-md">
              {friendsCount} Friends
            </span>
          </section>

          <section className=" flex flex-col items-center cursor-pointer">
            <FaWalking alt="" className="w-7 h-7 text-[#7991bd] py-0.5" />

            <span className="font-bold text-[11px] my-1 py-[1px] w-full bg-[#d7deeb] px-3 rounded-md" 
            onClick={() => setState({...state, showModal: !showModal,  modalName: 'Followers'})}>
              {followersCount} Followers
            </span>

            <span></span>
          </section>

          <section className=" flex flex-col items-center cursor-pointer"
          onClick={() => setState({...state, showModal: !showModal, modalName: 'Following'})}>
            <IoIosPeople className="w-7 h-7 text-[#7991bd] py-0.5" />
           
            <span className="font-bold text-[11px] my-1 py-[1px] w-full px-4 bg-[#d7deeb] rounded-md">
              {followingCount} Following
            </span>
          </section>
        </div>
        <div className="flex gap-2 items-center  mt-1">
          <span className="font-bold text-2xl flex items-center justify-center  2xl:h-[70px] 2xl:text-[50px]">Joe D</span>
          <span className="text-sm font-medium text-gray-700  2xl:text-[20px] flex items-center justify-center">@Software Engineer</span>
        </div>
      </section>
      {
        showModal && createPortal(<FollowersModal modalName={`Your ${modalName}`} data={friends}/>, document.getElementById('root'))
      }
    </div>
  );
};

export default ProfileImageSection;
