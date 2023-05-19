import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const PersonalModal = () => {
  const [Pop, setPop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const CloseModel = () => {
    return setPop(false);
  };

  // const NewModel = () => {
    return (
      <div className="grid place-content-center bg-red-300">
        <div className="bg-white rounded-md  container w-auto h-auto mt-8">
          <div className="border-b-2 border-neutral-400 mx-2 py-2 px-2">
            <h2 className="font-bold text-center">Let's Create Profile</h2>
          </div>
          <div className=" grid grid-cols-2 mt-2  ">
            <div className="border-r-2 border-neutral-400 h-full">
              <div className="mt-8">
                <h2 className="text-center text-[18px] font-medium">Add Picture</h2>
              </div>
              <div>
                <img src="" alt="" />
              </div>
              <div className="mt-48">
                <button className="bg-blue-500 py-1 px-4 ml-14 rounded-lg text-white mx-5">
                  Select From Computer
                </button>
              </div>
            </div>
            <div className="bg-slate-200">
              <div className="mx-4 my-4">
                <div>
                  <button
                    className="text-left border border-neutral-500 rounded-md w-full "
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Organization
                    {!isOpen ? (
                      <AiOutlineCaretDown className="h-8" />
                    ) : (
                      <AiOutlineCaretUp />
                    )}
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="border border-neutral-400 w-full mt-4 rounded-lg px-2 py-1"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Website*"
                    className="border border-neutral-400 w-full mt-4 rounded-lg px-2 py-1"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Address*"
                    className="border border-neutral-400 w-full mt-4 rounded-lg px-2 py-1"
                  />
                </div>
                <div className="w-full mt-4">
                  <form className="w-full">
                    <textarea
                      className="w-full border border-neutral-400 rounded-lg px-2 py-1 overflow-hidden resize-none "
                      name=""
                      id=""
                      cols="30"
                      rows="8"
                    >
                      Describe Yourself
                    </textarea>
                  </form>
                </div>
                <div className="my-5">
                  <input type="checkbox" className="border border-blue-500" />
                  <span className="text-blue-500">
                    I agree to all kookies And privecy
                  </span>
                </div>
                <div className="ml-12 mb-2">
                  <button
                    onClick={() => setPop(false)}
                    className="bg-blue-600 rounded-lg py-1 text-white px-16 "
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  // };

  // return (
  //   <div className="">
  //     <button
  //       onClick={() => setPop(true)}
  //       className="  bg-slate-500 rounded-full px-3 py-2 text-white"
  //     >
  //       Create Account
  //     </button>

  //     {Pop && <NewModel />}
  //   </div>
  // );
};

export default PersonalModal;
