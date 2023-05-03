import { useState } from 'react'
import wishes from '../../../../Assets/Images/Umeet/wishesTemplate.webp'
import RvspModal from './Modal/RvspModal'
import DetailsOfEvent from './DetailsOfEvent'
import EventGuests from './EventGuests'
import EventChat from './EventChat'

const EventDetails = ({ myEvent, handleDeleteEvent, handleEditMyEvent }) => {
  const [showRvspModal, setShowRvspModal] = useState(false)
  const [details, setDetails] = useState(true)
  const [guests, setGuests] = useState(false)
  const [chat, setChat] = useState(false)

  const handleDetails = ()=>{
    setDetails(true)
    setGuests(false)
    setChat(false)
  }

  const handleGuests = ()=>{
    setDetails(false)
    setGuests(true)
    setChat(false)
  }
  const handleChat = ()=>{
    setDetails(false)
    setGuests(false)
    setChat(true)
  }

  function RenderStatus(){
    if(details) return <DetailsOfEvent myEvent={myEvent} handleDeleteEvent={handleDeleteEvent} handleEditMyEvent={handleEditMyEvent} />
    else if(guests) return <EventGuests />
    else if(chat) return <EventChat />
  }

  return (
  <section className={`w-full mr-1 flex items-center ${chat ? 'mb-0' : 'mb-12'}`}>
    <div className='w-[60%] flex flex-col items-center'>
     <div className='p-3 w-full bg-white rounded-xl'>
      <h3 className='py-2 text-xl font-medium flex justify-center'>Hill pro</h3>
      <div className='w-full overflow-hidden'>
       <img src={wishes} className='w-full h-[300px] object-cover rounded-xl' />
      </div>
      <div className='flex justify-center my-4'>
       <button onClick={()=>setShowRvspModal(true)} className='bg-[#649B8E] rounded-xl text-white font-semibold py-1.5 px-10'>send RVSP</button>
      </div>
     </div>

     <div className='p-2.5 my-3 flex w-full bg-white rounded-xl'>
      <div onClick={handleDetails} className={`${details ? 'bg-[#649B8E] text-white' : 'bg-[#E4E4E4]'} rounded-lg flex justify-center py-1 px-4 w-1/3 cursor-pointer`}>Details</div>
      <div onClick={handleGuests} className={`${guests ? 'bg-[#649B8E] text-white' : 'bg-[#E4E4E4]'} rounded-lg flex justify-center py-1 px-4 w-1/3 mx-2 cursor-pointer`}>Guests</div>
      <div onClick={handleChat} className={`${chat ? 'bg-[#649B8E] text-white' : 'bg-[#E4E4E4]'} rounded-lg flex justify-center py-1 px-4 w-1/3 cursor-pointer`}>Chat</div>
     </div>     

     <RenderStatus />

    </div>
    {showRvspModal && <RvspModal onClose={()=>setShowRvspModal(false)} />}
  </section>
  )
}

export default EventDetails