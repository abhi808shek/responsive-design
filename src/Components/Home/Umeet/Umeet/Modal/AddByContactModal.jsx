import { useState } from "react";

const dataList = ['ak@gmail.com', 'pro@gmail.com', 'some@gmail.com', '+919345678902']

const AddByContactModal = ({ onClose }) => {
	
  const handleContact = ()=>{

  }

  return (
    <div className='absolute top-0 w-full h-full flex justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

     <div className='w-[45%] flex flex-col bg-white justify-between min-h-[95%] rounded-xl p-5'>
      <div className=''>
       <div className='flex justify-between items-center border-b pb-2 text-gray-600'>
         <button className='px-4 py-1.5 text-sm rounded-md border text-[#649B8E] boredr-[#649B8E]'>Choose Classmate</button>
         <button className='px-4 py-1.5 text-sm rounded-md text-white ml-5 border bg-[#649B8E]'>Add by Email/Phone</button>
       </div>
       <div className='border-b'>        
        <div className='flex items-center my-3'>        
         <input className='w-full outline-none border bg-gray-200 border-gray-200 rounded-lg h-9 pl-1' placeholder='example' />
         <span className='text-gray-600 px-0.5'>@</span>
         <input className='w-full outline-none bg-gray-200 border border-gray-200 rounded-lg h-9 pl-1' placeholder='domain.co' />
         <button className='px-4 py-1.5 text-sm rounded-md text-white ml-1 border bg-[#649B8E]'>Add</button>
        </div>

        <div className='flex items-center my-3'>  
         <select className='bg-gray-200 mr-2 outline-none h-9 rounded-lg px-2 border border-gray-200'>          
          <option>+91</option>
          <option>USA</option>
         </select>      
         <input className='w-full outline-none bg-gray-200 border border-gray-200 rounded-lg h-9 pl-1' placeholder='9879867543' />
         <button className='px-4 py-1.5 text-sm rounded-md text-white ml-1 border bg-[#649B8E]'>Add</button>
        </div>
        <div className='mt-2 flex flex-wrap'>        
         {
          dataList.map((data, i)=>(
           <div key={i} className='bg-gray-100 my-1 mr-1.5 inline py-1.5 w-fit rounded-md text-[13px] flex flex-wrap'>
            <span className='px-1'>{data}</span>
            <span onClick={handleContact} id={i} className='px-1.5 mr-1'>x</span>
           </div>
          ))
         }
        </div>
       </div>            
      </div>

      <div>
       <button className='w-full py-1 rounded-xl text-white border border-[#649B8E] bg-[#649B8E]'>Save</button>
       <button onClick={onClose} className='w-full py-1 my-2 rounded-xl border border-[#649B8E] text-[#649B8E]'>Cancel</button> 
      </div>
     </div>  

    </div>
  )
}

export default AddByContactModal