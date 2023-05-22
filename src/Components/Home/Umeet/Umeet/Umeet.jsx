import BlankEvents from './BlankEvents'
import { HiPlus } from 'react-icons/hi'
import { BsCalendarEvent } from 'react-icons/bs'
import { useState } from 'react'
import { dataList, myEventDataList, selectEventList, selectPersonalEventType, selectPublicEventType, selectPoliticalEventType } from '../data'
import SingleEvent from './SingleEvent'
import '../Umeet.css'
import { RxChevronLeft } from 'react-icons/rx'
import CreateEventModal from './Modal/CreateEventModal'
import EventDetails from './EventDetails'
import EventDeleteModal from './Modal/EventDeleteModal'
import EventShareModal from './Modal/EventShareModal'
import CreatedEvent from './CreatedEvent'
import RvspModal from './Modal/RvspModal'
import ChooseTemplate from './Modal/ChooseTemplate'
import AddGuestModal from './Modal/AddGuestModal'
import SuccessCreate from './SuccessCreate'
import PoliticalGuestAddModal from './Modal/PoliticalGuestAddModal'
import PoliticalFeedbackQuestion from './Modal/PoliticalFeedbackQuestion'
import PersonalOtherGuest from './Modal/PersonalOtherGuest'
import ViewFeedbacks from './Modal/ViewFeedbacks'

export default function Umeet(){
  const [selected, SetSelected] = useState(false)
  const [noCreateEvent, setNoCreateEvent] = useState(true)
  const [noMyEvent, setNoMyEvent] = useState(false)
  const [createEvent, setCreateEvent] = useState(false)
  const [editMyEvent, setEditMyEvent] = useState(false)
  const [eventDetails, setEventDetails] = useState(false)
  const [selectSpecificEvent, setSelectSpecificEvent] = useState(false)
  const [selectedSpecificEvent, setSelectedSpecificEvent] = useState(null)
  const [myEvent, setMyEvent] = useState(false)
  const [showDeleteMyEvent, setShowDeleteMyEvent] = useState(false)
  const [showShareMyEvent, setShowShareMyEvent] = useState(false)
  const [eventCreated, setEventCreated] = useState(false)
  const [eventSuccess, setEventSuccess] = useState(false)
  const [selectEventType, setSelectEventType] = useState([])
  const [singleEvent, setSingleEvent] = useState('')

  const [showRvspModal, setShowRvspModal] = useState(false)
  const [showTemplate, setShowTemplate] = useState(false)
  const [showAddGroup, setShowAddGroup] = useState(false)
  const [showAddGroupPersonalOthers, setShowAddGroupPersonalOthers] = useState(false)
  const [showPoliticalAddGroup, setShowPoliticalAddGroup] = useState(false)
  const [showPoliticalFeedbackQuestionModal, setShowPoliticalFeedbackQuestionModal] = useState(false)
  const [showFeedbackModule, setShowFeedbackModule] = useState(false)

  const [state, setState] = useState({})
  const { templateImage }  = state

  {/* type of event personal, political, public local state*/}
  const [whichType, setWhichType] = useState('')

  // re-union related states
  const [education, setEducation] = useState('')

  {/* single event states*/}
  const [politicalPartyFeedback, setPoliticalPartyFeedback] = useState(false)
  const [politicalPartyMeeting, setPoliticalPartyMeeting] = useState(false)
  const [publicShopOpening, setPublicShopOpening] = useState(false)

  function EventStatus({ data }){
    if(noCreateEvent){
      return <BlankEvents event='Create Events' createEvent={createEvent} />
    }else if(noMyEvent){
      return <BlankEvents event='Your Events' createEvent={createEvent} />
    }else if(createEvent){
      return <CreateEventModal 
              selectedSpecificEvent={selectedSpecificEvent}
              editMyEvent={editMyEvent}
              whichType={whichType}
              handleCreatedEvent={handleCreatedEvent}
              handleShowTemplate={()=>setShowTemplate(true)}
              handleShowAddGroup={()=>setShowAddGroup(true)}
              handleShowAddPoliticalGroup={()=>setShowPoliticalAddGroup(true)}
              politicalPartyFeedback={politicalPartyFeedback}
              handlePoliticalFeedbackQuestion={()=>setShowPoliticalFeedbackQuestionModal(true)}
              politicalPartyMeeting={politicalPartyMeeting}
              publicShopOpening={publicShopOpening}
              handlePersonalOtherModal={()=>setShowAddGroupPersonalOthers(true)}
              />
    }else if(eventCreated){
      return <SuccessCreate />
    }else if(eventDetails){
      return <EventDetails 
              handleEditEvent={handleEditEvent} 
              handleDeleteEvent={()=>setShowDeleteMyEvent(true)} 
              handleShareEvent={()=>setShowShareMyEvent(true)} 
              myEvent={myEvent} 
              handleRvspModal={()=>setShowRvspModal(true)}
              singleEvent={singleEvent}
              handleFeedbacks={()=>setShowFeedbackModule(true)}
              />
    }
  }

  const handleEditEvent = ()=>{
    setEventDetails(false)
    setEditMyEvent(true); 
    setCreateEvent(true);
  }

  const handleCreatedEvent = ()=>{
    setNoCreateEvent(false)
    setEventCreated(true)
    setNoMyEvent(false)    
    setCreateEvent(false)
    setSelectedSpecificEvent(null)
  }

  const handleMyEvent = ()=>{
    setNoCreateEvent(false)
    setCreateEvent(false)
    setEventDetails(false)
    setNoMyEvent(true) 
    setSelectedSpecificEvent(null)   
  }

  const handleCreateEvent = ()=>{
    setNoCreateEvent(true)
    setNoMyEvent(false)
    setEditMyEvent(false)
    setEventDetails(false)
    setCreateEvent(true)
    setSelectSpecificEvent(false)
    setSelectedSpecificEvent(false)
  }

  const handleTemplateImage = (url) => {
    setState({...state, templateImage: url})
  }

  const handleEventDetails = (idData)=>{
    setNoCreateEvent(false)
    setCreateEvent(false)
    setNoMyEvent(false)
    setEventCreated(false)
    setEventDetails(true)
    setSingleEvent(idData)
  }

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      setSelectedImage(URL.createObjectURL(image));
    }
  };
  
  const handleSelectEventType = ( data )=>{
    setSelectSpecificEvent(true)
    if(data.title.toLowerCase() == 'personal'){
      setSelectEventType(selectPersonalEventType)
      setWhichType(data.title.toLowerCase())
    }else if(data.title.toLowerCase() == 'political'){
      setSelectEventType(selectPoliticalEventType)
      setWhichType(data.title.toLowerCase())
    }else if(data.title.toLowerCase() == 'public'){
      setSelectEventType(selectPublicEventType)
      setWhichType(data.title.toLowerCase())
    }
  }

  const handleCreateEventForm = (data)=>{
    setNoCreateEvent(false)
    setCreateEvent(true)
    setEditMyEvent(false)
    setSelectedSpecificEvent(data.event)
    if(data.event == 'Party Feedbacks'){
      setPoliticalPartyFeedback(true)
    }else if(data.event == 'Party Meeting'){
      setPoliticalPartyMeeting(true)
      setPoliticalPartyFeedback(false)
    }else if(data.event == 'Party Candidates Feedback'){
      setPoliticalPartyFeedback(true)
    }else if(data.event == 'Shop Opening'){
      setPoliticalPartyMeeting(false)
      setPoliticalPartyFeedback(false)
      setPublicShopOpening(true)
    }else if(data.event == 'Product Launch'){
      setPoliticalPartyMeeting(false)
      setPoliticalPartyFeedback(false)
      setPublicShopOpening(true)
    }else if(data.event == 'Public Meeting'){
      setPoliticalPartyMeeting(false)
      setPoliticalPartyFeedback(false)
      setPublicShopOpening(true)
    }else if(data.event == 'Public Feedback'){
      setPoliticalPartyFeedback(true)
    }else{
      setPoliticalPartyFeedback(false)
      setPoliticalPartyMeeting(false)
      setPoliticalPartyFeedback(false)
      setPublicShopOpening(false)      
    }
  }

  function SelectSpecificEventType(){
    return (
     <div className='w-full h-full bg-teal-50 p-3 overflow-y-scroll hideScroll'>
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
  
  function AllEvents({ handleEditEvent }){

    return (
     <section className='border overflow-y-scroll hideScroll border-gray-400 bg-white rounded mr-2 w-full h-full'>
      {/* */}
      <div>
        <div className='flex justify-center font-medium my-2 mt-3'>
         <button onClick={()=>setMyEvent(false)} className={`${myEvent ? 'bg-[#E4E4E4]' : 'bg-[#649b8e] text-white'} py-1.5 rounded-md mx-2 px-5 animation duration-150`}>Invited Events</button>
         <button onClick={()=>setMyEvent(true)} className={`${myEvent ? 'bg-[#649b8e] text-white' : 'bg-[#E4E4E4]'} py-1.5 rounded-md mx-2 px-5 animation duration-150`}>My Events</button>
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
       <SingleEvent 
        dataList={dataList} 
        myEvent={myEvent} 
        myEventDataList={myEventDataList} 
        handleEventDetails={handleEventDetails} 
        handleDeleteEvent={()=>setShowDeleteMyEvent(true)} 
        handleEditEvent={handleEditEvent}
        handleSingleEventDetail={handleEventDetails}
        />
      </div>
     </section>
    )
  }

  return (
    <div className={`flex flex-col-reverse md:flex-row bg-[#e4e7ec] relative md:fullCover overflow-y-scroll hideScroll`}>
      {/* Left All Events page */}
     <section className={`${(eventDetails || selectedSpecificEvent) ? 'hidden md:flex' : ''} border relative md:fullPage rounded md:mr-2 w-full md:w-[46%] lg:w-2/6 md:mt-[46px]`}>
      {
        createEvent ? (
        <>
          {
            selectSpecificEvent ? <SelectSpecificEventType /> : <SelectEvent />        
          } 
        </>
        ) : <AllEvents handleEditEvent={handleEditEvent} />
      }
     </section>

     {/* Right All Events page */}
     <section className='w-full md:w-[54%] lg:w-4/6 relative bg-[#e4e7ec]'>
      {/* events top select */}
      <div className='flex pl-6 bg-white border mr-1 py-1 border-gray-400 my-1 rounded-lg'>
        <div onClick={handleCreateEvent} className={`flex items-center cursor-pointer ${createEvent ? 'text-[#649B8E]' : ''}`}>
         <HiPlus className='h-7 w-7 rounded-full bg-gray-200'/>
         <span className='pl-1'>Create Event</span>
        </div>

        <div onClick={handleMyEvent} className={`flex items-center pl-12 cursor-pointer ${createEvent ? '' : 'text-[#649B8E]'}`}>
         <BsCalendarEvent className='h-7 w-7 rounded-full'/>
         <span className='pl-1'>Your Events</span>
        </div>
      </div>

      <EventStatus />
     </section>
     {showDeleteMyEvent && <EventDeleteModal onClose={()=>setShowDeleteMyEvent(false)} />}
     {showShareMyEvent && <EventShareModal onClose={()=>setShowShareMyEvent(false)} />}
     {showRvspModal && <RvspModal onClose={()=>setShowRvspModal(false)} />}
     {showTemplate && <ChooseTemplate onClose={()=>setShowTemplate(false)} saveTemplate={handleTemplateImage} handleImageChange={handleImageChange} />}
     {showAddGroup && <AddGuestModal education={education} handleEducation={(eduData)=>setEducation(eduData)} onClose={()=>setShowAddGroup(false)} />}
     {showAddGroupPersonalOthers && <PersonalOtherGuest onClose={()=>setShowAddGroupPersonalOthers(false)} />}
     {showPoliticalAddGroup && <PoliticalGuestAddModal onClose={()=>setShowPoliticalAddGroup(false)} />}  
     {showPoliticalFeedbackQuestionModal&& <PoliticalFeedbackQuestion onClose={()=>setShowPoliticalFeedbackQuestionModal(false)} />}
     {showFeedbackModule&& <ViewFeedbacks onClose={()=>setShowFeedbackModule(false)} />}
    </div>
  )
}
