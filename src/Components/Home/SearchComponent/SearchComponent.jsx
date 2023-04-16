import React from 'react'

const SearchComponent = ({bgColor,width,placeholder}) => {
    return (
        <div className={`w-full h-[60px] flex items-center justify-center rounded-xl`}>
          <div className={`flex rounded-md justify-between items-center `} style={{backgroundColor:bgColor,width:`${width}%`}}>
            <input type="text" placeholder={placeholder} className={`w-full rounded-md pl-3 py-2 outline-none bg-[${bgColor}]`}/>
            <span className="mr-2">
              <img src="./images/Search.png" alt=""  className='w-[22px]'/>
            </span>
          </div>
        </div>
      );
}

export default SearchComponent
