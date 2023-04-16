import React, { useState } from "react";
import PostContent from "../PostContetnt/PostContent";
import dataList from "./data";
import { createPortal } from "react-dom";
import ReportModal from "../Modal/ReportModal/ReportModal";

const Friends = () => {


  const showReportModels = (value) => {
    // setShowReportModel(value);
  };


  return (
    <div className="">
       
      <PostContent data={dataList} showModal={showReportModels}/>
     
    </div>
  );
};

export default Friends;
