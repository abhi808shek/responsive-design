import React, { useState } from 'react'
import ThankuModal from '../ThankuModal/ThankuModal'
import { createPortal } from 'react-dom'
import dataList from './data'


const ReportModal = () => {
   
const [showThanksModal, setShowThanksModal] = useState(false)

    const showThankuModal = ()=>{
      setShowThanksModal(true)
      setTimeout(()=>{
        setShowThanksModal(false)
      },6000)
    }
  return (
    <>
    <div className='bg-white w-[35%]  h-[400px] flex flex-col items-center gap-2 rounded-xl absolute z-10' >
       <h1 className='text-2xl font-bold mt-3'>Why are you Reporting this Post ?</h1>
       <hr className='w-full h-[80%] text-[gray]'/>
       {dataList.map((elem,index)=>(<p key={index} className='text-[14px] text-gray-500 self-start pl-5 hover:bg-gray-200 w-[95%] ml-2 cursor-pointer'>{elem.name}</p>))}
       <button className='w-[50%] h-8 text-white font-semibold rounded-lg mb-3 mt-2 bg-[#6780AF]' onClick={showThankuModal}>Report</button>
    </div>
    { showThanksModal &&
    createPortal( <ThankuModal />, document.getElementById('root'))
      }
    </>
  )
}

export default ReportModal
