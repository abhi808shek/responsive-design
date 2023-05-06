import { useState } from "react";
import { FaUserSlash } from 'react-icons/fa'

const BlockUserModal = ({ onClose }) => {
  return (
  <section className='fixed justify-center items-center top-0 left-0 h-full w-full flex' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
   <div className='w-[25%] flex flex-col  p-4 bg-white ml-[9%] mt-[4%] rounded-2xl'> 

    <p className='py-2 text-[17px] border-b font-medium text-center flex justify-center'>Are you sure to Block?</p>
    <div className='flex w-full my-3 justify-center items-center'>
     <FaUserSlash className='w-11 h-11 text-gray-800' />
    </div>

    <div className='font-medium'>
     <p className='my-2'> > If you are friends, will be Un-friended</p>
     <p className='my-2'> > If you are friends, whe/she can't send you requests</p>
     <p className='my-2'> > You can't send invitations in U-Meet</p>
     <p className='my-2'> > Your profile & posts will not be shown to him/her</p>
    </div>

    <div className='flex my-3'>
     <button className='bg-[#649b8e] text-white font-bold border border-[#649b8e] px-5 w-1/2 mx-3 py-2 rounded-lg'>Block</button>
     <button onClick={onClose} className='px-5 w-1/2 border border-[#649b8e] py-2 mx-3 rounded-lg'>Cancel</button>    
    </div>

   </div>
  </section>
  )
}

export default BlockUserModal