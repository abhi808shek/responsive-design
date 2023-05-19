import React from 'react'
import { BsEmojiSmile } from 'react-icons/bs';
import { RiImageFill } from 'react-icons/ri'
import SearchComponent from '../Home/SearchComponent/SearchComponent';
import { MdSend } from 'react-icons/md';
import { CgSmileMouthOpen } from 'react-icons/cg';
import { useState } from 'react';
import AlertSmall from '../common/AlertSmall';

<<<<<<< HEAD
const TypeMessage = ({ placeholder, sendMessage,}) => {

=======
const TypeMessage = ({ placeholder,alert, sendMessage, handleFile, msgFile}) => {
>>>>>>> c811cce09fc54e0ff83d974931821f83591fc83c
  const [state, setState] = useState({})
  const { text } = state
  return (
<<<<<<< HEAD
    <div className='flex items-center'>
      <BsEmojiSmile size={32} className='me-2 cursor-pointer' />
      <input id='sendFile' type='file' className='hidden' />
      <label htmlFor='sendFile'><RiImageFill size={32} className='cursor-pointer' /></label>
      <div className='mx-6 w-full'>
        <SearchComponent handleInputChange={(e) => setState({ ...state, text: e })} bgColor={'#e4e7ec'} placeholder={placeholder} icon />
      </div>
      <MdSend className='cursor-pointer' size={34} onClick={() => sendMessage(text)} />
=======
    <div className="flex items-center">
      {msgFile && (
        <img className="w-[100px] absolute -top-[180%]" src={msgFile || ""} />
      )}
      <BsEmojiSmile size={32} className="me-2 cursor-pointer" />
      <input
        id="sendFile"
        type="file"
        className="hidden"
        onChange={handleFile}
      />
      <label htmlFor="sendFile">
        <RiImageFill size={32} className="cursor-pointer" />
      </label>
      <div className="mx-6 w-full">
        <SearchComponent
          handleInputChange={(e) => setState({ ...state, text: e })}
          bgColor={"#e4e7ec"}
          placeholder={placeholder}
          icon
        />
      </div>
      {
        <AlertSmall
          showAlert={alert}
          button={
            <MdSend
              className="cursor-pointer m-3"
              size={30}
              onClick={() => sendMessage(text)}
            />
          }
          message={"Please add your comment to send"}
        />
      }
>>>>>>> c811cce09fc54e0ff83d974931821f83591fc83c
    </div>
  );
}

export default TypeMessage;