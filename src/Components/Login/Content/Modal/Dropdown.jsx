import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MdArrowDropDown } from "react-icons/md"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ name, options=["AAAAA", "BBBBBB", "CCCCCC"] }) {
    return (
        <Menu as="div" className="relative inline-block w-full mt-[10px]">
            <div>
                <Menu.Button className="inline-flex w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {name}
                    <MdArrowDropDown className="-mr-1 h-5 w-5 ml-auto text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {
                            options.map((item,index) => {
                                return (                                
                                    <Menu.Item key={index}>
                                        {({ active }) => (                                            
                                            <a  href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                {item}                                                                                                                                                                                       
                                            </a>
                                        )}
                                    </Menu.Item>                                                                                              
                                )
                            })
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
