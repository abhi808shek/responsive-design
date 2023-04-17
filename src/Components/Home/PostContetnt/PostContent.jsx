import React from 'react'
import PostCard from './PostCard/PostCard';
import ReportModal from '../Modal/ReportModal/ReportModal';
import ShareWithModal from './../Modal/ShareWithModal/ShareWithModal';

const PostContent = ({data,showModal,showReportModel,width}) => {
  return (
    <div className="w-full h-[100%] flex items-center justify-center flex-col">

{/* <ShareWithModal /> */}
      <PostCard data={data}
      showModal={showModal } width={width}/>
     {/* <PostCard data={data}
      showModal={showModal } width={width}/> */}
     {/* <PostCard data={data}
      showModal={showModal } width={width}/> */}
    </div>
  )
}

export default PostContent;
