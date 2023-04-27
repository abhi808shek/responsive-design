import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import wishes from '../../../../../Assets/Images/Umeet/wishesTemplate.webp'

const ChooseTemplate = ({ onClose, handleImageChange }) => {
  return (
    <div className='absolute top-0 w-full h-full flex justify-center items-center bg-gray-100' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

     <div className='w-[70%] flex flex-col justify-between min-h-[90%] bg-white rounded-xl p-3'>
      <div className=''>
       <div className='flex justify-between items-center border-b pb-2 text-gray-600'>
         <span className='text-[18px] text-gray-700'>Choose Template</span>
         <button className='px-5 py-1 rounded-md text-white border bg-[#649B8E]'>Upload</button>
       </div>
       <div className='flex flex-wrap'>
       {
         [1,2,3,4,5,6,7].map((data, i)=>(
           <div key={i} className='cursor-pointer justify-between py-3 px-3 items-center'>
            <img src={wishes} onClick={handleImageChange} className='h-36 w-24 rounded object-cover' />
           </div>
         ))
       }  
       </div>            
      </div>

      <div>
       <button className='w-full py-1 rounded-md text-white border border-[#649B8E] bg-[#649B8E]'>Save</button>
       <button onClick={onClose} className='w-full py-1 my-2 rounded-md  border border-[#649B8E]'>Cancel</button> 
      </div>
     </div>  

    </div>
  )
}

export default ChooseTemplate