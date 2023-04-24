import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

const {defaultRootData} = useSelector((state) => state.eventReducer)
const image = defaultRootData?.data?.postdata?.image.split(" @ ")
  return (
    <Link to="/event" className=" w-[40%] h-[400px] flex justify-center bg-white flex-col items-center rounded-lg mt-[10px] " > 
        <h1 className="text-lg font-bold mb-2 w-[90%]">{defaultRootData?.data?.postdata?.tital}</h1>
        <div className="w-full h-[75%] flex justify-center">
          <img src={image[0]} alt="" className="w-[90%] h-[100%] rounded-lg"/>
        </div>
        <p className="font-bold pb-[2px]">Total Post Made for this event: {defaultRootData?.data?.total_participant_count}</p>
      </Link>
  );
};

export default HeroSection;