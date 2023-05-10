import upload from '../../../../../Assets/Images/upload.jpeg'
import guest from '../../../../../Assets/Images/Umeet/Umeet-Main/Group 1054.png'
import { useState } from 'react'
import ToggleButton from './ToggleButton';

const CreateEventModal = ({ selectedSpecificEvent, editMyEvent, handleCreatedEvent, handleShowTemplate, handleShowAddGroup, handleShowAddPoliticalGroup, whichType }) => {
  const [enabled, setEnabled] = useState(false)  
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      setSelectedImage(URL.createObjectURL(image));
    }
  };

  const handleShowGroup = ()=>{
    if(whichType == 'personal') handleShowAddGroup()
    else if(whichType == 'political') handleShowAddPoliticalGroup()
  }

  return (
    <div className='fullPage bg-white border-gray-300'>
     <div className={`${editMyEvent ? 'w-[60%]' : 'w-[96%]' } border bg-white px-3`}>
       {
        editMyEvent ? <div className='px-3 my-2.5 text-[17px] font-semibold'>Edit Event</div>       
         : <div className='px-3 my-2.5 text-[17px] font-semibold'>Create Event</div>
       }
       <div className='border-2 mx-3'></div>
       <div className='px-7'>
       {editMyEvent ? (
          <select className='h-10 my-1 outline-none w-full border-b bg-white text-gray-600'>
           <option>Guest List & Display to all</option>
           <option>USA</option>
          </select>
        ) : (
        <>
         <p className='pt-4 pb-2 text-[#649B8E]'>{ selectedSpecificEvent }</p>
         <hr />
        </>
        )
     }
        <div className='my-3'>
         <label htmlFor="myfile">
          {selectedImage ? (
           <img src={selectedImage} alt="Selected" className='w-full h-[350px] object-cover' />
          ) : <img src={upload} className='w-full h-[350px] object-cover'/>
        }           
         </label>
         <input type="file" id="myfile" accept="image/*" onChange={handleImageChange} className='hidden' />        
        </div>
        <span onClick={handleShowTemplate} className='flex cursor-pointer justify-center py-2 text-[#649B8E]'>Select Template</span>
        <input className='border-b border-gray-300 outline-none h-10 my-2 w-full' placeholder='Event Title*'/>
        <input className='border-b outline-none border-gray-300 h-10 my-2 w-full' placeholder='Start Date & Time*'/>
        <input className='border-b outline-none border-gray-300 h-10 my-2 w-full' placeholder='End Date & Time*'/>
        <div className='my-2 flex items-center'>
         <span className='font-bold text-xl text-gray-600'>Event Mode</span>
         <div className='px-6 flex items-center'>
          <input type='radio' className='accent-[#649B8E] w-5 h-5' id='cation' /><label for='cation' className='pl-2'>At Location</label>
         </div>
         <div className='px-6 flex items-center'>
          <input type='radio' className='accent-[#649B8E] w-5 h-5' id='location'/><label for='location' className='pl-2'>Online</label>
         </div>
        </div>

        <input className='border-b border-gray-300 h-10 my-2 w-full' placeholder='Location*'/>

        <div className='flex items-center'>
         <div>
          <select className='h-10 outline-none border-b bg-white px-6'>
           <option>+91</option>
           <option>USA</option>
          </select>
         </div>
         <input className='border-b ml-3 border-gray-300 pl-2 h-10 my-2 w-full' placeholder='Host Phone Number*'/>
        </div>

        <input className='border-b border-gray-300 h-10 my-2 w-full' placeholder='Host Mail Id*'/>

        <div className='flex items-center my-2'>
         <img onClick={handleShowGroup} src={guest} className='cursor-pointer' />
         <label onClick={handleShowGroup} className='pl-5 cursor-pointer text-[#649B8E]'>Add Guests</label>
        </div>

        <div className='border-b'>
          <select className='h-10 outline-none w-full border-b bg-white text-gray-600'>
           <option>Guest List & Display to all</option>
           <option>USA</option>
          </select>
        </div>

        <div className='flex my-7 justify-between'>
          <span className='text-gray-700'>Food Availability</span>
          <div className="py-">
           <ToggleButton />
          </div>
        </div>

        {editMyEvent && 
         <div className='flex my-7 justify-between'>
          <span className='text-gray-700'>Live Streaming</span>
          <div className="py-">
           <ToggleButton />
          </div>
         </div>
        }
        <label className=''>About Event</label>
        <textarea rows='3' className='w-full outline-none my-2 rounded-xl relative border p-2'/>
        <div className='flex flex-col my-1'>
         <button onClick={handleCreatedEvent} className='py-2.5 my-2 text-[17px] rounded-lg text-white font-semibold bg-[#649B8E] '>send</button>

         {editMyEvent && 
          <button onClick={handleCreatedEvent} className='py-2 text-[17px] rounded-lg font-semibold border border-[#649B8E]'>Cancel</button>
         }
        </div>

       </div>
     </div>        
    </div>
  )
}

export default CreateEventModal