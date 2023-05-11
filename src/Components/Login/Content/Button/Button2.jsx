import React from 'react'

const Button2 = ({title, onClick,disabled, id}) => {
  return (
    <div className={`w-full flex justify-center `}>
      <button
        id={id}
        type="button"
        className={`bg-[#7991BD] text-white w-[70%] rounded-3xl py-2 font-bold text-xs`}
        disabled={disabled}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );  
}

export default Button2;
