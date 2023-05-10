import { useState } from 'react'

export default function PoliticalAddBy({ onClose, whichBy, selectBy }){
 return (
 <section className='h-full'>
  <div className='flex justify-between font-semibold my-1'>
   <span className='bg-[#649b8e] cursor-pointer flex justify-center rounded-lg mx-1 w-1/2 px-1 py-1 text-white'>Add By {whichBy}</span>
   <span className='border text-[#649b8e] w-1/2 cursor-pointer flex justify-center rounded-lg mx-1 border-[#649b8e] px-1 py-1'>Add By Email</span>
  </div>

  <input type='search' className='outline-none border-b border-[#519d8b] text-[#519d8b] w-full my-2' placeholder='Search..'/>

  <div className='flex items-center'>
     <input type='checkbox' id='selectAll' className='w-5 h-5'/>
     <label htmlFor='selectAll' className='ml-5 text-[17px] text-gray-700'>Select All</label>
  </div> 
  <div className='h-[50%] overflow-y-scroll'>
  {selectBy.map((data, i)=>(
    <div key={i} className='flex items-center my-2.5'>
     <input value={data} type='checkbox' id={data} className='w-5 h-5'/>
     <label htmlFor={data} className='ml-5 text-[17px] text-gray-700'>{data}</label>
    </div> 
   ))}
  </div>

  <div className='flex mx-6'>
   <button className='py-2 bg-[#649b8e] m-1 font-semibold text-white rounded-lg w-full'>Add Invities</button>
   <button onClick={onClose} className='py-2 border border-[#649b8e] m-1 font-semibold rounded-lg w-full'>Cancel</button>
  </div>
 </section>
 )
}