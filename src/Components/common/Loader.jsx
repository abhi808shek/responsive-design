import React from 'react';
import Icon from '../../Assets/Images/Logo.png'

const Loader = () => {
  return (
    <div className="flex items-center justify-center absolute inset-0 h-full bg-white opacity-50">
      <div className='opacity-100 animate-ping'>
        <img className='w-full' src={Icon} />
      </div>
    </div>
  );
}

export default Loader