import { useState } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import wishes from '../../../../../Assets/Images/Umeet/wishesTemplate.webp'
import selectedimg from '../../../../../Assets/Images/Umeet/Umeet-Main/Umeet-Attending.png'
import person from '../../../../../Assets/Images/Person.jpg'
import '../../Umeet.css'
import AddByContactModal from './AddByContactModal'
import group from '../../../../../Assets/Images/Umeet/Umeet-Main/Group 1054.png'

const dataList = [
  {
    name: "Smith",
    img: person
  },
  {
    name: "Russel",
    img: person
  },
  {
    name: "De-Villiers",
    img: person
  },
  {
    name: "Ajaykumar",
    img: person
  },
  {
    name: "Ajaykumar",
    img: person
  },
  {
    name: "Ajaykumar",
    img: person
  },
  {
    name: "Ajaykumar",
    img: person
  },
  {
    name: "Ajaykumar",
    img: person
  },
]

const PersonalOtherGuest = ({ onClose }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [showAddByContactModal, setShowAddByContactModal] = useState(false)
  const [selectedBy, setSelectedBy] = useState('Friends')

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  }

  const handleAddByContactModal = ()=>{
   setShowAddByContactModal(true)
  }

  const handleSelected = (selected)=>{
    setSelectedBy(selected)
  }

  return (
    <div className='fixed top-8 w-full h-full flex justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

     <div className={`w-[96%] md:w-[70%] lg:w-[50%] 2xl:w-[50%] md:h-[87%] flex flex-col justify-between bg-white rounded-xl p-3 lg:p-5 ${showAddByContactModal ? '-z-10' : ''}`}>
      <div className=''>
       <div className='flex font-medium border-b justify-start items-center flex-wrap text-[14px] lg:text-[16px] pb-1 mb-1 text-gray-600'>
         <button 
         onClick={()=>handleSelected('Friends')} 
         className={`${selectedBy == 'Friends' ? 'bg-[#649B8E] text-white' : ''} px-1 py-1 text-[#649B8E] rounded-md border`}>
         Friends</button>
         <button 
         onClick={()=>handleSelected('Classmates')}  
         className={`${selectedBy == 'Classmates' ? 'bg-[#649B8E] text-white' : ''} px-1 py-1 rounded-md ml-1 border text-[#649B8E]`}>
         Classmates</button>
         <button 
         onClick={()=>handleSelected('Relatives')}  
         className={`${selectedBy == 'Relatives' ? 'bg-[#649B8E] text-white' : ''} px-1 py-1 rounded-md ml-1 border boredr-[#649B8E] text-[#649B8E]`}>
         Relatives</button>
         <button 
         onClick={()=>handleSelected('Officemates')}  
         className={`${selectedBy == 'Officemates' ? 'bg-[#649B8E] text-white' : ''} px-1 py-1 rounded-md ml-1 border boredr-[#649B8E] text-[#649B8E]`}>
         Officemates</button>
         <button 
         onClick={()=>handleSelected('Unions')}  
         className={`${selectedBy == 'Unions' ? 'bg-[#649B8E] text-white' : ''} px-1 py-1 rounded-md ml-1 border boredr-[#649B8E] text-[#649B8E]`}>
         Unions</button>
         <button 
         onClick={()=>handleSelected('Add by Email/Phone')}  
         className={`${selectedBy == 'Add by Email/Phone' ? 'bg-[#649B8E] text-white' : ''} px-1 py-1 rounded-md ml-1 my-0.5 border boredr-[#649B8E] text-[#649B8E]`}>
         Add by Email/Phone</button>
       </div>
       <div className=''>
        <input type='search' className='h-7 p-2 h-8 outline-none border border-gray-300 w-full bg-gray-100 rounded-md' placeholder='Search....' />
        <div className='my-3 flex items-center'>
      	 <label className='text-[17px] text-gray-700 flex items-center'>
         <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAllChange}
          className='w-5 h-5 mr-2'
          />Select All</label>
    	</div>
    	<div className='h-[190px] md:h-[205px] lg:h-[288px] 2xl:h-[320px] hideScroll overflow-y-scroll'>
    	{
    	 dataList.map((data, i)=>(
    	  <div key={i} className='flex items-center mb-2 lg:mb-3'>    	   
    	   <div className='w-1/6'>
    	    <img src={data.img} className='w-10 h-10 rounded-full object-cover' />
    	   </div>
    	   <span className='w-4/6 font-medium text-[15px]'>{data.name}</span>
    	   <div className='w-1/6 flex justify-end'>
    	    {selectAll ? <img src={selectedimg} className='h-6 w-6'/> :
    	     <input type="checkbox" className='w-4 h-4' />
    	    }
    	   </div>
    	  </div>
    	 ))
    	}
    	</div>

       </div>            
      </div>

      <section className='flex w-full'>       
        <img src={group} className='h-9 w-9 mr-3 mt-2.5' />
        <div className='w-5/6'>
         <button className='w-full py-1 rounded-xl text-white mt-2.5 border border-[#649B8E] bg-[#649B8E]'>Save</button>       
         <button onClick={onClose} className='w-full py-1 my-1 rounded-xl border border-[#649B8E] text-[#649B8E]'>Cancel</button> 
        </div>
      </section>
     </div>  
     {showAddByContactModal && <AddByContactModal onClose={()=>setShowAddByContactModal(false)} />}
    </div>
  )
}

export default PersonalOtherGuest