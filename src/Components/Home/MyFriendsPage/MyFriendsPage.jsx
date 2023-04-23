import React from "react";
import PostForm from "../PostForm/PostForm";
import FriendList from "../FriendList/FriendList";
import SearchComponent from "../SearchComponent/SearchComponent";
import SelectDropdown from './SelectDropdown'

const MyFriendsPage = () => {
  return (
    <div className="w-[100%] h-[538px] flex justify-center items-center z-10 mt-1">
      <div className="w-[40%] h-[538px] bg-white text-black">
        <section className="flex gap-2 px-2 items-center">
          <span className="md:text-sm md:w-[17%]">View By: </span>
          {/*<div className="">
            <select
              name=""
              id=""
              className="border-[1px] rounded-md outline-none px-1 h-9 border-gray-300 cursor-pointer text-gray-600"
            >
              <option value="Friends" default>Friends</option>
              <option value="group" className='h-10'>Create New Group</option>              
              <option value="Relative">Relative</option>
              <option value="Classmates">Classmates</option>
              <option value="Officemates">Officemates</option>
              <option value="Party">Party</option>
              <option value="Organization">Organization</option>
            </select>
          </div>*/}

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

        <section className="">
          <div className="h-[478px] px-1 mt-2 overflow-y-scroll flex flex-col gap-2">
            {[1, 2, 3, 4, 55, 56, 67, 7, 4, 43, 43, 33, 2, 2, 2, 2].map(() => (
              <>
                <FriendList icon={true} desc={true} />
                <hr />
              </>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyFriendsPage;
