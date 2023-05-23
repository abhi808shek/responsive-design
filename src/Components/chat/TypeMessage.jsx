import React from 'react'
import { BsEmojiSmile } from 'react-icons/bs';
import { RiImageFill } from 'react-icons/ri'
import SearchComponent from '../Home/SearchComponent/SearchComponent';
import { MdSend } from 'react-icons/md';
import { CgSmileMouthOpen } from 'react-icons/cg';
import { useState } from 'react';
import AlertSmall from '../common/AlertSmall';
import { IoSend } from 'react-icons/io5';

const TypeMessage = ({ placeholder, alert, sendMessage, handleFile, msgFile }) => {
  const [state, setState] = useState({})
  const { text } = state
  return (
    <div className="flex items-center px-2">
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

        <MdSend className="cursor-pointer text-blue-400 w-[35%]"
          size={32}
          onClick={() => sendMessage(text)} />
        // <AlertSmall
        //   showAlert={alert}
        //   button={
        //     <IoSend className="cursor-pointer mr-5"
        //       size={32}
        //       onClick={() => sendMessage(text)} />
        //   }
        //   message={"Please add your comment to send"}
        // />
      }
    </div>
  );
}

export default TypeMessage;