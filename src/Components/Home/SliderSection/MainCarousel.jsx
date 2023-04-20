import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function MainCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 40,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="float-right "><img src="./images/groups.png" alt="" className="z-10 w-[30px] h-[30px] cursor-pointer"/></div>
      <div className="mt-2 ml-3 items-center text-center w-[360px]">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          className="lg:ml[10px] xl:ml-16 w-[97%]"
        >
        {[1,2,3,4].map((elem,index)=>(  <div key={index}>
            <img
              src="./images/events.jpg"
              alt=""
              className="lg:h-[40vh] xl:h-[50vh] rounded-lg lg:ml-[20px] xl:ml-0"
            />
          </div>))}
      
        </Carousel>
        <div className="flex justify-around my-3 items-center text-center xl:ml-20">
          <div className="ratio">A</div>
          <div className="filter">B</div>
          <div className="effect">C</div>
          <div className="adj">D</div>
        </div>
        <div className="lg:w-[100%] xl:w-[120%] rounded lg:[90px] xl:h-full border-gray-400 border-2 flex justify-around items-center text-center">
          <div className=" w-[20%] h-20 p-2 rounded border-gray-400 border-2 m-3 flex items-center justify-center">
            Original
          </div>
          <div className=" w-[20%] h-16 rounded border-gray-400 border-2 m-3 flex items-center justify-center bg-gray-300">
            <span>1:1</span>{" "}
          </div>
          <div className=" w-[10%] h-16 rounded border-gray-400 border-2 m-3 flex items-center justify-center">
            4:6
          </div>
          <div className=" w-[20%] h-10 rounded border-gray-400 border-2 m-3 flex items-center justify-center">
            16:9
          </div>
        </div>
      </div>
    </>
  );
}
