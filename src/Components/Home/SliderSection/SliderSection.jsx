import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const SliderSection = () => {

  const firstName = 'Sharma';
  const lastName = 'G';

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
      <div className="flex flex-col w-[40%] h-[60%] relative">
        <div className="flex justify-between w-full py-2">
          <span className="font-bold text-sm">Recent Kicks</span>
          <span className="text-sm text-[#788eb7] font-medium">
            <Link to="/kicks">View All</Link>
          </span>
        </div>
        {/* Slider */}
          <Carousel            
            responsive={responsive}
            arrows={true}
            containerClass={`w-full h-[210px] z-[1]`}
          >
            {[12, 3, 334, 434, 5434, 453].map((elem,index) => (
              <div key={index} className="w-[91%] mt-12 my-2 h-[70%] rounded-3xl">
                  <img
                    src="./images/diwali.jpg"
                    alt=""
                    className=" rounded-3xl"
                  />
                  {/* title name tag added */}
                   <img
                    src="./images/pizza.jpg"
                    alt=""
                    className="w-9 h-9 relative bottom-11 left-2 rounded-full"
                   />
                   <span className='absolute text-white font-medium text-[13px] bottom-[58px] left-[50px]'>
                   {/* {firstName.length < 5 ? firstName : firstName.substring(0,4)}.. {lastName} */}
                   Joe Doe
                   </span>                  
                </div>
               
       
            ))}
          </Carousel>
         
      </div>
  );
};

export default SliderSection;
