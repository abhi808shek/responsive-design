import React, { useState } from "react";

const HashTagPage = () => {
  const [selectedTab, setSelectedTab] = useState("Roots");

  const [follow, setFollow] = useState(false);
  const onSelectedTab = (option) => {
    setSelectedTab(option);
  };

  const onHandleFollow = ()=>{
    setFollow(!follow);
  }
  return (
    <div className="w-[40%] px-4 mx-auto bg-gray-300 py-2 h-full mt-1">
      <div className="flex px-2 py-2">
        <div className="flex flex-1 items-center gap-3 py-2">
          <h1 className="text-sm font-bold">1 Post</h1>
          <div className="w-[2px] h-[20px] bg-gray-500"></div>
          <h1 className="text-sm font-bold">0 Followers</h1>
        </div>
        {!follow ? (
          <button className="text-blue-400 font-bold" onClick={onHandleFollow}>
            Follow
          </button>
        ) : (
          <button className="text-blue-400 font-bold" onClick={onHandleFollow}>
            UnFollow
          </button>
        )}
      </div>

      <div className="rounded-xl bg-white">
        <div className="flex justify-around py-2">
          {["Roots", "Kicks"]?.map((elem) => (
            <button
              className="text-blue-400 font-bold "
              key={elem}
              style={{
                borderBottom: selectedTab === elem ? "2px blue solid" : "none",
              }}
              onClick={() => onSelectedTab(elem)}
            >
              {elem}
            </button>
          ))}
        </div>

        <div className=" grid grid-cols-4 gap-4 py-2 px-2  mb-2">
          <div className="bg-green-400 rounded-lg lg:h-[100px]"></div>
          {selectedTab === "Roots" &&
            [(1, 2, 3, 4, 5, 6, 7)]?.map(() => (
              <div className="bg-green-400 rounded-lg lg:h-[100px]">
                <img
                  src="./images/events.jpg"
                  alt=""
                  className="h-full rounded-lg w-full"
                />
              </div>
            ))}

          {selectedTab === "Kicks" &&
            [1, 2, 3, 4, 5, 6, 7, 8, 8, 3, 3]?.map(() => (
              <div className="bg-green-400 rounded-lg lg:h-[100px]">
                <img
                  src="./images/joker.jpg"
                  alt=""
                  className="h-full w-full rounded-lg"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HashTagPage;
