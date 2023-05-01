import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuModalTabSelect } from "../../../../redux/actionCreators/userActionCreator";
import ReportModal from "../ReportModal/ReportModal";
import Portals from "../../../Portals/Portals";
import OriginalPostModal from "../OriginalPostModal/OriginalPostModal";
import "./menu.css";
import {
  deletePostByPostId,
  getAllPostWithLimit,
} from "../../../../redux/actionCreators/rootsActionCreator";
import { toasterFunction } from "../../../Utility/utility";

const MenuModal = ({ data, userStatus, closeModel, profileId, postId }) => {
  const { menuModalTab } = useSelector((state) => state.userReducer);
  const [showReportModal, setShowReportModal] = useState(false);
  const [originalPost, setOriginalPost] = useState(false);

  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onHandleClick = async (option) => {
    if (option === "Report") {
      console.log("showReportModal111", showReportModal);
      setShowReportModal(true);
      console.log("showReportModa222", showReportModal);
    } else if (option === "History") {
      setOriginalPost(true);
    } else if (option === "Delete Post") {
      const isDeleted = dispatch(deletePostByPostId(profileId, postId));
      console.log("Deleted", isDeleted);
      if (!isDeleted?.status) {
        return toasterFunction("Something went wrong");
      }
      dispatch(getAllPostWithLimit(profileId));
    }
    console.log("option33", option);
    closeModel(false);
    dispatch(menuModalTabSelect(option));
  };
  return (
    <>
      <div className="w-[20%] absolute border-2 border-gray-300 bg-white lg:right-[32.8%] xl:right-[32.5%] mt-7 z-2">
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
              className="flex gap-2 border-b-2 border-gray-300 items-center mx-2 py-2 cursor-pointer"
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
      {/*<div className='absolute rightArrow lg:right-[32.8%] xl:right-[35.2%] mt-2 border-[3px] border-gray-200 p-3 w-4'>
       <div className='bg-white'></div>
      </div>*/}
      {showReportModal && (
        <Portals>
          <ReportModal />
        </Portals>
      )}

      {originalPost && (
        <Portals>
          <OriginalPostModal setOriginalPost={setOriginalPost} />
        </Portals>
      )}
    </>
  );
};

export default MenuModal;
