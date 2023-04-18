import React from "react";
import PostForm from "../PostForm/PostForm";
import FriendList from "../FriendList/FriendList";
import SearchComponent from "../SearchComponent/SearchComponent";

const MyFriendsPage = () => {
  return (
    <div className="w-[100%] flex justify-center items-center z-10 mt-1">
      <div className="w-[40%] h-[538px] bg-white ">
        <section className="flex gap-2 px-2 items-center">
          <span className="md:text-sm md:w-[12%]">View By: </span>
          <div className="">
            <select
              name=""
              id=""
              className="border-2 border-gray-500 cursor-pointer text-xs"
            >
              <option value="group">Create New Group</option>
              <option value="Friends" default>
                Friends
              </option>
              <option value="Relative">Relative</option>
              <option value="Classmates">Classmates</option>
              <option value="Officemates">Officemates</option>
              <option value="Party">Party</option>
              <option value="Organization">Organization</option>
            </select>
          </div>
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
          <div className="h-[478px] overflow-y-scroll flex flex-col gap-4">
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
