import upload from '../../../../../Assets/Images/upload.jpeg'
import guest from '../../../../../Assets/Images/Umeet/Umeet-Main/Group 1054.png'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import AddGuestModal from './AddGuestModal'

const CreateEventModal = ({ selectedSpecificEvent }) => {
  const [enabled, setEnabled] = useState(false)
  const [addGroup, setAddGroup] = useState(false)

  return (
    <div className='border fullPage bg-white border-gray-300'>
     <div className='w-[96%] border bg-white px-3'>
       <div className='px-3 my-2.5 text-[17px] font-semibold'>Create Event</div>
       <div className='border-2 mx-3'></div>
       <div className='px-7'>
        <p className='pt-4 pb-2 text-[#649B8E]'>{ selectedSpecificEvent }</p>
        <hr />
        <div className='my-3'>
         <label for="myfile"><img src={upload} className=''/></label>
         <input type="file" id="myfile" accept="image/*" className='hidden' />        
        </div>
        <p className='flex justify-center py-2 text-[#649B8E]'>Select Template</p>
        <input className='border-b border-gray-300 h-10 my-2 w-full' placeholder='Event Title*'/>
        <input className='border-b border-gray-300 h-10 my-2 w-full' placeholder='Start Date & Time*'/>
        <input className='border-b border-gray-300 h-10 my-2 w-full' placeholder='End Date & Time*'/>
        <div className='my-2 flex items-center'>
         <span className='font-bold text-xl text-gray-600'>Event Mode</span>
         <div className='px-6 flex items-center'>
          <input type='radio' className='accent-[#649B8E] w-5 h-5' id='cation' /><label for='cation' className='pl-2'>Cation</label>
         </div>
         <div className='px-6 flex items-center'>
          <input type='radio' className='accent-[#649B8E] w-5 h-5' id='location'/><label for='location' className='pl-2'>Location</label>
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

        <div className='flex bg-red-100 items-center my-2'>
         <img onClick={()=>setAddGroup(true)} src={guest} className='cursor-pointer' />
         <label onClick={()=>setAddGroup(true)} className='pl-5 cursor-pointer text-[#649B8E]'>Add Guests</label>
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
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-blue-400' : 'bg-gray-100'}
              relative inline-flex border h-[29px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-6' : 'translate-x-1'}
                pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
         </div>
        </div>
        <label className=''>About Event</label>
        <textarea rows='3' className='w-full outline-none my-2 rounded-xl relative border p-2'/>

        <button className='w-full py-2.5 my-3 text-[17px] rounded-lg text-white font-semibold bg-[#649B8E]'>send</button>
       </div>
     </div>
    {addGroup && <AddGuestModal />}
    </div>
  )
}

export default CreateEventModal