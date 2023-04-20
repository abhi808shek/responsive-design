import React from 'react'

const Button2 = ({title, onClick}) => {
  return (
    <div className={`w-full flex justify-center`}>
      {/* width need to optimize for different buttons */}
      <button type='button' className={`bg-[#7991BD] text-white w-[70%] rounded-3xl py-2 font-bold text-xs`} onClick={onClick}>{title}</button>      
    </div>
  )  
}

export default Button2;
