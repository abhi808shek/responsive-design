import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SliderSection = () => {
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
    <div className="w-[100%] h-[250px] flex justify-center bg-[#E4E7EC]">
      <div className="flex flex-col w-[40%]">
        <div className="flex justify-between w-full ">
          <span className="font-bold text-sm">Recent Kicks</span>
          <span className="text-sm">
            <Link>View All</Link>
          </span>
        </div>
        {/* Slider */}
        <div className="flex justify-evenly h-full">
          <Carousel
            responsive={responsive}
            containerClass={`w-full h-[90%]`}
          >
            {[12, 3, 334, 434, 5434, 453].map((elem,index) => (
              <div key={index} className="w-[80%] h-[85%]  rounded-3xl bg-red-400">
                <div className="w-full h-full rounded-3xl bg-green-600">
                  <img
                    src="./images/diwali.jpg"
                    alt=""
                    className="w-full h-full rounded-3xl"
                  />

                  <img
                    src="./images/pizza.jpg"
                    alt=""
                    className="w-10 h-10 relative bottom-12 left-2 rounded-full"
                  />
                </div>
               
              </div>
            ))}
          </Carousel>
         
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
