import React from 'react'
import PostCard from './PostCard/PostCard';
import ReportModal from '../Modal/ReportModal/ReportModal';
import ShareWithModal from './../Modal/ShareWithModal/ShareWithModal';
import userData from '../dataList';


const PostContent = ({ data, showModalFunc, width, userData }) => {
  return (
    <div className="w-full h-[100%] flex items-center justify-center flex-col">

      {/* <ShareWithModal /> */}
      {data.map((item, index) => (<PostCard key={index} item={item} userData={userData}
        showModal={showModalFunc} width={width} />))}
    </div>
  )
}

export default PostContent;
