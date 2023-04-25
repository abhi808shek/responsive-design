import BlankEvents from './BlankEvents'
import { HiPlus } from 'react-icons/hi'
import { BsCalendarEvent } from 'react-icons/bs'
import { useState } from 'react'
import { dataList } from '../data'
import SingleEvent from './SingleEvent'
import '../Umeet.css'

const Umeet = () => {
  const [selected, SetSelected] = useState(false)
  const [noEvent, setNoEvent] = useState(true)

  function EventStatus({ data }){
    if(noEvent){
        return <BlankEvents />
    }else {
        return <button className='px-2 py-0.5 text-[12px] rounded border-gray-500 text-gray-700 border'>completed</button>
    }
  }

  return (
    <div className='flex'>
      {/* Left All Events page */}
     <section className='border border-gray-400 rounded mr-2 w-2/6 mt-[46px]'>
      {/* */}
      <div>
        <div className='flex justify-center my-2'>
         <button className='py-1 rounded-lg text-white bg-[#649b8e] mx-2 px-5'>Invited Events</button>
         <button className='py-1 rounded-lg bg-[#649b8e] mx-2 px-5'>My Events</button>
        </div>
        <div className='flex justify-end text-sm items-center my-2 mr-5'>
         <span className='text-gray-600'>view by:</span>
         <select className='h-8 outline-none bg-white mx-2 px-6 rounded border-gray-400 border'>
          <option>Events</option>
          <option>All Events</option>
         </select>
        </div>
      </div>

      <div className=''>
       <SingleEvent dataList={dataList}/>
      </div>
     </section>

     {/* Right All Events page */}
     <section className='w-4/6'>
      {/* events top select */}
      <div className='flex pl-6 border mr-1 py-1 border-gray-400 my-1 rounded-lg'>
        <div className='flex items-center'>
         <HiPlus className='h-7 w-7 rounded-full bg-gray-200'/>
         <span className='pl-1'>Create Event</span>
        </div>

        <div className='flex items-center pl-12'>
         <BsCalendarEvent className='h-7 w-7 rounded-full'/>
         <span className='pl-1'>Your Events</span>
        </div>
      </div>

      <EventStatus />
     </section>

    </div>
  )
}

export default Umeet