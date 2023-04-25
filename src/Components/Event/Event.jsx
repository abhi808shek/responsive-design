import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import bg1 from "../../Assets/Images/bg1.jpg";
import bg2 from "../../Assets/Images/bg2.jpg";
import bg3 from "../../Assets/Images/bg3.jpg";
import ButtonComponent from "./ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import Participate from "./Participate";
import EventPostCard from "./EventPostCard";
import {
  defaultEventScreen,
  getAllEventPost,
  getAllTrendingPost,
} from "../../redux/actionCreators/eventActionCreator";

const Event = () => {
  const btnData = [
    { name: "Post" },
    { name: "Trending" },
    { name: "Participate" },
  ];
  useEffect(() => {
    dispatch(defaultEventScreen(defaultRootData?.data?.postdata?.id));
    dispatch(getAllEventPost(defaultRootData?.data?.postdata?.profileid));
    dispatch(getAllTrendingPost(defaultRootData?.data?.postdata?.profileid))
  }, []);
  const dispatch = useDispatch();
  const { defaultEventData, defaultRootData, allEventsPost,allTrendingPost } = useSelector(
    (state) => state.eventReducer
  );
  console.log("----------defaultEventData", defaultEventData?.data);
  const image = defaultEventData?.data?.image.split(" @ ");
  console.log("imagqqqqqqqqqqqqqe", image);
  const { posts } = useSelector((state) => state.postReducer);
  const { selectedIndex } = useSelector((state) => state.selectedIndexReducer);

  console.log("allEventsPost", allEventsPost);
  return (
    <div className="w-full bg-[#EAE9E7] flex flex-col justify-center items-center">
      <div className="header h-16 w-[40%] mt-2 rounded-md flex justify-center items-center text-lg text-white font-bold bg-[#7991BD]">
        <h1>{defaultEventData?.data?.tital}</h1>
      </div>
      <div className="slider w-[40%] bg-[#EAE9E7] mt-2">
        <Carousel>
          {image?.map((img) => (
            <img
              key={img}
              src={img}
              alt=""
              className="w-[100%] h-[70vh] object-cover rounded-[20px]"
            />
          ))}
        </Carousel>
      </div>
      <div className="flex justify-center gap-2 mt-5 h-16 items-center w-[40%] rounded-lg bg-white">
        {btnData.map((elem, index) => (
          <ButtonComponent key={index} name={elem.name} index={index} />
        ))}
      </div>
      <div className="w-[40%] flex flex-col items-center justify-center gap-4 mt-2">
        {selectedIndex === 0 &&
          allEventsPost?.data?.data?.map((post, index) => (
            <EventPostCard key={index} item={post} />
          ))}

        {selectedIndex === 1 &&
          allTrendingPost?.data?.data?.map((post, index) => (
            <EventPostCard key={index} item={post} />
          ))}
        {selectedIndex === 2 && <Participate />}
      </div>
    </div>
  );
};

export default Event;
