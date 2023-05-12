import React from "react";
import Input from "../../Login/Content/InputBox/Input";

const ContactUs = () => {
  return (
    <div className="w-[95%] sm:w-[50%] lg:w-[40%] bg-[#E4E7EC] h-full mx-auto px-4 py-4 mt-1">
      <h1>Raise a Support Ticket</h1>

      <div className="w-full py-2">
        <input type="email" placeholder="Enter your Email Address." className="w-full h-full py-2 pl-2 outline-none border-[1.5px] border-gray-700 rounded-lg text-sm"/>
      </div>

      <div className="w-full h-[40%] py-2">
        <textarea type="text" placeholder="Please write us your issue."  className="w-full h-full py-2 pl-2 outline-none border-[1.5px] border-gray-700 rounded-lg text-sm"/>
      </div>

      <div className="w-full py-2 flex flex-col gap-4">
        <button className="text-sm text-white bg-blue-400 font-bold py-2 w-full rounded-lg">
          Send
        </button>
        <button className="text-sm border-2 text-blue-400 bg-white border-blue-400 font-bold py-2 rounded-lg">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
