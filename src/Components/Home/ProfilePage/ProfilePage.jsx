import React, { useState } from "react";
import ProfileImageSection from "./ProfileImageSection/ProfileImageSection";
import CategorySection from "../CategorySection/CategorySection";
import PostForm from "../PostForm/PostForm";
import PostContent from "../PostContetnt/PostContent";
import AboutSection from "./AboutSection/AboutSection";
import PrivatePage from "./PrivatePage/PrivatePage";
import GridBoxes from "../GridBoxes/GridBoxes";
import SearchComponent from "../SearchComponent/SearchComponent";

const ProfilePage = () => {
  const [selectedOption, setSelectedOption] = useState("Post");
  return (
    <div className="w-full flex justify-end bg-[#E4E7EC] h-[1000px] ">
      <section className="flex lg:w-[50%] 2xl:h-[1200px] flex-col mt-2 items-end">
        <ProfileImageSection />

        {/* About Section */}
        <AboutSection />
      </section>
      <section className="flex w-[50%] pr-[8px] flex-col">
        {/* Category Section */}
        <section className="w-[98%] mt-3 flex items-center justify-center">
          <CategorySection selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        </section>
        
        {/* Post Form Section */}
        <section className="w-full pl-2">
          <PostForm width={98} bgColor={"#E4E7EC"}/>
        </section>

        {/* All Post Section */}
        <section className="w-full">
          <PostContent width={100}/>
        </section>

        {/* Private Page Section */}
        {/* <section className="w-full mt-3 h-full">
          <PrivatePage />
        </section> */}



        <section className="w-full mt-3 h-full rounded-xl">
          {/* <GridBoxes selectedOption={selectedOption}/> */}
        </section>
      </section>
    </div>
  );
};

export default ProfilePage;
