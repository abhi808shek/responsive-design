import React from "react";

const LikedProfile = ({data}) => {
  const {profile} = data;
  console.log(data);
  return (
    <div className="w-full h-[55px] flex items-center ">
      <div className=" h-[50px] flex flex-1 items-center gap-2">
        <img
          src={profile?.pimage}
          alt=""
          className="w-[45px] h-[45px] rounded-full bg-yello-500"
        />

        <span className="font-bold text-sm">{`${profile?.fname} ${profile?.lname}`}</span>
      </div>

      <div className=" h-[50px] flex items-center cursor-pointer">
        <button className="px-5 text-blue-400 bg-white border-[1px] border-blue-400 font-bold py-1 text-xs rounded-lg">
         ""
        </button>
      </div>
    </div>
  );
};

export default LikedProfile;
