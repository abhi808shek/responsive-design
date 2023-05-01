import React from "react";
import SearchComponent from "../SearchComponent/SearchComponent";

const SearchKicksPage = () => {
  const data = [
    { title: "Following" },
    { title: "Latest" },
    { title: "Trending" },
  ];
  return (
    <div className={`w-full grid grid-cols-3 lg:h-[87vh] xl:h-[89vh]`}>
      <section className="flex items-center justify-center bg-black">
        <div className="w-[80%] flex flex-col items-center">
          <div className="flex flex-col gap-3">
            {data.map((elem) => (
              <p
                key={elem.title}
                className="text-white cursor-pointer flex items-center justify-center rounded-xl font-semibold"
              >
                {elem.title}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="flex bg-black col-span-2 flex-col">
        <div className=" w-[80%]">
          <div className="flex w-full items-center">
            <img
              src="./images/groups.png"
              alt=""
              className="w-[35px] h-[35px]"
            />
            <SearchComponent width={95} bgColor="#fff" />
            <img
              src="./images/groups.png"
              alt=""
              className="w-[35px] h-[35px]"
            />
          </div>
        </div>


        {/* Reels Sections */}
        <div className=" w-[80%] grid grid-cols-3 gap-3 bg-white p-2 rounded-xl">
         {[1,2,34,5,3,4,5,5,6].map((elem)=>( <div className="cursor-pointer">
            <img src="./images/events.jpg" alt="" className="rounded-xl"/>
          </div>))}
         
        </div>
      </section>
    </div>
  );
};

export default SearchKicksPage;
