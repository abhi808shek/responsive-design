import React from 'react'
import Dropdown from './Dropdown'
import Input from '../InputBox/Input'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { TbPhotoPlus} from 'react-icons/tb'

const Modal = ({ modalType, handleClose}) => {
  const isPersonal = modalType === 'personal'
  return (
    <div className='absolute px-10 top-1/2 left-1/2 bg-white max-w-[60rem] w-[75vw] text-center' style={{ transform: 'translate(-50%, -50%)', boxShadow: '0px 10px 8px #3f3f3fd9' }}>
      <h2 className='font-semibold text-2xl border-b-[3px] border-grey-400 py-2'>Let's Create Profile</h2>
      <div className='flex flex-col md:flex-row my-4'>
        <div className='md:w-1/2 mr-4 border-r-[3px] border-grey-400'>
          <h2 className='font-semibold text-2xl '>Add Profile Picture</h2>
          <div >
            <input id='profilePic' type='file' accept='image/*' className='hidden' />
            <label htmlFor='profilePic' className='flex justify-center items-center cursor-pointer w-[15rem] h-[15rem] mx-auto rounded-full block bg-gray-200'>
                <span><TbPhotoPlus size={45}/></span>
            </label>
            <div className='pt-6'>
              <label htmlFor='profilePic' className='bg-[#add8eb] cursor-pointer p-[4px 20px] rounded-2xl py-2 mt-6 px-6'>Select from computer</label>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 max-w-[25rem] px-4'>
          <div className='mx-auto'>
            <Dropdown name={isPersonal ? 'Select Profile Type*' : 'Organization'} options={isPersonal? ["Personal"] : ["World Trade Org"]}/>
            <Input
              title="Full Name*"
              name="email"
              className="w-full mt-[10px]"
            />
            {
              isPersonal ?
                <>
                  <div className='flex justify-evenly items-center mt-3'>
                    <input type='radio' name='gender' onChange={(e) => handleGender(e)} /> <label>Male</label>
                    <input type='radio' name='gender' onChange={(e) => handleGender(e)} /><label>Female</label>
                    <input type='radio' name='gender' onChange={(e) => handleGender(e)} /> <label>Other</label>
                  </div>
                  <Dropdown name={'Date of birth'} options={[]}/>
                  <Dropdown name={'Select country'}  />
                </>
                :
                <>
                  <Input
                    title="Website*"
                    name="web"
                    className="w-full mt-[10px]"
                  />
                  <Input
                    title="Address*"
                    name="address"
                    className="w-full mt-[10px]"
                  />
                  <textarea
                  placeholder='Write your intro...'
                  className='mt-[10px] outline-none p-2 border-[1px] border-gray-400 rounded-[5px] w-full text-xs'>
                  </textarea>
                </>
            }


          </div>
          <label htmlFor='' className='bg-[#add8eb] py-1.5 rounded-2xl block mt-[60px] cursor-pointer'>Create</label>
        </div>
      </div>
      <span className='absolute top-4 right-2 cursor-pointer' onClick={()=> handleClose()}><AiOutlineCloseCircle size={25} className='text-gray-600'/></span>
    </div>
  )
}

export default Modal