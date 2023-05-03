import UmeetNotAttending from '../../../../Assets/Images/Umeet/Umeet-Main/Umeet-NotAttending.png'
import UmeetAttending from '../../../../Assets/Images/Umeet/Umeet-Main/Umeet-Attending.png'
import Umeetmaybe from '../../../../Assets/Images/Umeet/Umeet-Main/Umeet-maybe.png'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'
import editImg from '../../../../Assets/Images/Edit profile.png'
import deleteImg from '../../../../Assets/Images/Delete.png'
import shareImg from '../../../../Assets/Images/External share.png'

function EventStatus({ data }){
    if(data.status.toLowerCase() == 'attending'){
       	return <img src={UmeetAttending} className='h-10 w-10 cursor-pointer'/>
    }else if(data.status.toLowerCase() == 'not attending'){
       	return <img src={UmeetNotAttending} className='h-10 w-10 cursor-pointer'/>
    }else if(data.status.toLowerCase() == 'pending'){
       	return <img src={Umeetmaybe} className='h-10 w-10 cursor-pointer'/>
    }else if(data.status.toLowerCase() == 'completed'){
       	return <button className='px-2 py-0.5 text-[12px] rounded border-gray-500 text-gray-700 border'>completed</button>
    }else return null
}

const SingleEvent = ({ dataList, myEventataList, handleEventDetails, myEvent, handleDeleteEvent }) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
   <>
   {
    myEvent ? ( <>
     { myEventataList &&
     myEventataList.map((data,i)=>(
      <div key={i} onClick={handleEventDetails} className='relative flex p-2.5 justify-between m-1 my-1.5 border rounded-xl border-gray-300'>
       {/* Img section */}
       <div className='w-1/4 flex items-center justify-center'>
        <img src={data.img} className='w-full h-5/6 object-cover rounded-md' />
       </div>
      {/* center section */}
       <div className='2/4 flex flex-col'>
        <p className='text-[#649b8e] font-medium text-[14px]'>{data.title}</p>
        <span className='text-gray-600 text-[12px]'>{data.time}</span>
                
       </div>
      {/* End status section */}
      {data.status.toLowerCase() == 'completed' ? (
        <div className='w-1/4 flex items-center justify-center'>
         <EventStatus data={data} handleEventDetails={handleEventDetails} />
        </div>
        ) : (
        <div className='w-1/4 flex justify-end'>
         <BsThreeDots onClick={()=>setShowDetail(!showDetail)} className='w-8 h-8 cursor-pointer mr-2 text-gray-700'/>
        {
        showDetail ? (
         <section className='absolute z-20 right-[4%] top-[45%] border bg-white border-gray-300'>
          <div className='flex p-2 cursor-pointer border-b border-gray-300'>
           <img src={editImg} className='w-6 h-6' />
           <span className='pr-4 px-2'>Edit Event</span>
          </div>
          <div onClick={handleDeleteEvent} className='flex cursor-pointer p-2 border-b border-gray-300'>
           <img src={deleteImg} className='w-6 h-6' />
           <span className='pr-4 px-2'>Delete Event</span>
          </div>
          <div className='flex cursor-pointer p-2'>
           <img src={shareImg} className='w-6 h-6' />
           <span className='pr-4 px-2'>Share Event</span>
          </div>
         </section>
          ) : null
        }

        </div>
        )
      }      
    </div>
     ))
    } </>
    ) : (
     <>
      { dataList &&
     dataList.map((data,i)=>(
      <div key={i} onClick={handleEventDetails} className='flex p-2.5 justify-between m-1 my-1.5 border rounded-xl border-gray-300'>
       {/* Img section */}
       <div className='w-1/4 flex items-center justify-center'>
        <img src={data.img} className='w-full h-5/6 object-cover rounded-md' />
       </div>
      {/* center section */}
       <div className='2/4 flex flex-col'>
        <p className='text-[#649b8e] font-medium text-[14px]'>{data.title}</p>
        <span className='text-gray-600 text-[12px]'>{data.time}</span>
        <span className='text-[12px] text-gray-600'>Hosted by:<strong className='text-gray-800'> {data.host}</strong></span>
        {
         data.status.toLowerCase() !== 'completed' ? (
          <span className='text-[12px] text-gray-600'>Status:<strong className='text-gray-800'> {data.status}</strong></span>
         ) : null 
        }        
       </div>
      {/* End status section */}
      <div className='w-1/4 flex items-center justify-center'>
         <EventStatus data={data} handleEventDetails={handleEventDetails} />
      </div>
     </div>
     ))
     }   
    </>)
   }

 </>
  )
}

export default SingleEvent