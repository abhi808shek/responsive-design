import React from "react";

const NotificationModal = () => {
  return (
    <div className="lg:w-[29%] xl:w-[24%] bg-white rounded-lg absolute  lg:left-[70.5%] xl:left-[72.5%] top-[60px]">
      <div className="text-[#6780AF] flex justify-between py-2 mx-2">
        <button className="text-[12px] font-bold">Mark all as Read</button>
        <button className="text-[12px] font-bold">
          Clear all notifications
        </button>
      </div>
      <hr />
      <div className="overflow-scroll h-[360px] px-2">
      {[1, 2, 3, 45, 6, 78, 89].map(() => (
        <><div className="flex mt-2 py-2">
          <img
            src="./images/events.jpg"
            alt=""
            className="w-[40px] h-[40px] rounded-full" />
          <div className="flex flex-col ml-2">
            <div className="flex items-center justify-center gap-1">
              <span className="font-bold text-sm">Kathy S</span>
              <span className="font-semibold text-[12px] mt-0.5">and</span>
              <span className="font-bold text-sm">35 others</span>
              <p className="font-semibold text-[12px] mt-0.5">
                liked your post
              </p>
            </div>
            <div className="font-bold text-[10px] text-gray-500">
              march 17,2022
            </div>
          </div>
        </div><hr /></>
      ))}
      </div>
      <div className="w-full flex items-center justify-center">
      <button className="text-[#6780AF] py-2 text-[12px] font-bold">See more</button>

      </div>
    </div>
  );
};

export default NotificationModal;
