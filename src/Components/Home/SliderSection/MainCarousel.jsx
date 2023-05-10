import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageIcon from "@mui/icons-material/Image";
import deleteIcon from "../../../assets/images/delete.png";

export default function MainCarousel() {
  const [ImageFile, setImageFile] = useState([]);
  const [VideoFile, setVideoFile] = useState([]);
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

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    console.log("fileListwwwwwwwww", fileList);

    const fileArray = Array.from(fileList);
    fileArray.forEach((element) => {
      if (element?.type?.includes("image")) {
        console.log("eeeeeeeeeeeeeeee", element);
        setImageFile((ImageFile) => [...ImageFile, element]);
      } else {
        setVideoFile((VideoFile) => [...VideoFile, element]);
      }
    });
    console.log("fileArray", fileArray);
  };

  return (
    <>
      <div className="float-right ">
        <img
          src={deleteIcon}
          alt=""
          className="z-10 w-[30px] h-[30px] cursor-pointer"
          onClick={() => {
            setImageFile([]);
            setVideoFile([]);
          }}
        />
      </div>
      <div className="mt-2 items-center sm:h-[50vh] text-center sm:w-[88%] lg:w-[95%]">
        <Carousel
          responsive={responsive}
          showDots={true}
          className=" lg:w-[97%]"
        >
          {ImageFile?.length || VideoFile.length ? (
            [...VideoFile, ...ImageFile].map((elem) => (
              <div className="flex h-full sm:w-[100%] lg:w-full justify-center bg-red-500 py-2">
                <div className=" sm:h-[45vh] sm:w-[90%] lg:w-[90%] flex flex-col border border-gray-400 rounded-lg px-2 mb-4 self-center">
                  {elem.type.includes("image") ? (
                    <img
                      src={URL.createObjectURL(elem)}
                      alt="image"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <video
                      src={URL.createObjectURL(elem)}
                      alt="image"
                      className="h-full w-full object-contain"
                      autoPlay
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-full sm:w-[100%] lg:w-full justify-center py-2">
              <div className="mb-4 sm:w-full sm:h-[45vh] lg:h-[50vh] flex justify-center items-center ">
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
                  <h1 className="font-semibold">Add Image/Videos</h1>
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
