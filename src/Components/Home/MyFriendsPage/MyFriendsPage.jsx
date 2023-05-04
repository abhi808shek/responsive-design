import React from "react";
import PostForm from "../PostForm/PostForm";
import FriendList from "../FriendList/FriendList";
import SearchComponent from "../SearchComponent/SearchComponent";
import SelectDropdown from './SelectDropdown'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isEmpty } from "../../Utility/utility";
import { getFriendsList } from "../../../redux/actionCreators/profileAction";
import EmptyComponent from "../../empty component/EmptyComponent";

const MyFriendsPage = () => {
  const dispatch = useDispatch()
  const reducerData = useSelector((state) => {
    return {
      // following: state?.profileReducer?.following,
      // followers: state?.profileReducer?.followers,
      friends: state?.profileReducer?.friends?.data,
    }
  });
  const { following, followers, friends} = reducerData;
  useEffect(() => {
    const profileid = localStorage.getItem('profileid');
    if(isEmpty(friends)){
      dispatch(getFriendsList(profileid))
    }
  }, [])
  console.log(isEmpty(friends), 'CHHHH', friends);
  return (
    <div className="w-[100%] h-full bg-[#E4E7EC] flex justify-center z-10 mt-1">
      <div className="w-[40%] bg-white text-black">
        <section className="flex gap-2 px-2 items-center">
          <span className="md:text-sm md:w-[17%]">View By: </span>
          <SelectDropdown />
      
          <div className="flex sm:w-[60%] lg:w-[58%] xl:w-[70%]">
            <SearchComponent
              width={98}
              bgColor={"#E4E7EC"}
              placeholder={"Search...."}
            />
          </div>
        </section>
        <hr className="" />

        <section className="overflow-auto">
        {
          isEmpty(friends) 
          ? <EmptyComponent message={'There is no friends'}/>
          :
          <div className="px-1 mt-2 flex flex-col gap-2">
            {[1, 2, 3, 4, 55, 56, 67, 7, 4, 43, 43, 33, 2, 2, 2, 2].map((elem,index) => (
              <React.Fragment key={index}>
                <FriendList icon={true} desc={true} />
                <hr />
              </React.Fragment>
            ))}
          </div>
        }
        </section>
      </div>
    </div>
  );
};

export default MyFriendsPage;
