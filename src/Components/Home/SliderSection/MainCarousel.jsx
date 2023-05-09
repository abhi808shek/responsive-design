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
          onClick={() => {setImageFile([])
          setVideoFile([]);}}
        />
      </div>
      <div className="mt-2 items-center text-center w-[360px]">
        <Carousel
          responsive={responsive}
          showDots={true}
          className="lg:ml[10px] xl:ml-10 w-[97%]"
        >
         
          {ImageFile?.length || VideoFile.length ? (
            [...VideoFile, ...ImageFile].map((elem) => (
              <div className="flex h-full">
                <div className="w-full h-[50vh] flex flex-col items-center justify-center border border-gray-400 rounded-lg">
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
            <div className="flex h-full">
              <div className="mb-4 w-full h-[50vh] flex justify-center items-center ">
                <label
                  className="font-medium mb-1 w-[90%] h-[45vh] flex flex-col items-center justify-center border border-gray-400 rounded-lg "
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
