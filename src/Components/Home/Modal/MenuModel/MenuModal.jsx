import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuModalTabSelect } from "../../../../redux/actionCreators/userActionCreator";
import ReportModal from "../ReportModal/ReportModal";
import Portals from "../../../Portals/Portals";
import OriginalPostModal from "../OriginalPostModal/OriginalPostModal";

const MenuModal = ({ data, userStatus, closeModel }) => {
  const { menuModalTab } = useSelector((state) => state.userReducer);
  const [showReportModal, setShowReportModal] = useState(false);
  const [originalPost, setOriginalPost] = useState(false);

  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  console.log("hELLO enTER");

  const onHandleClick = (option) => {
    console.log("option 11JName", option);
    if (option === "Report") {
      console.log("showReportModal111",showReportModal);
      setShowReportModal(true)
      console.log("showReportModa222",showReportModal);
    }
    // console.log("showReportModal33333",showReportModal);
     else if (option === "History") {
      setOriginalPost(true);
    }
    closeModel(false);
    dispatch(menuModalTabSelect(option));
  };

  return (
    <>
      <div className="w-[20%] absolute  border-2 border-gray-600 bg-white lg:right-[32.8%] xl:right-[32.2%] mt-8 z-2">
        {data
          .filter((elem) => {
            if (userStatus === user.userId) {
              if (elem.samePostedUser === 0 || elem.samePostedUser === 1) {
                return elem;
              }
            } else {
              if (elem.samePostedUser === 1 || elem.samePostedUser === 2) {
                return elem;
              }
            }
          })
          ?.map((elem) => (
            <div
              key={elem.name}
              className="flex gap-2 border-b-2 border-gray-600 items-center mx-2 py-2 cursor-pointer"
              style={{
                backgroundColor:
                  menuModalTab === elem.name ? "#7991BD" : "white",
              }}
              onClick={() => onHandleClick(elem.name)}
            >
              <img src={elem.icon} alt="" className="w-[25px] " />
              <span className="text-[12px] text-gray-600 font-semibold">
                {elem.name}
              </span>
            </div>
          ))}
      </div>
      {showReportModal && (
        <Portals>
          <ReportModal />
        </Portals>
      )}

      {originalPost && (
        <Portals>
          <OriginalPostModal setOriginalPost={setOriginalPost}/>
        </Portals>
      )}
    </>
  );
};

export default MenuModal;
