import { useState } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import ReportReasonModal from './ReportReasonModal'

const ReasonsData = [
 'Nudity or Sexual', 'Sucide related', 'Self-Injury', 'Eating-Disorders',
 'False Infirmation', 'Scam or Fraud', 'Harassment', 'Hat speech or symbols',
 'Terrorism', 'Animal abuse', 'Violece', 'Others'
]

const ReportModal = ({ onClose }) => {
  const [showReasonModal, setShowReasonModal] = useState(false)

  return (
  <section className='fixed z-20 justify-center items-center top-0 left-0 h-full w-full flex z-20' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
   <div className='w-[28%] flex flex-col  p-3 bg-white ml-[9%] mt-[4%] rounded-2xl'> 
    <div className='flex justify-between py-3 border-b'>      
      <span className='text-[19px] font-medium'>Report</span>
      <AiOutlineCloseCircle onClick={onClose} className='w-7 h-7 text-gray-700 cursor-pointer' />
    </div>
    <p className='mt-1 font-medium'>Why are you Reporting this Post ?</p>

    <div>
     {ReasonsData.map((reason, i)=>(
      <div onClick={()=>setShowReasonModal(true)} className='py-1.5 cursor-pointer hover:bg-blue-50'>{reason}</div>
     ))}
    </div>
   </div>
   {showReasonModal && <ReportReasonModal onClose={()=>setShowReasonModal(false)} />}
  </section>
  )
}

export default ReportModal