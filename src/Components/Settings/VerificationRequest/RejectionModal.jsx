import React from 'react'

const RejectionModal = ({onCloseModal,onResubmit}) => {
  return (
    <div className='bg-white w-[30%] h-[20%] px-4 flex flex-col justify-evenly'>
      <h1 className='font-bold'>Verification</h1>
      <p className='text-sm'>Your verification is rejected. Please re submit with proper details.</p>
      <div className='flex justify-end gap-2 pr-2 font-bold text-blue-400'>
        <button className='text-xs' onClick={onCloseModal}>Cancel</button>
        <button className='text-xs' onClick={onResubmit}>Re-submit</button>
      </div>
    </div>
  )
}

export default RejectionModal;
