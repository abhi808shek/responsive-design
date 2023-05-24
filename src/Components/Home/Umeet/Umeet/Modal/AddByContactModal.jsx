import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getProfileByEmail } from "../../../../../redux/actionCreators/umeetActionCreator";
import { toast } from 'react-toastify';

const dataList = [];

const AddByContactModal = ({ onClose }) => {
	const [email, setEmail] = useState({
    mail: null,
    extension : null
  })

  const dispatch = useDispatch()
  const { umeetReducer } = useSelector(state=>state)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmail(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const emailData = `${email.mail}@${email.extension}`

  useEffect(()=>{    
    if(umeetReducer.isEmailFound == true){
      toast.success('User Email Found')
    }
  
    umeetReducer.isEmailFound = false
  }, [umeetReducer.isEmailFound, dataList])

  const handleEmailAdd = async ()=>{
    umeetReducer.isEmailFound = false

    if(!email.mail || !email.extension){
      toast.error('Enter valid email')
    }else{
      await dispatch(getProfileByEmail(emailData)).catch(err=>{
        toast.error(err.message)
      })
      dataList.push(emailData)
      // const filteredData = dataList.filter(item => item.includes(emailData))

      // if(filteredData.length == 0){
      //   dataList.push(emailData) 
      // }
    } 

    umeetReducer.isEmailFound = false         
  }

  const handleContact = ()=>{}  

  return (
    <div className='absolute fixe top-0 w-full z-20 h-full flex justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>

     <div className='w-[86%] md:w-[50%] lg:w-[39%] xl:w-[30%] 2xl:w-[25%] h-[87%] flex flex-col bg-white justify-between rounded-xl p-5'>
      <div className=''>
       <div className='flex justify-between items-center border-b pb-2 text-gray-600'>
         <button className='px-4 py-1.5 text-sm rounded-md border text-[#649B8E] boredr-[#649B8E]'>Choose Classmate</button>
         <button className='px-4 py-1.5 text-sm rounded-md text-white ml-5 border bg-[#649B8E]'>Add by Email/Phone</button>
       </div>
       <div className=''>        
        <div className='flex items-center my-2'>
         <input name='mail' onChange={handleChange} className='w-full outline-none border bg-gray-200 border-gray-200 rounded-lg h-9 pl-1' placeholder='example' />
         <span className='text-gray-600 px-0.5'>@</span>
         <input name='extension' onChange={handleChange} className='w-full outline-none bg-gray-200 border border-gray-200 rounded-lg h-9 pl-1' placeholder='domain.co' />
         <button onClick={handleEmailAdd} className='px-4 py-1.5 text-sm rounded-md text-white ml-1 border bg-[#649B8E]'>Add</button>
        </div>

        <div className='flex items-center pb-3 border-b border-gray-300'>  
         <select className='bg-gray-200 mr-2 outline-none h-9 rounded-lg px-2 border border-gray-200'>          
          <option>+91</option>
          <option>USA</option>
         </select>      
         <input className='w-full outline-none bg-gray-200 border border-gray-200 rounded-lg h-9 pl-1' placeholder='9879867543' />
         <button className='px-4 py-1.5 text-sm rounded-md text-white ml-1 border bg-[#649B8E]'>Add</button>
        </div>
        <section className='h-[200px] md:h-[250px] lg:h-[300px] hideScroll overflow-y-scroll'>
        <div className='mt-2 flex flex-wrap'>        
         {
          dataList.map((data, i)=>(
           <div key={i} className='bg-gray-100 my-1 mr-1.5 inline py-1.5 w-fit rounded-md text-[13px] flex flex-wrap'>
            <span className='px-1'>{data}</span>
            <span onClick={handleContact} id={i} className='px-1.5 mr-1'>x</span>
           </div>
          ))
         }
        </div>
        </section>
       </div>            
      </div>

      <div>
       <button className='w-full py-1 rounded-xl text-white border border-[#649B8E] bg-[#649B8E]'>Save</button>
       <button onClick={onClose} className='w-full py-1 my-2 rounded-xl border border-[#649B8E] text-[#649B8E]'>Cancel</button> 
      </div>
     </div>  

    </div>
  )
}

export default AddByContactModal