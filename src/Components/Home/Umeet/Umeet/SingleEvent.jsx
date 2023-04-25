import UmeetNotAttending from '../../../../Assets/Images/Umeet/Umeet-Main/Umeet-NotAttending.png'
import UmeetAttending from '../../../../Assets/Images/Umeet/Umeet-Main/Umeet-Attending.png'
import Umeetmaybe from '../../../../Assets/Images/Umeet/Umeet-Main/Umeet-maybe.png'

function EventStatus({ data }){
    if(data.status.toLowerCase() == 'attending'){
       	return <img src={UmeetAttending} className='h-10 w-10 cursor-pointer'/>
    }else if(data.status.toLowerCase() == 'not attending'){
       	return <img src={UmeetNotAttending} className='h-10 w-10 cursor-pointer'/>
    }else if(data.status.toLowerCase() == 'pending'){
       	return <img src={Umeetmaybe} className='h-10 w-10 cursor-pointer'/>
    }else if(data.status.toLowerCase() == 'completed'){
       	return <button className='px-2 py-0.5 text-[12px] rounded border-gray-500 text-gray-700 border'>completed</button>
    }
}

const SingleEvent = ({ dataList }) => {
  return (
   <>
    {
   	 dataList.map((data,i)=>(
   	  <div key={i} className='flex p-2.5 justify-between m-1 border rounded-xl border-gray-300'>
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
		 <EventStatus data={data} />
      </div>
    </div>
   	 ))
    }    
   </>
  )
}

export default SingleEvent