import React, { useState } from "react";

const CatergorySection = ({selectedOption,setSelectedOption}) => {
 
  const data = [
    { title: "Post" },
    { title: "Videos" },
    { title: "Photos" },
    { title: "Kicks" },
  ];
  return (
    <div className="xl:w-[95%] lg:w-[96%] bg-white flex justify-around py-2 mt-2 ml-1 rounded-xl">
      {data?.map((elem) => (
        <button
          key={elem.title}
          className={`bg-${
            selectedOption === elem?.title ? "[#7991BD]" : "[#E4E4E4]"
          } w-[22%] rounded-lg text-white text-xs font-bold py-1`}
          onClick={() => setSelectedOption(elem?.title)}
        >
          {elem.title}
        </button>
      ))}
    </div>
  );
};

export default CatergorySection;
