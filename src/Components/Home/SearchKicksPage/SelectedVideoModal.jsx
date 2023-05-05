import { useState } from 'react'
import profile from '../../../Assets/Images/Person.jpg'

const dataList = [
  'All','Action', 'Adventures', 'Arts & Craft', 'Beauty Tips', 'Comedy', 'Drama', 'Fiction', 'Novel', 'Romance'
]

export default function SelectedVideoModal({ onClose, selectedVideo }){
 
 return (
  <div className='top-0 absolute left-0 fixed flex justify-center items-center w-full h-full' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
   <div className='bg-white p-4 w-[35%] rounded-lg min-h-[83%]'>
    <p className='py-1 border-b mb-2 font-semibold text-orange-600 flex justify-center text-xl'>Add Kicks</p>
    <section className='flex'>
     <div className='w-[50%] flex flex-col justify-evenly'>
      <div className='flex my-6 items-center'>
       <img src={profile} className='w-10 h-10 rounded-full object-cover mr-2'/>
       <span>My Personal pro</span>
      </div>
      <select className='w-full outline-none h-12 px-2 border-gray-300 rounded overflow-hidden bg-white border'>
       {dataList.map((data,i)=>(
       	<option key={i}>{data}</option>
       	))}
      </select>
     </div>

     <div className='h-56 w-[50%] flex justify-center rounded-lg overflow-hidden'>
      <video src={selectedVideo} className='h-full w-[70%] rounded-lg object-cover' autoPlay />
     </div>     
    </section>

    <section className=''>
    <textarea rows='5' id='message' name='message' placeholder='Write something...' className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 my-3 mr-2 bg-gray-100" />

    <div className='flex'>
     <button className='bg-[#dd8e58] text-white font-bold border border-[#dd8e58] px-5 w-1/2 mx-3 py-2 rounded-lg'>Post</button>
     <button onClick={onClose} className='px-5 w-1/2 border border-[#dd8e58] py-2 mx-3 rounded-lg'>Cancel</button>    
    </div>
    </section>
   </div>
  </div>
 )
}