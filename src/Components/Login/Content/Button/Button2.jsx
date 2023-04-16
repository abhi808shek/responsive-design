import React from 'react'

const Button2 = ({title, onClick}) => {
  return (
    <div className={`w-full flex justify-center`}>
        <button type='button' className={`bg-[#7991BD] text-white w-[70%] rounded-3xl py-1.5 font-bold text-xs`} onClick={onClick}>{title}</button>
    </div>
  )  
}

export default Button2;
