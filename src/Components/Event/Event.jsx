import React, { useEffect, useState } from 'react';
import Carousel from "react-material-ui-carousel";
import bg1 from '../../Assets/Images/bg1.jpg'
import bg2 from '../../Assets/Images/bg2.jpg'
import bg3 from '../../Assets/Images/bg3.jpg'
import ButtonComponent from './ButtonComponent';
import PostCard from './postCard';
import { useSelector } from 'react-redux';
import Participate from './Participate';

const Event = () => {
    const btnData = [
        { name: "Post" },
        { name: "Trending" },
        { name: "Participate" },
    ];

    const { posts } = useSelector((state) => state.postReducer);
    const { selectedIndex } = useSelector((state) => state.selectedIndexReducer);

    return (
        <div className='w-full bg-[#EAE9E7]'>
            <div className="header h-16 w-full flex justify-center items-center text-lg text-white font-bold bg-[#7991BD]">
                <h1>Travel Event</h1>
            </div>
            <div className="slider w-full bg-[#FFFFFF] p-4">
                <Carousel>
                    <img src={bg1} alt="" className="w-[70vw] h-[70vh] object-cover relative left-[13rem] rounded-[20px]" />
                    <img src={bg2} alt="" className="w-[70vw] h-[70vh] object-cover relative left-[13rem] rounded-[20px]" />
                    <img src={bg3} alt="" className="w-[70vw] h-[70vh] object-cover relative left-[13rem] rounded-[20px]" />
                </Carousel>
            </div>
            <div className='flex justify-center gap-[20rem] mt-5 h-16 items-center w-full bg-white'>
                {
                    btnData.map((elem, index) => (
                        <ButtonComponent key={index} name={elem.name} index={index} />
                    ))
                }
            </div>
            <div className='p-4 flex flex-col items-center gap-8'>
                {selectedIndex === 0 && posts.map((post, index) => (
                    <PostCard key={index} {...post} />
                ))}
                {selectedIndex === 2 && <Participate />}
            </div>
        </div>
    );
}

export default Event;
