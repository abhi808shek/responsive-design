import React from 'react'

const GridBoxes = ({selectedOption}) => {
  return (
    <div className='bg-white 2xl:h-[860px] xl:w-[95%] lg:w-[98%] lg:h-[65%] w-full grid grid-cols-4 gap-4 text-center p-3 rounded-xl ml-1'>
     {[1,2,3,4,5,6,7,8,9,1,1,1,2,2,2,2].map((elem,index)=>( <div key={index} className='bg-green-400 rounded-lg lg:h-[90%]'>
      {selectedOption === "Post" &&  <img src="./images/events.jpg" alt=""  className='w-full h-full rounded-lg'/>}
      {selectedOption === "Photos" &&  <img src="./images/events.jpg" alt=""  className='h-full w-full rounded-lg'/>}
      {selectedOption === "Videos" &&  <img src="./images/pizza.jpg" alt=""  className='w-[140px] h-[80px] rounded-lg'/>}
      {selectedOption === "Kicks" &&  <img src="./images/pizza.jpg" alt=""  className='w-[140px] h-[80px] rounded-lg'/>}
     </div>))}
      
    </div>
  )
}

export default GridBoxes;
