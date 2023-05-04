import React, { useState } from "react";
import SearchComponent from "../Home/SearchComponent/SearchComponent";
import Portals from "../Portals/Portals";
import OopsModal from "./BlockList/OopsModal";

const BlockListPage = () => {
  const [unblockModal, setUnBlockModal] = useState(false);
  const onUnblockClick = ()=>{
    setUnBlockModal(true)
  }

  const onOkClick = ()=>{
    setUnBlockModal(false)
  }
  return (
    <>
      <div className="w-[40%] mx-auto bg-[#E4E7EC] px-3 h-[88%] mt-[5px] flex gap-3 flex-col pt-2">
        <SearchComponent
          bgColor="white"
          placeholder="Search here to unblock"
          classes={"border-2"}
        />

        <div className="flex flex-col gap-3 overflow-y-scroll pb-2">
          {[1, 2, 3, 4, 5,3,4,4,55,6,6,66,6,6,6,6,6]?.map(() => (
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2">
                <img
                  src="./images/events.jpg"
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
                <span className="text-sm font-bold">name</span>
              </div>
              <button className="text-blue-400 text-xs border-2 font-bold py-1 w-[15%] rounded-sm border-blue-400 self-end" onClick={onUnblockClick}>
                Unblock
              </button>
            </div>
          ))}
        </div>
      </div>

      {unblockModal && (
        <Portals>
          <OopsModal onOkClick={onOkClick}/>
        </Portals>
      )}
    </>
  );
};

export default BlockListPage;
