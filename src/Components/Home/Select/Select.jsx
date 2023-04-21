import React from 'react'
import { useNavigate } from 'react-router-dom';
import Heading from './Heading';

const Option = ({ title, description, icon, style, click }) => {
    return (
        <button className={`flex gap-1 px-3 py-4 rounded-sm  ${style}`} onClick={click}>
            <div className='pr-2'>
                <img src={icon} alt={title} />
            </div>
            <div className='flex flex-col  w-full scale-90'>
                <p className='font-bold text-white text-start w-full '>{title}</p>
                <span className=' text-white text-xs text-start'>{description}</span>
            </div>
        </button>
    )
}
const Select = () => {
    const navigate = useNavigate();
    return (
        <div className="lg:w-full h-screen rounded-[20px] flex flex-col justify-center items-center gap-4 px-4">
            <div className='bg-[#E1F4FB] border border-gray-400 rounded-lg p-4 pb-6'>
                <Heading title="Select" />

                <div className='flex flex-col gap-4'>
                    <Option
                        title={"Root"}
                        description={"Connect & Share"}
                        icon={"./images/Roots.png"}
                        style={"bg-[#6780AF]"}
                        click={() => navigate("/root")}
                    />
                    <Option
                        title={"Kicks"}
                        description={"Create short videos"}
                        icon={"./images/watch.png"}
                        style={"bg-[#DD8D58]"}
                        click={() => navigate("/kicks")}
                    />
                    <Option
                        title={"U-Meet"}
                        description={"Schedule events & meet"}
                        icon={"./images/calender.png"}
                        style={"bg-[#659B8E]"} 
                        click={()=> navigate("/umeet")}
                        />
                </div>
            </div>
        </div>
    )
}

export default Select