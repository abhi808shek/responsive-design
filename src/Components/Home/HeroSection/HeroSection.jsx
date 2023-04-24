import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const eventData = useSelector((select) => select.eventReducer)
  console.log(eventData);
  return (
    <Link to="/event" className=" w-[40%] h-[400px] flex justify-evenly bg-white flex-col items-center rounded-lg mt-[10px] ">
        <h1 className="text-md font-semibold w-[90%]">Indian Traditional Dress Contest</h1>
        <div className="w-full h-[75%] flex justify-center">
          <img src="./images/events.jpg" alt="" className="w-[90%] h-[100%] rounded-lg"/>
        </div>
        <p className="font-semibold ">Total Post Made for this event: 34</p>
      </Link>
  );
};

export default HeroSection;
