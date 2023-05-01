import { Popover } from '@headlessui/react'
import { Link } from 'react-router-dom';

function PopOver({button, options}) {
  return (
     <Popover className="relative" >
      <Popover.Button className={'outline-0'} >{button}</Popover.Button>

      <Popover.Panel className="absolute z-10 w-max right-0 bg-white py-2 px-3 border rounded-md">
        <div className="grid grid-cols-2">
          {/* <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a> */}
          {
            options.map((item) => {
              return ( <Link to="" className='cursor-pointer w-full'><span>{item?.icon}</span> {item?.name}</Link>)
            })
          }
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  )
}

export default PopOver;