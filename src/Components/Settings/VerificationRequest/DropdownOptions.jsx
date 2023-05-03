import React, { useState } from "react";

const DropdownOptions = ({ elem }) => {
    const [radioBtn,setRadioBtn] = useState(null)
console.log("Radkdkfo",radioBtn);
  return (
    <div className="w-full mt-2 px-2 flex flex-col gap-2" key={elem?.name}>
      <h1 className="text-sm font-bold ">{elem?.title}</h1>
      <div className="flex justify-evenly">
        {elem?.options?.map((item) => (
          <label
            htmlFor=""
            className="text-xs py-1 flex gap-1"
            key={item?.value}
          >
            <input
              type="radio"
              name={elem?.name}
              id=""
              className="cursor-pointer"
              checked={radioBtn === item?.value}
              onChange={(event)=>setRadioBtn(item?.value)}
            />
            {item?.title}
          </label>
        ))}
      </div>
    </div>
  );
};

export default DropdownOptions;
