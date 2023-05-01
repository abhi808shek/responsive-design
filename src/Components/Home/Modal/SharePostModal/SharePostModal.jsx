import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Portals from "../../../Portals/Portals";
import ShareWithModal from "../ShareWithModal/ShareWithModal";

const SharePostModal = ({ setShowShareModal,showShareModal,shareWith, onClickOnNext }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const onCloseSharePostModal = () => {
    console.log("CLOSE MODAL");
    // setShowShareModal({...showShareModal,shareModal:false})
  };
console.log(shareWith, '[[[[[[[[[[[[[[');

  return (
    <>

      <div className="w-[30%] bg-white flex-col flex items-center rounded-xl mt-[65px]">
        {/* Top Section */}
        <section className="flex w-full justify-between my-2 px-3">
          <span className="text-md font-bold">Custom Group</span>
          <button
            className="text-md font-semibold rounded-lg flex items-center text-white bg-[#6780AF] px-[30px] py-0.5"
            onClick={onClickOnNext}
          >
            Next
          </button>
        </section>
        <div className="w-[95%] h-0.5 bg-gray-500"></div>

        {/* Message Section */}
        <section className="flex w-full justify-between px-2 lg:py-1 xl:py-2 lg:h-[90px] xl:h-[120px]">
          <textarea
            type="text"
            className="w-[98%] lg:h-[80px] xl:h-[100px] outline-none pl-2 text-black text-xs rounded-lg  lg:pt-1 xl:pt-2 bg-gray-300"
            placeholder="Write something..."
          />
        </section>

        {/* Content Section */}
        <section className="flex w-full justify-between px-2">
          <p className="text-xs text-gray-500 text-semibold">
            The guitar is classified as a chordophone – meaning the sound is
            produced by a vibrating string stretched between two fixed points.
            Just loved to play it.
          </p>
        </section>
        <hr />
        <div className="w-[95%] h-[1px] bg-gray-500 my-2"></div>

        {/* Image Slider Section */}
        <section className="flex w-full justify-between px-2">
          <Carousel
            responsive={responsive}
            containerClass={`w-full h-full flex items-center`}
            itemClass="carousel-item-padding-40-px"
            showDots={true}
            arrows={false}
          >
            {[4, 3, 2, 1.3, 4].map((elem, index) => (
              <div
                key={index}
                className="rounded-lg h-[90%] border-2 border-gray-500 relative flex items-center justify-center"
              >
                <img
                  src="./images/events.jpg"
                  alt=""
                  className="w-[95%] h-[90%] rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </section>

        {/* Button Section */}

        <section className="w-full flex justify-center my-2">
          <button
            className="w-[95%] text-[#6780AF] border-[1px] border-[#6780AF] text-sm font-semibold py-0.5 rounded-md"
            onClick={onCloseSharePostModal}
          >
            Cancel
          </button>
        </section>
      </div>
    </>
  );
};

export default SharePostModal;
