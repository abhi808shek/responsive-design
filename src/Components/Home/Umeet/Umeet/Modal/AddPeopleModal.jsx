import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import wishes from '../../../../../Assets/Images/Umeet/wishesTemplate.webp'
import selectedimg from '../../../../../Assets/Images/Umeet/Umeet-Main/Umeet-Attending.png'
import person from '../../../../../Assets/Images/Person.jpg'
import '../../Umeet.css'
// import AddByContactModal from './AddByContactModal'
import group from '../../../../../Assets/Images/Umeet/Umeet-Main/Group 1054.png'
import { useSelector } from 'react-redux'
import axios from 'axios'

const token = localStorage.getItem("userCredential")
  ? JSON.parse(localStorage.getItem("userCredential")).token
  : "";

const AddPeopleModal = ({ onClose, education, handlePeopleModalClose,
handleAddByContactModal, showAddByContactModal, selectedQualification }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [eduData, setEduData] = useState([])

  const { umeetReducer, profileReducer } = useSelector(state=>state)
console.log(education)
  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  }

  let dataList = [];

  for (let i = 0; i < eduData.length; i++) {
    eduData?.map(inviteData=>(
      dataList.push({
        "name": inviteData?.fname + ' ' + inviteData?.lname,
        "email": inviteData?.email,
        "img": inviteData?.pimage
      })
    ))
  }
//console.log(dataList, 'dataList')
  const ugPostData = {
   "ugaddress": profileReducer?.educationDetails?.ugaddress,
   "ugdegree": profileReducer?.educationDetails?.ugdegree,
   "ugbranch": profileReducer?.educationDetails?.ugbranch,
   "ugpassyear": profileReducer?.educationDetails?.ugpassyear,
  }

  const pgPostData = {
   "pgaddress": profileReducer?.educationDetails?.pgaddress,
   "pgdegree": profileReducer?.educationDetails?.pgdegree,
   "pgbranch": profileReducer?.educationDetails?.pgbranch,
   "pgpassyear": profileReducer?.educationDetails?.pgpassyear,
  }
  const schoolPostData = {
   "schooladdress": profileReducer?.educationDetails?.pgaddress,
   "schoolpass": profileReducer?.educationDetails?.pgpassyear,
  }
  useEffect(()=>{
    if(education == 'ug'){
      //dataList = umeetReducer.ugFriends
    }else if(education == 'pg'){
      (async()=>{
        const  { data } = await axios.post(
        `https://web.uynite.com/profile/api/education/getpgfriends`,
        pgPostData, {headers: { Authorization: `Bearer ${token}` }})
        console.log(data?.data, "getAllPgFriends")
        setEduData(data?.data)
      })()    
      //dataList = umeetReducer.pgFriends
    }else if(education == 'school'){
      // (async()=>{
      //   const  { data } = await axios.post(
      //   `https://web.uynite.com/profile/api/education/getschoolfriends`,
      //   schoolPostData, {headers: { Authorization: `Bearer ${token}` }})
      //   console.log(data?.data, "schoolFriends")
      //   setEduData(data?.data)
      // })()      
    }
  }, [selectedQualification])

  return (
    <div className='fixed top-0 left-0 z-20 w-full h-full flex justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

     <div className={`w-[96%] md:w-[70%] lg:w-[45%] 2xl:w-[50%] h-[95%] md:h-[94%] flex flex-col justify-between bg-white rounded-xl p-3 lg:p-5 ${showAddByContactModal ? '-z-10' : ''}`}>
      <div className=''>
       <div className='flex justify-start items-center text-[14px] lg:text-[16px] border-b pb-2 text-gray-600'>
         <button className='px-5 py-1 rounded-md text-white border bg-[#649B8E]'>Choose Classmate</button>
         <button onClick={handleAddByContactModal} className='px-5 py-1 rounded-md ml-5 border boredr-[#649B8E] text-[#649B8E]'>Add by Email/Phone</button>
       </div>
       <div className=''>
        <p className='py-2'>{selectedQualification}</p>  
        <input type='search' className='h-7 p-2 h-8 outline-none border border-gray-300 w-full bg-gray-100 rounded-md' placeholder='Search....' />
        <div className='my-3 flex items-center'>
      	 <label className='text-[17px] text-gray-700 flex items-center'>
         <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAllChange}
          className='w-5 h-5 mr-2'
          />Select All</label>
    	</div>
    	<div className='h-[190px] md:h-[205px] lg:h-[210px] xl:h-[280px] 2xl:h-[320px] hideScroll overflow-y-scroll'>
    	{ (dataList.length !== 0) ?
    	 dataList.map((data, i)=>(
    	  <div key={i} className='flex items-center mb-2 lg:mb-3'>    	   
    	   <div className='w-1/6'>
    	    <img src={data.img} className='w-10 h-10 rounded-full object-cover' />
    	   </div>
    	   <span className='w-4/6 font-medium text-[15px]'>{data.name}oppo</span>
    	   <div className='w-1/6 flex justify-end'>
    	    {selectAll ? <img src={selectedimg} className='h-6 w-6'/> :
    	     <input type="checkbox" className='w-4 h-4' />
    	    }
    	   </div>
    	  </div>
    	 )) : <p className='h-full flex justify-center items-center bg-sky-50'>No {education} friends were found</p>       
    	}
    	</div>

       </div>            
      </div>

      <section className='flex w-full'>       
        <img src={group} className='h-9 w-9 mr-3 mt-2.5' />
        <div className='w-5/6'>
         <button className='w-full py-1 rounded-xl text-white mt-2.5 border border-[#649B8E] bg-[#649B8E]'>Save</button>       
         <button onClick={handlePeopleModalClose} className='w-full py-1 my-1 rounded-xl border border-[#649B8E] text-[#649B8E]'>Cancel</button> 
        </div>
      </section>
     </div>  
     {/*{showAddByContactModal && <AddByContactModal onClose={()=>setShowAddByContactModal(false)} />}*/}
    </div>
  )
}

export default AddPeopleModal