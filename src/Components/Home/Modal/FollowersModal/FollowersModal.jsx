import React from 'react'

const FollowersModal = ({title, modalName}) => {
  return (
    <div className='w-[30%] bg-white rounded-xl ml-5 flex items-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div>{modalName}</div>
         <h1 className="text-center my-3 font-bold">{title}</h1>
             <div className="bg-gray-500 w-full h-[1px] mb-1"></div>
         <section className=" w-[95%] flex rounded-md flex-col justify-between items-center mt-2 h-[350px] overflow-scroll">
          {[1, 3, 3, 4, 3, 2, 2,3,4,5,2].map(() => (
                <>
              <div className="flex w-full pb-1 flex-col">
                 <div className="flex items-center py-1">
                 <div className="flex items-center gap-2 flex-1">
                      <img
                          src="./images/events.jpg"
                          alt=""
                          className="w-[40px] h-[40px] rounded-full" />
                      <span className="font-bold text-sm">Time Hector</span>
                  </div>
                  <div className="flex ">
                    <button className='font-bold text-blue-400 text-[10px] border-[1px] border-blue-300 px-3 py-0.5 rounded-sm'>Remove</button>
                  </div>
                 </div>
              </div><hr /></>
          ))}
        </section>
    </div>
  )
}

export default FollowersModal;
