import React from 'react'
import { BsEmojiSmile } from 'react-icons/bs';
import { RiImageFill } from 'react-icons/ri'
import SearchComponent from '../Home/SearchComponent/SearchComponent';
import { MdSend } from 'react-icons/md';
import { CgSmileMouthOpen } from 'react-icons/cg';

const TypeMessage = () => {
  return (
    <div className='flex items-center'>
        <BsEmojiSmile size={32} className='me-2 cursor-pointer'/>
        <input id='sendFile' type='file' className='hidden'/>
        <label htmlFor='sendFile'><RiImageFill size={32} className='cursor-pointer'/></label>
        <div className='mx-6 w-full'>
            <SearchComponent bgColor={'#e4e7ec'} placeholder={'Add message'} icon />
        </div>
        <MdSend size={34}/>
    </div>
  )
}

export default TypeMessage;