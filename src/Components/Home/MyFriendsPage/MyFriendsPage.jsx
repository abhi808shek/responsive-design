import React, { useState } from "react";
import PostForm from "../PostForm/PostForm";
import FriendList from "../FriendList/FriendList";
import SearchComponent from "../SearchComponent/SearchComponent";
import SelectDropdown from './SelectDropdown'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isEmpty } from "../../Utility/utility";
// import { getFriendsList } from "../../../redux/actionCreators/profileAction";
import EmptyComponent from "../../empty component/EmptyComponent";
import { getFriendsList } from "../../../redux/actionCreators/friendsAction";
import Locations from "../../googlemap/Locations";
import Dropdown from "../../Login/Content/Modal/Dropdown";
import { useMemo } from "react";

const MyFriendsPage = () => {
  const isPersonal = true;
  const dispatch = useDispatch();

  const reducerData = useSelector((state) => {
    return {
      // following: state?.profileReducer?.following,
      // followers: state?.profileReducer?.followers,
      friends: state?.profileReducer?.friends?.data,
    }
  });
  const { following, followers, friends} = reducerData;
  const [state, setState] = useState({});
  const { relation = {name: 'All', key: 'all'} } = state;
  useEffect(() => {
    const profileid = JSON.parse(localStorage.getItem('profile'))?.id;
    if(isEmpty(friends)){
      dispatch(getFriendsList(profileid))
    }
  }, [])
  console.log(isEmpty(friends), 'CHHHH', friends);
  const option = useMemo(() => {
    const forPersonalAcc = [
      { name: "All", key: "all" },
      { name: "Friends", key: "friends" },
      { name: "Relatives", key: "relatives" },
      { name: "Classmates", key: "classmates" },
      { name: "Officemates", key: "officemates" },
    ];
    const forOrgAcc = [
      { name: "All", key: "all" },
      { name: "Friends", key: "friends" },
    ];
    return {
      filterOptions: isPersonal ? forPersonalAcc : forOrgAcc
    }
  }, []);

  const handleChange = (name, value) => {
    setState({...state, [name]: value})
  }
  const {filterOptions}= option 
  return (
    <div className="w-[100%] h-full bg-[#E4E7EC] flex justify-center z-10 mt-1">
      <div className="w-[95%] sm:w-[50%] lg:w-[40%] bg-white text-black mt-1">
        <section className="flex gap-2 px-2 items-center flex-col-reverse lg:flex-row ">
         <div className="w-full flex">
          <Dropdown
            label='View by'
            options={filterOptions}
            name={'All'}
            keyName={'name'}
            handleChange={(value) =>handleChange('relation', value)}
            selectedValue={relation}
          />
         </div>
      
          <div className="flex w-[100%] lg:w-[58%] xl:w-[70%]">
            <SearchComponent
              width={98}
              bgColor={"#E4E7EC"}
              placeholder={"Search...."}
            />
          </div>
        </section>
        {/* <hr className="" /> */}

        <section className="">
        {
          isEmpty(friends) 
          ? <EmptyComponent message={`No ${relation?.name === 'All' ? "Friends" : relation?.name}`}/>
          :
          [1,2,3,4]?.map((elem,index) => (
              <React.Fragment key={index}>
                <FriendList icon={true} desc={true} data={elem} />
                {/* <hr /> */}
              </React.Fragment>
            ))
        }
        </section>
        {/* <Locations/> */}
      </div>
    </div>
  );
};

export default MyFriendsPage;
