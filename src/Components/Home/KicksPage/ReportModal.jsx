import { useState } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import ReportReasonModal from './ReportReasonModal'
import { useDispatch, useSelector } from "react-redux";
import { setPostReport } from "../../../redux/actionCreators/rootsActionCreator";

const ReasonsData = [
 'Nudity or Sexual', 'Sucide related', 'Self-Injury', 'Eating-Disorders',
 'False Infirmation', 'Scam or Fraud', 'Harassment', 'Hat speech or symbols',
 'Terrorism', 'Animal abuse', 'Violece', 'Others'
]

const ReportModal = ({ onClose }) => {
  const dispatch = useDispatch()

  const reducerData = useSelector((state) => {
    return {
      activePost: state.rootsReducer?.activePost
    }
  })
  const { activePost } = reducerData;

  const [showReasonModal, setShowReasonModal] = useState(false);
  const [reason, setReason]  = useState('');

  const handleReportClick = (reasonName) => {
    setShowReasonModal(true);
    setReason(reasonName)
  }
  const reportPost = () => {
    const payload = {
        reportedid: activePost?.id,
        profileid: activePost?.profile?.id,
        message: reason,
        type: 'post',
        Createdatetime: new Date()
    }
    dispatch(setPostReport(payload)).then((res) => {
      // console.log(res, "+++++++++++++ REEEEEEEEEEEEEEEEEPPPPPPPP");
    });
  }

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
      <div onClick={() =>handleReportClick(reason)} className='py-1.5 cursor-pointer hover:bg-blue-50'>{reason}</div>
     ))}
    </div>
   </div>
   {showReasonModal && <ReportReasonModal reportPost={reportPost} onClose={()=>setShowReasonModal(false)} />}
  </section>
  )
}

export default ReportModal