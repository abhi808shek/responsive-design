import React from "react";
import MainCarousel from "../../SliderSection/MainCarousel";
import AccordionToggle from "../../Accordian/AccordianToggle";
import SelectDropdown from './SelectDropdown'

const CreatePostModal = ({setShowCreatePostModal,title,handleCloseModal}) => {
  const onCloseCreatePostModal = ()=>{
    setShowCreatePostModal(false)
  }
  return (
    <div className="bg-white top-8 lg:w-[77%] lg:h-[75%] xl:h-[80%] xl:w-[70%] py-[10px] px-4 rounded-2xl mx-auto relative z-20">
      {/* create post */}
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold">{title} Post</h3>
        </div>
        <div className="">
          <button className="bg-[#6780AF] text-white font-bold px-5 rounded-full ">
            Post
          </button>
          <button className="bg-transparent text-[#6780AF] font-semibold px-3 mx-3 border border-[#6780AF] rounded-full" onClick={handleCloseModal}>
            Discard
          </button>
        </div>
      </div>

      <hr className="w-100 h-1 bg-gray-200 border-0 rounded md:my-3 dark:bg-gray-900" />
      <div className="grid grid-cols-2 gap-2">
          <div>
       <div className="lg:w-[75%] xl:w-[70%]">
       <section className="flex items-center my-2 gap-2">
          <img
            src="./images/events.jpg"
            alt=""
            className="w-[40px] h-[40px] rounded-full"
          />
          <span className="font-bold">Joe D</span>
        </section>
        <section className="flex items-center ">
          <span className="md:text-[10px] lg:w-[30%] xl:w[22%] flex items-center">Share with </span>
          {/*<div className="">
            <select
              name=""
              id=""
              className="border-2 border-gray-500 cursor-pointer text-[10px] font-semibold h-5 "
            >
              <option value="group">Create New Group</option>
              <option value="Friends" default>
                Friends
              </option>
              <option value="Relative">Relative</option>
              <option value="Classmates">Classmates</option>
              <option value="Officemates">Officemates</option>
              <option value="Party">Party</option>
              <option value="Organization">Organization</option>
            </select>
          </div>*/}

          <SelectDropdown />
        </section>
       </div>
          <div className="absolute left-2/4 -ml-0.5 w-0.5 h-[70%] top-[90px] bg-gray-300"></div>
          <div className="leftSide">
            {/* comment */}
            <div className="comment">
              <textarea className="px-4 pt-2 outline-none bg-[#E4E7EC] w-[95%] rounded-lg my-4 resize-none lg:h-[100px] xl:h-[125px]">
                Write a something..........
              </textarea>
            </div>
            {/* add location */}
            <div>
              <input
                type="text"
                className="w-[90%] p-2 text-sm border-b-2 border-gray-400 outline-none font-bold placeholder-gray-500"
                placeholder="Add Location"
              />
            </div>
            {/* accordion */}
            {/* <div className="my-2">
              <span className="text-gray-500 font-bold inline align-center">
                Turn off commenting
              </span>
              <label className="relative inline-flex items-center mb-5 cursor-pointer float-right mr-12">
                <input type="checkbox" value="" class="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>

              <p className="text-black text-opacity-40 w-[90%] text-sm">
                You can change this later by going to the options at the top of
                your post.
              </p>
            </div> */}

            {/* <hr className="w-[90%] h-0.5 bg-gray-300 border-0 rounded md:my-3 dark:bg-black-900" />
            <div>
              <AccordionToggle />
            </div> */}
          </div>
        </div>

        <div >
          <MainCarousel />
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
