import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageIcon from "@mui/icons-material/Image";

export default function MainCarousel() {
  const [file, setFile] = useState();
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
      <div className="float-right ">
        <img
          src="./images/groups.png"
          alt=""
          className="z-10 w-[30px] h-[30px] cursor-pointer"
        />
      </div>
      <div className="mt-2 ml-3 items-center text-center w-[360px]">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          className="lg:ml[10px] xl:ml-16 w-[97%]"
        >
          <div className="flex h-full">
            {!file && (
              <div className="mb-4 w-full h-[50vh] flex justify-center items-center ">
                <label
                  className="font-medium mb-1 w-[90%] h-[40vh] flex flex-col items-center justify-center border border-gray-400 rounded-lg "
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
                  <h1 className="font-semibold">Add Image</h1>
                </label>
                <input
                  className="border border-gray-400 rounded hidden absolute"
                  type="file"
                  id="image"
                  name="file"
                  accept="image/*"
                  // onChange={handleImageChange}
                  required
                />
              </div>
            )}
          </div>
          
        </Carousel>
        {/* <div className="flex justify-around my-3 items-center text-center xl:ml-20">
          <div className="ratio">A</div>
          <div className="filter">B</div>
          <div className="effect">C</div>
          <div className="adj">D</div>
        </div> */}
        {/* <div className="lg:w-[100%] xl:w-[120%] rounded lg:[90px] xl:h-full border-gray-400 border-2 flex justify-around items-center text-center">
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
        </div> */}
      </div>
    </>
  );
}
