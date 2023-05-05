import { useState } from "react";
import notAttend from '../../../../../Assets/Images/Umeet/Umeet-Main/Umeet-NotAttending.png'
import Attend from '../../../../../Assets/Images/Umeet/Umeet-Main/Umeet-Attending.png'
import maybe from '../../../../../Assets/Images/Umeet/Umeet-Main/Umeet-maybe.png'

const RvspModal = ({ onClose }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
  <section className='absolute top-0 left-0 h-full w-full flex justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    <div className='w-[26%] h-[88%] flex flex-col justify-between p-5 bg-white ml-[9%] mt-[4%] rounded-2xl'>
   <section>
	 <p className='pb-2 border-b border-gray-300 text-gray-600'>RSVP</p>
	 <div className='py-3 border-b border-gray-300'>
	  <div>Will you attend?</div>
	  <div className='flex justify-between py-3'>
	   <div className='flex items-center'>
	   	<img src={Attend} className='h-7 flex mr-1' />
	   	<span>Yes</span>
	   </div>
	   <div className='flex items-center'>
	   	<img src={notAttend} className='h-7 flex mr-1' />
	   	<span>No</span>
	   </div>
	   <div className='flex items-center'>
	   	<img src={maybe} className='h-7 flex mr-1' />
	   	<span>Maybe</span>
	   </div>
	  </div>	  
	 </div>

	 <div className="relative">
      <select className="border bg-white border-gray-300 w-full py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-500">
        <option>Select</option>
        <option value="option2">Veg</option>
        <option value="option3">Non-Veg</option>
      </select>
      <label className="absolute -top-1 left-2 -mt-px px-1 bg-white text-gray-600 text-xs">Food Preference</label>
    </div>

    <div className='flex py-2 flex-col justify-center items-center'>
     <p className='py-1 text-gray-600'>No of guests ( Incliding you )</p>
     <div className='py-1 border px-2 border border-gray-300 my-2'>      
      <button className='font-bold text-xl'  onClick={handleDecrement}>-</button>
      <span className='px-8 text-[#649B8E]'>{count}</span>
      <button className='font-bold text-xl' onClick={handleIncrement}>+</button>         
    </div>
    </div>

    <div className='flex py-2 flex-col'>
     <label htmlFor='message' className="block text-gray-700 mb-2">Send a message</label>
     <textarea rows='3' id='message' name='message' className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
    </div>
   </section>
   <section>
    <div className='flex py-2'>
     <button onClick={onClose} className='px-5 w-1/2 py-2 border boredr-[#649B8E] text-[#649B8E]'>Cancel</button>
     <button className='px-5 py-2 w-1/2 text-white border bg-[#649B8E]'>Save</button>     
    </div>
   </section>
  </div>
  </section>
  )
}

export default RvspModal