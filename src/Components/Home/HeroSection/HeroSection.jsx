import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const eventData = useSelector((select) => select.eventReducer)
  console.log(eventData);
  return (
    <Link to="/event" className=" w-[40%] h-[400px] flex justify-center bg-white flex-col items-center rounded-lg mt-[10px] ">
        <h1 className="text-lg font-bold mb-2 w-[90%]">Indian Traditional Dress Contest</h1>
        <div className="w-full h-[75%] flex justify-center">
          <img src="./images/events.jpg" alt="" className="w-[90%] h-[100%] rounded-lg"/>
        </div>
        <p className="font-bold pb-[2px]">Total Post Made for this event: 34</p>
      </Link>
  );
};

export default HeroSection;
