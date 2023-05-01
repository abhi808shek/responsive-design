import React from "react";
import { GrLocation } from "react-icons/gr";

const OriginalPostModal = ({ handleCloseModal }) => {
  

  return (
    // Original Post Section
    <div className="flex w-[80%] bg-white justify-around pt-2 mt-[60px] rounded-xl">
      <div className="w-[45%] border-3 border-gray-500 ">
        <h1 className="text-md font-bold bg-white ">Original Post</h1>
        <div className="bg-[#E4E7EC] mt-3 pt-3 pb-3 rounded-xl">
          <section className="w-full flex items-center pl-3">
            <div className="flex w-[50px] h-[50px]">
              <img
                src="./images/events.jpg"
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>

            <div className="flex flex-col flex-1 justify-center ml-2">
              <div className="flex items-start">
                <span className="text-sm ml-1 font-bold"> Joe D</span>
                <span className="text-xs ml-2 font-semibold mt-0.5">
                  @Software Developer
                </span>
              </div>

              <div className="flex items-center gap-1">
                {/* <HiUserGroup size={16} /> */}
                <img src="./images/groups.png" alt="" className="w-[12px]" />

                <span className="text-xs font-semibold">1 year ago</span>
                <GrLocation size={10} />
                {/* <img src="" alt="" /> */}
                <span className="text-xs font-semibold"> Chicago</span>
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col items-center mt-2 px-2">
            <div className=" w-full h-full pl-3">
              <p className="text-[13px] font-[400] text-gray-500">
                The guitar is classified as a chordophone – meaning the sound is
                produced by a vibrating string stretched between two fixed
                points. Just loved to play it.
              </p>
            </div>

            <div className="m-3 mb-0 w-full h-[60%] rounded-xl">
              <img
                src="./images/events.jpg"
                alt=""
                className="w-full h-[270px] rounded-xl"
              />
            </div>
          </section>
        </div>
      </div>
      <div className="w-[.5%] bg-gray-500 border-2"></div>

      {/* Edit And Close Section */}

      <div className="w-[45%] h-[500px] overflow-y-scroll">
        <div className="flex justify-between  ">
          <span className="text-md font-bold">Edit History</span>
          <button className="text-md font-bold text-blue-400" onClick={handleCloseModal}>Close</button>
        </div>

        {[1, 2, 34, 56, 323, 2323, 434].map((lem,index) => (
          <div className="bg-[#E4E7EC] flex flex-col rounded-xl gap-2 mt-[10px] pt-[6px]" key={index}>
            <section className="w-full flex items-center ml-3 justify-around">
              <div className="flex w-[50px] h-[50px]">
                <img
                  src="./images/events.jpg"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>

              <div className="flex flex-col flex-1 justify-center ml-2">
                <div className="flex items-start">
                  <span className="text-sm ml-1 font-bold"> Joe D</span>
                  <span className="text-xs ml-2 font-semibold mt-0.5">
                    @Software Developer
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <img src="./images/groups.png" alt="" className="w-[12px]" />

                  <span className="text-xs font-semibold">1 year ago</span>
                  <GrLocation size={10} />
                  {/* <img src="" alt="" /> */}
                  <span className="text-xs font-semibold"> Chicago</span>
                </div>
              </div>
            </section>

            <div className=" w-full h-full flex justify-center">
              <p className="text-[12px] text-gray-500 w-[95%] mb-[6px] text-semibold">
                The guitar is classified as a chordophone – meaning the sound is
                produced by a vibrating string stretched between two fixed
                points. Just loved to play it.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OriginalPostModal;
