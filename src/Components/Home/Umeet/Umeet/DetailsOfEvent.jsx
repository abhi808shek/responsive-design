import navigation from '../../../../Assets/Images/Umeet/Umeet-Main/Umeet navigation.png'
import { useState } from 'react'

export default function DetailsOfEvent({ myEvent, handleDeleteEvent, handleEditEvent,
    handleShareEvent }){

    const [personal, setPersonal] = useState(true)
    const [publics, setPublics] = useState(false)
    const [political, setPolitical] = useState(false)
    const [online, setOnline] = useState(false)
    const [politicalPartyFeedback, setPoliticalPartyFeedback] = useState(false)
    const [isPoliticalPartyFeedback, setIsPoliticalPartyFeedback] = useState(false)

    const handleFeedback = ()=>{
     setIsPoliticalPartyFeedback(true)
    }

    return (
     <div className='p-4 bg-white rounded-xl w-full'>
      <div className={`${politicalPartyFeedback ? 'hidden' : ''} mb-1`}>
       <span className='font-bold'>Responses</span>
       <span className='ml-3'>10 of 25 responded</span>
      </div>
      <div className={`${politicalPartyFeedback ? 'hidden' : ''} flex py-3 my-2 border-b-2 border-gray-300`}>
       <div className='w-1/3 border-r-2 border-gray-300 py-3 flex justify-center items-center'><span className='p-2 bg-green-600 w-10 flex justify-center mr-2 items-center h-10 rounded-full text-white'>5</span>Yes</div>
       <div className='w-1/3 border-r-2 border-gray-300 py-3 flex justify-center items-center'><span className='p-2 bg-red-600 w-10 flex justify-center mr-2 items-center h-10 rounded-full text-white'>4</span>Yes</div>
       <div className='w-1/3  flex justify-center items-center'><span className='p-2 bg-yellow-600 w-10 flex justify-center mr-2 items-center h-10 rounded-full text-white'>2</span>Yes</div>
      </div>

      <div className=''>

       <div className={`${politicalPartyFeedback ? '' : 'hidden'} my-3 border-b`}>
        <p className='z-10 text-[17px] left-4 font-semibold'>How was the last meeting, Is this event is useful?</p>
        <section>
         <div onClick={handleFeedback} className='py-1.5 px-4 cursor-pointer my-1.5 font-bold w-full lg:w-[60%] bg-[#e7e1e1] rounded-2xl flex justify-between items-center'>
          <span className='font-bold'>Bad</span>
          <span className='p-1 text-white rounded-full flex justify-center items-center h-6 w-6 bg-green-600'>0</span>
         </div>
         <div onClick={handleFeedback} className='py-1.5 px-4 cursor-pointer my-1.5 font-bold w-full lg:w-[60%] bg-[#e7e1e1] rounded-2xl flex justify-between items-center'>
          <span className='font-bold'>Ok</span>
          <span className='p-1 text-white rounded-full flex justify-center items-center h-6 w-6 bg-green-600'>0</span>
         </div>
         <div onClick={handleFeedback} className='py-1.5 px-4 my-1.5 cursor-pointer font-bold w-full lg:w-[60%] bg-[#e7e1e1] rounded-2xl flex justify-between items-center'>
          <span className='font-bold'>Good</span>
          <span className='p-1 text-white rounded-full flex justify-center items-center h-6 w-6 bg-green-600'>0</span>
         </div>
         <div onClick={handleFeedback} className='py-1.5 px-4 my-1.5 cursor-pointer font-bold w-full lg:w-[60%] bg-[#e7e1e1] rounded-2xl flex justify-between items-center'>
          <span className='font-bold'>Excellent</span>
          <span className='p-1 text-white rounded-full flex justify-center items-center h-6 w-6 bg-green-600'>0</span>
         </div>                           
        </section>
        {isPoliticalPartyFeedback &&(
        <div className='relative w-full lg:w-[60%]'>
         <label className='absolute z-10 text-[10px] left-4 bg-white px-2 font-semibold text-gray-400'>Add Your Feedback here</label>
         <textarea rows='2' className='w-full outline-none my-1 rounded-lg border border-gray-300 p-2'/>
         <p className='cursor-pointer text-[#649B8E] text-[15px] flex justify-end font-bold'>Send Vote</p>
        </div>
        )}
        
        <p className='w-full lg:w-[60%] cursor-pointer py-1.5 text-[#649B8E] flex justify-center mb-1 font-bold'>View Feedbacks <span className='text-gray-400 pl-4'>public</span></p>        
       </div> 

       <div className='flex mb-3'>
        <span className='w-1/3'>Hostedt BY</span>
        <span className='w-2/3'>:<span className='ml-3 font-semibold'>Ravichandra Ashwin</span></span>
       </div>
       <div className={`${politicalPartyFeedback ? 'hidden' : ''} flex mb-3`}>
        <span className='w-1/3'>Mobile No</span>
        <span className='w-2/3'>:<span className='ml-3 font-bold'>+1 8146369384</span></span>
       </div>
       <div className={`${politicalPartyFeedback ? 'hidden' : ''} flex mb-3`}>
        <span className='w-1/3'>Food Availability</span>
        <span className='w-2/3'>:<span className='ml-3 font-bold'>Yes</span></span>
       </div>
       <div className={`${politicalPartyFeedback ? 'hidden' : ''} flex mb-3`}>
        <span className='w-1/3'>Event Live Stream</span>
        <span className='w-2/3'>:<span className='ml-3 font-bold'>Yes</span></span>
       </div>
       {online ? (
       <div className='flex mb-3'>
        <div className='w-1/3'>Online</div>
        <div className='w-2/3 flex text-[#649B8E]'>:<div className='ml-3 font-bold cursor-pointer'>www.uynite.com</div></div>        
       </div> ) : (
       <div className={`${politicalPartyFeedback ? 'hidden' : ''} flex mb-3`}>
        <div className='w-1/3'>Location</div>
        <div className='w-2/3 flex'>:<div className='ml-3 font-bold'>168, Address Living, South Africa - 626987</div><img src={navigation} className='w-8 h-8 cursor-pointer' /></div>        
       </div>
       )}

       {(political || politicalPartyFeedback) && (<>
       <div className='flex mb-3'>        
        <span className='w-1/3'>Start Date & Time</span>
        <div className='flex flex-col w-2/3'>
         <span className=''>:<span className='ml-3 font-bold'>06:00 pm - 12.00 pm, 28th Apr 2023</span></span>
        </div>        
       </div>
       <div className='flex mb-3'>        
        <span className='w-1/3'>End Date & Time</span>
        <div className='flex flex-col w-2/3'>
         <span className=''>:<span className='ml-3 font-bold'>06:00 pm - 12.00 pm, 28th Apr 2023</span></span>
         <span className={`${politicalPartyFeedback ? 'hidden' : ''} text-[#649B8E] ml-3 font-semibold cursor-pointer`}>Add to calender</span>
        </div>        
       </div>
        </>)}      

       {personal && (
        <div className={`${politicalPartyFeedback ? 'hidden' : ''} flex mb-3`}>        
         <span className='w-1/3'>Date & Time</span>
         <div className='flex flex-col w-2/3'>
          <span className=''>:<span className='ml-3 font-bold'>06:00 pm - 12.00 pm, 28th Apr 2023</span></span>
          <span className='text-[#649B8E] ml-3 font-semibold cursor-pointer'>Add to calender</span>
         </div>        
        </div>
        )}

       <div className='flex pb-4 border-b-2 border-gray-300'>
        <span className='w-1/3'>About</span>
        <span className='w-2/3'>:<span className='ml-3 font-bold'>Go like a fire</span></span>
       </div>
      </div>            
      
      <div className='flex flex-col justify-end items-end py-2 pb-12'>
       {
        myEvent && (
        <>
         <button onClick={handleEditEvent} className='py-1 w-40 my-1.5 px-4 rounded text-[#649B8E] border border-[#649B8E]'>Edit Details</button>
         <button onClick={handleDeleteEvent} className='py-1 w-40 my-1.5 px-4 rounded text-[#649B8E] border border-[#649B8E]'>Delete Event</button>
        </>
        )
      }
       <button onClick={handleShareEvent} className='py-1 w-40 my-1.5 px-4 rounded text-[#649B8E] border border-[#649B8E]'>Share Invitation</button>
      </div>

     </div>
    )
}