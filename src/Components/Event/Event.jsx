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
        <div className='w-full bg-[#EAE9E7] flex flex-col justify-center items-center'>
            <div className="header h-16 w-[40%] mt-2 rounded-md flex justify-center items-center text-lg text-white font-bold bg-[#7991BD]">
                <h1>Travel Event</h1>
            </div>
            <div className="slider w-[40%] bg-[#EAE9E7] mt-2">
                <Carousel>
                    <img src={bg1} alt="" className="w-[100%] h-[70vh] object-cover rounded-[20px]" />
                    <img src={bg2} alt="" className="w-[100%] h-[70vh] object-cover rounded-[20px]" />
                    <img src={bg3} alt="" className="w-[100%] h-[70vh] object-cover rounded-[20px]" />
                </Carousel>
            </div>
            <div className='flex justify-center gap-2 mt-5 h-16 items-center w-[40%] rounded-lg bg-white'>
                {
                    btnData.map((elem, index) => (
                        <ButtonComponent key={index} name={elem.name} index={index} />
                    ))
                }
            </div>
            <div className='w-[40%] flex flex-col items-center justify-center gap-4 mt-2'>
                {selectedIndex === 0 && posts?.map((post, index) => (
                    <PostCard key={index} item={post} />
                ))}
                {selectedIndex === 2 && <Participate />}
            </div>
        </div>
    );
}

export default Event;
