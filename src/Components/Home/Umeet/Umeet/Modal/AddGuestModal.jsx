import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useState } from 'react'
import AddPeopleModal from './AddPeopleModal'

const dataList = [
  {
    qualification: "School",
    address: "St, John's E.M. school, Tirunelvelli, TN, 765888"
  },
  {
    qualification: "Graduation",
    address: "St, John's E.M. school, Tirunelvelli, TN, 765888"
  },
  {
    qualification: "Post Graduation",
    address: "St, John's E.M. school, Tirunelvelli, TN, 765888"
  },
]

const AddGuestModal = ({ onClose }) => {
  const [showAddPeopleModal, setShowAddPeopleModal] = useState(false)

  const handleShowAddPeopleModal = ()=>{
   setShowAddPeopleModal(true)
  }

  return (
    <div className='absolut fixed top-0 left-0 h-full w-full flex justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
     <div className='w-[78%] md:w-[41%] lg:w-[37%] xl:w-[29%] bg-white rounded-xl p-3'>
      <div className='flex justify-between py-1 text-gray-600'>
        <span className='text-[18px] text-gray-700'>Select a Group</span>
        <AiOutlineCloseCircle onClick={onClose} className='w-8 cursor-pointer hover:text-red-500 h-7'/>
      </div>
      {
        dataList.map((data, i)=>(
          <div key={i} onClick={handleShowAddPeopleModal} className='flex cursor-pointer justify-between py-3 px-3 items-center border-t'>
           <div className='flex flex-col w-5/6'>
            <span className='font-medium text-gray-800'>{data.qualification}</span>
            <span className='text-gray-600 text-[15px]'>{data.address}</span>
           </div>           
           <div><MdKeyboardArrowRight className='w-7 text-gray-600 h-7'/></div>
          </div>
        ))
      }              
     </div>
     {showAddPeopleModal && <AddPeopleModal onClose={()=>setShowAddPeopleModal(false)} />}
    </div>
  )
}

export default AddGuestModal