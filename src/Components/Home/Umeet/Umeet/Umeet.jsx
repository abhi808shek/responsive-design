import BlankEvents from './BlankEvents'
import { HiPlus } from 'react-icons/hi'
import { BsCalendarEvent } from 'react-icons/bs'
import { useState } from 'react'
import { dataList, selectEventList, selectPersonalEventType, selectPublicEventType, selectPoliticalEventType } from '../data'
import SingleEvent from './SingleEvent'
import '../Umeet.css'
import { RxChevronLeft } from 'react-icons/rx'
import CreateEventForm from './CreateEventForm'
import CreateEventModal from './Modal/CreateEventModal'

const Umeet = () => {
  const [selected, SetSelected] = useState(false)
  const [noEvent, setNoEvent] = useState(true)
  const [createEvent, setCreateEvent] = useState(false)
  const [selectSpecificEvent, setSelectSpecificEvent] = useState(false)
  const [selectedSpecificEvent, setSelectedSpecificEvent] = useState('')
  const [yourEvent, setYourEvent] = useState(true)
  const [selectEventType, setSelectEventType] = useState([])

  function EventStatus({ data }){
    if(noEvent){
        return <BlankEvents />
    }else if(createEvent){
        return <CreateEventModal selectedSpecificEvent={selectedSpecificEvent}/>
    }else if(yourEvent){
        return <button className='px-2 py-0.5 text-[12px] rounded border-gray-500 text-gray-700 border'>completed</button>
    }
  }

  const handleSelectEventType = ( data )=>{
    setSelectSpecificEvent(true)
    if(data.title.toLowerCase() == 'personal'){
      setSelectEventType(selectPersonalEventType)
    }else if(data.title.toLowerCase() == 'political'){
      setSelectEventType(selectPoliticalEventType)
    }else if(data.title.toLowerCase() == 'public'){
      setSelectEventType(selectPublicEventType)
    }
  }

  const handleCreateEventForm = (data)=>{
    setNoEvent(false)
    setCreateEvent(true)
    setSelectedSpecificEvent(data.event)
  }

  function SelectSpecificEventType(){
    return (
     <div className='w-full h-full bg-teal-50 p-3'>
      <div className='flex'>
       <RxChevronLeft onClick={()=>setSelectSpecificEvent(false)} className='text-[#649B8E] w-8 h-7 flex items-center cursor-pointer'/>
       <p className='font-semibold mb- w-full flex justify-center'>Create<span className='text-[#579586] pl-1'>Event</span></p>
      </div>
      {
      selectEventType.map((data,i)=>(
       <div key={i} onClick={()=>handleCreateEventForm(data)} className='bg-[#BEFEEE] hover:bg-[#69E4C5] border border-gray-300 animation duration-300 cursor-pointer rounded-xl my-3 p-1 flex'>
        <div className='w-2/6 flex justify-center items-center'>
          <img src={data.img} className='h-12 w-12' />
        </div>
        <div className='4/6 ml-3 flex items-center'>
         <p className='text-[15px] text-gray-700 text-[17px] font-semibold text-[#649B8E]'>{data.event}</p>
        </div>
       </div>      
      ))
    }
    </div>
    )
  }

  function SelectEvent(){
    return (
      <div className='w-full h-full bg-teal-50 p-3'>
      <p className='font-semibold mb-2 flex justify-center'>Select<span className='text-[#579586] pl-1'>Event</span></p>
      {
      selectEventList.map((data,i)=>(
       <div key={i} onClick={()=>handleSelectEventType(data)} className='bg-[#BEFEEE] hover:bg-[#69E4C5] animation duration-300 cursor-pointer rounded-2xl my-1.5 p-1 flex min-h-[110px]'>
        <div className='w-2/6 flex justify-center items-center'>
         <div className='rounded-full border-[3px] flex justify-center items-center h-20 w-20 p-2.5 border-[#579586]'>
          <img src={data.img} className='p-1' />
         </div>
        </div>
        <div className='4/6 ml-3'>
         <h3 className='text-[#579586] text-[18px] font-semibold'>{data.title}</h3>
         <p className='text-[15px] text-gray-700'>{data.events}</p>
        </div>
       </div>      
      ))
    }
    </div>
    )
  }

  function AllEvents(){
    return (
     <section className='border overflow-y-scroll hideScroll border-gray-400 bg-white rounded mr-2 w-full h-full'>
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
    )
  }

  return (
    <div className='flex bg-[#e4e7ec] fullCover'>
      {/* Left All Events page */}
     <section className='border rounded mr-2 w-2/6 mt-[46px]'>
      {
        createEvent ? (
        <>
          {
            selectSpecificEvent ? <SelectSpecificEventType /> : <SelectEvent />        
          } 
        </>
        ) : <AllEvents />
      }
     </section>

     {/* Right All Events page */}
     <section className='w-4/6 fullCover'>
      {/* events top select */}
      <div className='flex pl-6 bg-white border mr-1 py-1 border-gray-400 my-1 rounded-lg'>
        <div onClick={()=>setCreateEvent(true)} className='flex items-center cursor-pointer'>
         <HiPlus className='h-7 w-7 rounded-full bg-gray-200'/>
         <span className='pl-1'>Create Event</span>
        </div>

        <div className='flex items-center pl-12 cursor-pointer'>
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