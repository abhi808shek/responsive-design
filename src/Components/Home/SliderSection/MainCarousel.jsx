import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageIcon from "@mui/icons-material/Image";
import deleteIcon from "../../../assets/images/delete.png";

export default function MainCarousel({ handleImageChange, ImageFile, VideoFile, isEdit}) {
console.log(ImageFile, VideoFile, "PPPPPPPPP");
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
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <>
      <div className="float-right ">
        <img
          src={deleteIcon}
          alt=""
          className="z-10 w-[30px] h-[30px] cursor-pointer"
          onClick={() => {
            handleImageChange("delete");
          }}
        />
      </div>
      <div className="mt-2 items-center sm:h-[60vh] text-center  sm:w-[88%] lg:w-[95%]">
        <Carousel
          responsive={responsive}
          showDots={true}
          className=" lg:w-[97%]"
        >
          {ImageFile?.length || VideoFile.length ? (
            [...VideoFile, ...ImageFile]?.map((elem) => (
              <div className="flex h-full justify-center  py-2">
                <div className=" sm:h-[45vh] w-[100%] sm:w-[90%] lg:w-[90%] flex flex-col border border-gray-400 rounded-lg px-2 mb-4 justify-center items-center">
                  {elem?.type?.includes("image") || isEdit ? (
                    <img
                      src={elem?.type?.includes("image") ? URL.createObjectURL(elem) : elem}
                      alt="image"
                      className="h-[25vh] w-[90%]  sm:h-[45vh] sm:w-[90%] lg:w-[90%] object-contain"
                    />
                  ) : (
                    <video
                      src={elem?.type?.includes("video") ? URL.createObjectURL(elem) : elem}
                      alt="image"
                      className="h-[25vh] sm:h-[45vh] sm:w-[90%] lg:w-[90%] object-contain"
                      autoPlay
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-full sm:w-[100%] lg:w-full justify-center py-2">
              <div className="mb-4 w-[90%] sm:w-full sm:h-[45vh] lg:h-[50vh] flex justify-center items-center ">
                <label
                  className="font-medium mb-1 sm:w-[80%] lg:w-[90%] sm:h-[32vh]  lg:h-[45vh] flex flex-col items-center justify-center border border-gray-400 rounded-lg "
                  htmlFor="image"
                >
                  <ImageIcon
                    style={{
                      height: "100px",
                      width: "100px",
                      backgroundColor: "",
                    }}
                    className="text-[#7991BD]"
                  />
                  <h1 className="font-semibold text-[10px] sm:text-sm">
                    Add Image/Videos
                  </h1>
                </label>
                <input
                  className="border border-gray-400 rounded hidden absolute"
                  type="file"
                  id="image"
                  name="file"
                  accept="image/*, video/*"
                  onChange={handleImageChange}
                  required
                  multiple
                />
              </div>
            </div>
          )}
        </Carousel>
      </div>
    </>
  );
}
