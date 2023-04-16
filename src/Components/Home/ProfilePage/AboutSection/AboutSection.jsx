import React from "react";

const AboutSection = () => {
  return (
    <div className="lg:w-[80%] xl:w-[70%] bg-white rounded-xl flex flex-col items-center ">
      {/*Head Section */}
      <section className="flex w-full justify-between my-2 px-4">
        <strong className="text-lg font-bold">About</strong>
        <button className="text-md font-bold rounded-lg flex items-center text-white bg-[#6780AF] px-[10px] text-[12px]">
          Edit Profile
        </button>
      </section>
      <div className="w-[93%] h-0.5 bg-gray-500"></div>

      {/* Details Section */}
      <section className="flex flex-col w-[90%] my-4 gap-2">
        <div className="flex items-center gap-2 my-2">
          <img src="./images/groups.png" alt="" className="w-[30px]" />
          <p className="text-sm">
            Influenced by <strong>Kathy S</strong>
          </p>
        </div>

        {/* Work Section */}
        <div className="flex items-center gap-2 ">
          <img src="./images/groups.png" alt="" className="w-[30px]" />
           <p className="text-sm">
            Works at <strong>Unite INC</strong> as <strong>Software Developer</strong>
          </p>
        </div>

        {/* Email Section */}
        <div className="flex items-center gap-2">
          <img src="./images/groups.png" alt="" className="w-[30px]" />
           <p className="text-sm"><strong>joe@gmail.com</strong></p>
        </div>

        {/* Phone Number Section */}
        <div className="flex items-center gap-2">
          <img src="./images/groups.png" alt="" className="w-[30px]" />
           <p className="text-sm"><strong>+1 9123456780</strong></p>
        </div>

        {/* DOB Section */}
        <div className="flex items-center gap-2">
          <img src="./images/groups.png" alt="" className="w-[30px]" />
           <p className="text-sm"><strong>31 August 1995</strong></p>
        </div>

        {/* Gender Section */}
        <div className="flex items-center gap-2">
          <img src="./images/groups.png" alt="" className="w-[30px]" />
           <p className="text-sm"><strong>Male</strong></p>
        </div>

        {/* Location Section */}
        <div className="flex items-center gap-2">
          <img src="./images/groups.png" alt="" className="w-[30px]" />
           <p className="text-sm"><strong>Aurora valley, Illinois, Chicago, USA.</strong></p>
        </div>

        {/* Scholling Section */}
        <div className="flex items-center gap-2">
          <img src="./images/groups.png" alt="" className="w-[30px]" />
           <p className="text-sm">
            Completed schooling from
            <strong>St. John's school, Aurora, Chicago</strong> in the year
            <strong>2010</strong>.
          </p>
        </div>

        {/* Graduation Section */}
        <div className="flex items-center gap-4">
          <img src="./images/groups.png" alt="" className="w-[30px]" />
           <p className="text-sm">Add Graduation Details</p>
        </div>

        {/* Graduation Section */}
        <div className="flex items-center gap-4">
          <img src="./images/groups.png" alt="" className="w-[30px]" />
           <p className="text-sm">Add Post Graduation Details</p>
        </div>
      </section>
      <p className="mb-4"><strong>Uynited</strong> on <strong>February 2022</strong></p>
    </div>
  );
};

export default AboutSection;
