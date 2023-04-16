import React from "react";

const ProfileImageSection = () => {
  return (
    <div className="lg:w-[80%] xl:w-[70%] lg:h-[320px] xl:h-[320px] 2xl:h-[590px] bg-white rounded-xl flex flex-col items-center my-3">
      {/*Cover Image Section */}

      <section className="w-[95%] h-[55%] rounded-xl flex justify-center mt-3">
        <img
          src="./images/events.jpg"
          alt=""
          className="w-full h-full rounded-xl"
        />
      </section>

      {/* Profile Image Section  */}
      <section className="w-[95%] h-[120px] rounded-xl flex flex-col">
        <div className="flex justify-evenly  h-[50%] 2xl:h-[100%] items-center">
          <div className="w-[110px] h-[110px] 2xl:w-[200px] 2xl:h-[200px] relative top-[-40px]">
            <img
              src="./images/pizza.jpg "
              alt=""
              className="w-full h-full rounded-full ml-1"
            />
          </div>

          {/* Follower Following and Friends Section */}
          <section className=" flex flex-col items-center">
            <img src="./images/groups.png" alt="" className="w-[30px]" />
            <span className="font-bold text-[11px] py-[1px] w-full bg-blue-400 px-4  rounded-md">
              5 Friends
            </span>
          </section>

          <section className=" flex flex-col items-center">
            <img src="./images/groups.png" alt="" className="w-[30px]" />

            <span className="font-bold text-[11px] py-[1px] w-full bg-blue-400 px-3 rounded-md">
              2 Followers
            </span>

            <span></span>
          </section>

          <section className=" flex flex-col items-center">
            <img src="./images/groups.png" alt="" className="w-[30px]" />
           
            <span className="font-bold text-[11px] py-[1px] w-full px-4 bg-blue-400 rounded-md">
              3 Following
            </span>
          </section>
        </div>
        <div className="flex gap-2 items-center justify-center mt-1 w-[65%]">
          <span className="font-bold text-2xl flex items-center justify-center  2xl:h-[70px] 2xl:text-[50px]">Joe D</span>
          <span className="text-sm font-bold  2xl:text-[30px] flex items-center justify-center  2xl:h-[70px]">@Software Engineer</span>
        </div>
      </section>
    </div>
  );
};

export default ProfileImageSection;
