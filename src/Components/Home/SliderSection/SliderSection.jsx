import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getLatestKicks } from "../../../redux/actionCreators/kicksActionCreator";

const SliderSection = () => {
  // const { kicksList } = useSelector((state) => state.rootsReducer);
  const dispatch = useDispatch()
  const reducerData = useSelector((state) => {
    return {
      kicksList: state.kicksReducer.latestKicks,
      profile: state.profileReducer.profile
    }
  })
  const { kicksList = { content: []}, profile}  = reducerData;

  useEffect(() => {
 
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="flex flex-col w-[95%] sm:w-[50%]  lg:w-[40%] relative">
      <div className="flex justify-between w-full pt-2">
        <span className="font-bold text-sm">Recent Kicks</span>
        <span className="text-sm text-[#788eb7] font-medium">
          <Link to="/veiwallkicks">View All</Link>
        </span>
      </div>
      {/* Slider */}
      {/* <Carousel
        responsive={responsive}
        arrows={true}
       containerClass={`w-full h-[210px] z-[1]`}
      >
        {kicksList?.map((item) =>
          item?.content?.map((data) =>(
            <div className="w-[91%] mt-5 mb-2 h-[160px] rounded-3xl ml-1">
            <video
              src={data?.video}
              alt=""
               className=" rounded-3xl h-full"
            />
            title name tag added
             <img
              src={data?.image}
              alt=""
               className="w-9 h-9 absolute  bottom-[20px] left-2 rounded-full "
             />
               <span className="absolute text-white font-medium text-[13px] bottom-[28px] left-[50px]">
             {firstName.length < 5 ? firstName : firstName.substring(0,4)}.. {lastName}
            {data?.profile?.fname}
             </span>
          </div>
          ))
        )}
      </Carousel> */}

      <Carousel
        responsive={responsive}
        arrows={true}
        containerClass={`w-full h-[200px] z-[1]`}
      >
          {kicksList?.content?.map((data) =>{
            const { profile, video} = data

            return(
            <div className="w-[91%] mt-5 mb-2 h-[160px] bg-black rounded-3xl ml-1">
              <Link to="/kicks">
              <div className="h-full">
                <video height={'100%'} className="h-full" width={'200px'} src={video} muted></video>
              </div>
              {/* title name tag added */}
              <img
                src={profile?.pimage}
                alt=""
                className="w-9 h-9 absolute  bottom-[20px] left-2 rounded-full "
              />
              <span className="absolute text-white font-medium text-[13px] bottom-[28px] left-[50px]">
                {/* {firstName.length < 5 ? firstName : firstName.substring(0,4)}.. {lastName} */}
                {`${profile?.fname} ${profile?.lname}`}
              </span>
        </Link>
            </div>
          )
          }
          ) || []
          }
      </Carousel>
    </div>
  );
};

export default SliderSection;
