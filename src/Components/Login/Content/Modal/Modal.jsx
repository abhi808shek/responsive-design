import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Input from "../InputBox/Input";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbPhotoPlus } from "react-icons/tb";

const Modal = ({ modalType, handleClose }) => {
  const [country, setCountry] = useState(null)

  const isPersonal = modalType === "personal";

  const handleCountry = (val)=>{
    setCountry(val)
  }
  
  return (
    {/* corner radius added to componenet */},
    <div
      className="absolute py-2 rounded-xl px-10 top-1/2 left-1/2 bg-white max-w-[60rem] w-[75vw] text-center"
      style={{
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 10px 8px #3f3f3fd9",
      }}
    >
      <h2 className="font-semibold text-xl border-b-[3px] border-grey-400 py-2">
        Let's Create Profile
      </h2>
      <div className="flex flex-col md:flex-row my-4">
        <div className="md:w-1/2 mr-4 border-r-[3px] border-grey-400">
          {/* font-weight removed, font-size reduced, padding added,*/}
          <h2 className="text-xl py-3">Add Profile Picture</h2>
          <div>
            <input
              id="profilePic"
              type="file"
              accept="image/*"
              className="hidden"
            />
            <label
              htmlFor="profilePic"
              className="flex justify-center items-center cursor-pointer w-[15rem] h-[15rem] mx-auto rounded-full block bg-gray-200"
            >
              <span>
                <TbPhotoPlus size={45} />
              </span>
            </label>
            <div className="pt-6">
              {/* bg-color, padding, font-weight of label changed */}
              <label
                htmlFor="profilePic"
                className="bg-[#6780af] cursor-pointer p-[4px 20px] rounded-xl py-2 text-white font-medium mt-6 px-6"
              >
                Select from computer
              </label>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 max-w-[25rem] px-4 relative">
          <div className="mx-auto">
            {/*<Dropdown
              name={isPersonal ? "Select Profile Type*" : "Organization"}
              options={isPersonal ? ["Personal"] : ["World Trade Org"]}
            />*/}

            {/* last name field added */}
            <div className="mt-[9px]">
              <Input title="Full Name*" name="email" className="w-full" />
            </div>
            {/* Lastname field was added */}
            <div className="mt-[2px]">
              <Input title="Last Name*" name="email" className="w-full" />
            </div>
            {isPersonal ? (
              <>
                {/* size of radio button incresed, accent color of button changed,
                    margin top of rdio button removed and margin added to input component*/}
                <div className="flex justify-evenly items-center">

                {/* input and label grouped in a div, padding added to label*/}
                 <div className='flex justify-center items-center'>
                  <input
                    type="radio"
                    name="gender"
                    className='h-5 w-4 accent-stone-500'
                    //  onChange={(e) => handleGender(e)}
                  />{" "}
                  <label className='pl-2'>Male</label>
                 </div>

                 <div className='flex justify-center items-center'>
                  <input
                    type="radio"
                    name="gender"
                    className='h-5 w-4 accent-stone-500'
                    //  onChange={(e) => handleGender(e)}
                  />
                  <label className='pl-2'>Female</label>
                 </div>

                 <div className='flex justify-center items-center'>
                  <input
                    type="radio"
                    name="gender"
                    className='h-5 w-4 accent-stone-500'
                    // onChange={(e) => handleGender(e)}
                  />
                  <label className='pl-2'>Other</label>
                 </div>
                </div>
                <Dropdown name={"Date of birth"} options={[]} />
                <Dropdown2 name={"Select country"} options={['India', 'US']} handleCountry={handleCountry} />

                {/* created Dropdown2 component, when selecting country new dropdowns are shown ,
                    for this local state added, a function created for
                    getting value from child componenet*/}

                {
                  country ?
                   country.toLowerCase() === 'india' ? (
                    <>
                     <div className='flex'>
                      <Dropdown name={"State"} options={[]} />
                      <Dropdown name={"District"} options={[]} />
                     </div>
                     <div className='flex'>
                      <Dropdown name={"Loksabha"} options={[]} />
                      <Dropdown name={"Assembly"} options={[]} />
                     </div>
                     <div className='mt-1.5'>
                      <Input title="Living Location*" className="w-full" />
                     </div>
                    </>
                    ) : (
                    <>
                      <Dropdown name={"State"} options={[]} />
                      <div className='mt-1.5'>
                       <Input title="Living Location*" className="w-full" />
                      </div>
                    </>
                    )
                  : null
                }
              </>
            ) : (
              <>
                <Input
                  title="Website*"
                  name="web"
                  className="w-full mt-[10px]"
                />
                <Input
                  title="Address*"
                  name="address"
                  className="w-full mt-[10px]"
                />
                {/* text area default rows increased*/}
                <textarea
                  rows='5'
                  placeholder="Write your intro..."
                  className="mt-[10px] outline-none p-2 border-[1px] border-gray-400 rounded-[5px] w-full text-xs"
                ></textarea>
              </>
            )}
          </div>
          
          {/* create button positioned to top level div */}
          <div className='flex justify-center'>
            <label
            htmlFor=""
            className="bg-[#6780af] w-52 py-1.5 flex justify-center py-1 rounded-xl block mt-[60px] cursor-pointer text-white font-medium"
            >
            Create
            </label>
          </div>
        </div>
      </div>
      <span
        className="absolute top-4 right-2 cursor-pointer"
        onClick={() => handleClose()}
      >
        <AiOutlineCloseCircle size={25} className="text-gray-600" />
      </span>
    </div>
  );
};

export default Modal;
