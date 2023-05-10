import { MdOutlineMusicNote } from 'react-icons/md'
import { TiArrowBack } from 'react-icons/ti'
import { AiFillHeart } from 'react-icons/ai'
import { IoSend } from 'react-icons/io5'
import profile from '../../../Assets/Images/Person.jpg'
import { useState } from 'react'

export default function KicksComment({addComment}){
   const [state, setState] = useState({});
   const { commentText} = state;

   const handleChange = (event) => {
      setState({...state, commentText: event.target.value})
   }

 return (
 	<>
{/* <section className='w-11/12 bg-white h-[405px] overflow-scroll hideScroll text-black rounded-xl p-0.5'>
	{[1,2,3,4,5,6,7].map((data, i)=>(
    <div key={i} className='my-2 flex items-center'>
       <div className='w-1/6 flex justify-center'>
        <img src={profile} className='w-10 h-10 rounded-full object-cover' />
       </div>

       <div className='bg-[#f3f6f8] w-4/6 p-2 rounded-md'>        
        <div className=''>
         <span className='font-semibold text-[15px]'>Jessica</span>
         <span className='text-[10px] px-2'>Apr 29, 2023 at 8.30am</span>
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
	))
	}
   </section> */}

   <section className=' my-2 flex items-center text-black'>
    <div className='flex justify-center items-center rounded-md bg-white'>
     <input value={commentText} name='commentText' className='w-full h-9 rounded-md outline-none pl-3 whitespace-break-spaces' onChange={handleChange}/>
     <span onClick={() => addComment(commentText)}><IoSend className='text-blue-500 text-2xl mx-2 cursor-pointer'/></span>
    </div>
   </section>
</>
 )
}