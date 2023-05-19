import upload from '../../../../../Assets/Images/upload.jpeg'
import guest from '../../../../../Assets/Images/Umeet/Umeet-Main/Group 1054.png'
import { useState, useEffect } from 'react'
import ToggleButton from './ToggleButton';
import { createEvent, updateEvent } from "../../../../../redux/actionCreators/umeetActionCreator";
import { useDispatch, useSelector } from 'react-redux'
import AutocompletePlace from '../../../../googlemap/AutocompletePlace';
import ToastWarning from '../../../../common/ToastWarning';
import { toast } from 'react-toastify';

const CreateEventModal = ({ selectedSpecificEvent, editMyEvent,
  handleCreatedEvent, handleShowTemplate, handleShowAddGroup,
  handleShowAddPoliticalGroup, whichType, politicalPartyFeedback,
  politicalPartyMeeting, handlePoliticalFeedbackQuestion,
  publicShopOpening, handlePersonalOtherModal }) => {

  const [formState, setFormState] = useState({
    eventName: '',
    eventdateAndTime: '',
    eventAddress: '',
    eventHostPhnNumber: '',
    hostmailid: '',
    eventEndDate: ''
  })

  const dispatch = useDispatch()
  const { profileReducer } = useSelector(state => state);
  const phoneNumberRules = /[0-9]{10}$/;


  const [enabled, setEnabled] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      setSelectedImage(URL.createObjectURL(image));
    }
  };

  const handleShowGroup = () => {
    if (whichType == 'personal') {
      if (selectedSpecificEvent == 'Re-Union') {
        handleShowAddGroup()
      } else {
        handlePersonalOtherModal()
      }
    }
    else if (whichType == 'political') handleShowAddPoliticalGroup()
    else if (whichType == 'public') handleShowAddPoliticalGroup()
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleLocation = (location) => {
    setFormState({...formState, location})
  }

  const postData = {
    "eventName": formState.eventName,
    "date_created": new Date(),
    "event_category": whichType,
    "eventTemplate": "need",
    "profileid": profileReducer.profile.id,
    "eventdateAndTime": formState.eventdateAndTime,
    "eventAddress": formState.eventAddress,
    "eventHostPhnNumber": formState.eventHostPhnNumber,
    "eventfrndEducationType": "need",
    "eventPrivacyType": "need",
    "eventFrndId": "need",
    "eventType": selectedSpecificEvent,
    "hostmailid": formState.hostmailid,
    "id": '608a36dee1c7ec43cf93644f'
  }

  const handleCreateEvent = () => {
    if(!postData?.eventName) {
      return ToastWarning('Event name is required')
    }
    if(whichType === 'personal'){
      if (!formState?.eventdateAndTime) {
         return ToastWarning("Start date and time is required");
      }else if(!formState?.eventEndDate){
        return ToastWarning("End date and time is required")
      }
      else if (phoneNumberRules.test(formState?.eventHostPhnNumber)) {
        return ToastWarning("Add valid mobile number")
      }else if(formState.hostmailid.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        return ToastWarning("Add valid host mail id")
      }
    }
    dispatch(createEvent(postData)).then((res) => {
       if(res?.status){
        toast.success(res?.message)
      }else{
      toast.error(res?.message)
      }
    })
  }
  // useEffect(()=>{
  //   if(eventCreateSuccess) handleCreatedEvent()
  // },[eventCreateSuccess])

  return (
    <div className='lg:fullPage bg-white border-gray-300'>
      <div className={`${editMyEvent ? 'lg:w-[65%]' : 'w-full md:w-[96%]'} border bg-white md:px-2 lg:px-3`}>
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
              <p className='pt-4 pb-2 text-[#649B8E]'>{selectedSpecificEvent}</p>
              <hr />
            </>
          )
          }
          <div className='my-3'>
            <label htmlFor="myfile">
              {selectedImage ? (
                <img src={selectedImage} alt="Selected" className='w-full h-[350px] object-cover' />
              ) : <img src={upload} className='w-full h-[350px] object-cover' />
              }
            </label>
            <input type="file" id="myfile" accept="image/*" onChange={handleImageChange} className='hidden' />
          </div>
          <span onClick={handleShowTemplate} className='flex cursor-pointer justify-center py-2 text-[#649B8E]'>Select Template</span>
          <input name='eventName' onChange={handleChange} className='border-b border-gray-300 outline-none h-10 my-2 w-full' placeholder='Event Title*' />
          <input name='eventdateAndTime' onChange={handleChange} className='border-b outline-none border-gray-300 h-10 my-2 w-full' placeholder='Start Date & Time*' />
          <input name='eventEndDate' onChange={handleChange} className='border-b outline-none border-gray-300 h-10 my-2 w-full' placeholder='End Date & Time*' />
          <div className={`${(politicalPartyFeedback || publicShopOpening) ? 'hidden' : ''} my-2 flex items-center`}>
            <span className='font-bold text-xl text-gray-600'>Event Mode</span>
            <div className='px-6 flex items-center'>
              <input type='radio' className='accent-[#649B8E] w-5 h-5' id='cation' /><label for='cation' className='pl-2'>At Location</label>
            </div>
            <div className='px-6 flex items-center'>
              <input type='radio' className='accent-[#649B8E] w-5 h-5' id='location' /><label for='location' className='pl-2'>Online</label>
            </div>
          </div>

          {/* <input name='eventAddress' onChange={handleChange} className={`${(politicalPartyFeedback || politicalPartyMeeting) ? 'hidden' : ''} border-b border-gray-300 h-10 my-2 w-full`} placeholder='Location*' /> */}
          <div className={`${(politicalPartyFeedback || politicalPartyMeeting) ? 'hidden' : ''}`}>
             <AutocompletePlace livePlace={handleLocation} placeholder={'Location'} />
          </div>

          <div className={`${(politicalPartyFeedback || publicShopOpening || politicalPartyMeeting) ? 'hidden' : ''} flex items-center`}>
            <div>
              <select className='h-10 outline-none border-b bg-white px-6'>
                <option>+91</option>
                <option>USA</option>
              </select>
            </div>
            <input name='eventHostPhnNumber' onChange={handleChange} className='border-b ml-3 border-gray-300 pl-2 h-10 my-2 w-full' placeholder='Host Phone Number*' />
          </div>

          <input type='email' name='hostmailid' onChange={handleChange} className={`${(politicalPartyFeedback || publicShopOpening || politicalPartyMeeting) ? 'hidden' : ''} border-b border-gray-300 h-10 my-2 w-full`} placeholder='Host Mail Id*' />

          <div className='flex items-center my-2'>
            <img onClick={handleShowGroup} src={guest} className='cursor-pointer' />
            <label onClick={handleShowGroup} className='pl-5 cursor-pointer text-[#649B8E]'>Add Guests</label>
          </div>

          <div className={`${(politicalPartyFeedback || politicalPartyMeeting) ? 'hidden' : ''} border-b`}>
            <select className='h-10 outline-none w-full border-b bg-white text-gray-600'>
              {publicShopOpening && (<>
                <option>Chat Type - Hide</option>
                <option>Chat Type - Show</option>
              </>)
              }
              <option>Guest List & Display to all</option>
              <option>USA</option>
            </select>
          </div>

          <div className={`${politicalPartyFeedback ? 'hidden' : ''} flex my-7 justify-between`}>
            <span className='text-gray-700'>Food Availability</span>
            <div className="py-">
              <ToggleButton />
            </div>
          </div>

          {editMyEvent &&
            <div className={`${politicalPartyFeedback ? 'hidden' : ''} flex my-7 justify-between`}>
              <span className='text-gray-700'>Live Streaming</span>
              <div className="py-">
                <ToggleButton />
              </div>
            </div>
          }
          <label className=''>About Event</label>
          <textarea rows='3' placeholder='say something...' className='w-full outline-none my-2 rounded-xl relative border p-2' />

          <div className={`${politicalPartyFeedback ? '' : 'hidden'} `}>
            <p onClick={handlePoliticalFeedbackQuestion} className='py-2 font-bold text-[18px] cursor-pointer text-[#519d8b]'>Create Your Question</p>
            <label className=''>Your Question</label>
            <textarea placeholder='What about it?' rows='3' className='w-full outline-none my-2 rounded-xl relative border p-2' />
          </div>

          <div className={`${politicalPartyFeedback ? '' : 'hidden'} flex my-7 justify-between`}>
            <span className='text-gray-700'>Feedback only visible to me</span>
            <div className="py-">
              <ToggleButton />
            </div>
          </div>

          <div className='flex flex-col my-1'>
            {editMyEvent ?
              <button onClick={() => dispatch(updateEvent(postData))} className='py-2.5 my-2 text-[17px] rounded-lg text-white font-semibold bg-[#649B8E] '>Update</button>
              : <button onClick={handleCreateEvent} className='py-2.5 my-2 text-[17px] rounded-lg text-white font-semibold bg-[#649B8E] '>send</button>
            }
            <button className='py-2 text-[17px] rounded-lg font-semibold border border-[#649B8E]'>Cancel</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreateEventModal