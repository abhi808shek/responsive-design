import { MdOutlineMusicNote } from 'react-icons/md'
import { TiArrowBack } from 'react-icons/ti'
import { AiFillHeart } from 'react-icons/ai'
import { IoSend } from 'react-icons/io5'
import profile from '../../../Assets/Images/Person.jpg'
import profile2 from '../../../Assets/Images/bg2.jpg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

export default function KicksComment(){
 return (
 	<>
<section className='w-11/12 bg-white h-[405px] overflow-scroll hideScroll text-black rounded-xl p-0.5'>
  {[1,2,3].map((data, i)=>(<>
    <div key={i} className='my-2 flex items-center'>
       <div className='w-1/6 flex justify-center'>
        <img src={profile} className='w-10 h-10 rounded-full object-cover' />
       </div>

       <div className='bg-[#f3f6f8] w-4/6 p-2 rounded-md'>        
        <div className='flex justify-between'>
         <div>
          <span className='font-semibold text-[14px]'>Jessica</span>
          <span className='text-[10px] px-2'>Apr 29, 2023 at 8.30am</span>
         </div>
         <div><BsThreeDots /></div>
        </div>
        <div className='flex justify-between items-end'>
          <span className='text-[14px]'>Writing something....</span>
          <div className='text-[11px]'>
           <span className='px-1'>3 likes</span>
           <span>2 replies</span>
          </div>
        </div>
       </div>

       <div className='w-1/6 pl-2 text-[#666666]'>
        <AiFillHeart className='text-2xl'/>
        <TiArrowBack className='text-2xl'/>
       </div>
    </div>

    <div key={i} className='my-2 ml-[14%] w-[83%] flex items-center'>
       <div className='w-1/6 flex justify-center'>
        <img src={profile2} className='w-10 h-10 rounded-full object-cover' />
       </div>

       <div className='bg-[#f3f6f8] w-4/6 p-2 rounded-md'>        
        <div className='flex justify-between'>
         <div>
          <span className='font-semibold text-[14px]'>kumar</span>
          <span className='text-[10px] px-2'>Apr 29, 2023 at 8.30am</span>
         </div>
         <div><BsThreeDots /></div>
        </div>

        <div className='flex justify-between items-end'>
          <span className='text-[14px]'>Nice one</span>
          <div className='text-[11px]'>
           <span className='px-1'>3 likes</span>
           <span>2 replies</span>
          </div>
        </div>
       </div>

       <div className='w-1/6 pl-2 text-[#666666]'>
        <AiFillHeart className='text-2xl'/>
       </div>
    </div>  
  </>  
  ))
  }
   </section>

   <section className='w-10/12 my-2 flex justify-center items-center text-black'>
    <div className='w-11/12 flex justify-center items-center rounded-md bg-white'>
     <input className='w-full h-9 rounded-md outline-none pl-3'/>
     <span><IoSend className='text-blue-500 text-2xl mx-2 cursor-pointer'/></span>
    </div>
   </section>
</>
 )
}