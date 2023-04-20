import React, { Children, useEffect } from 'react'
import Navbar from '../Components/Home/Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

const MainView = ({children}) => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/root")
    }, [])
    
  return (
    <>
     <div className='w-full h-[80px]'>
      <Navbar />
     </div>
      <Outlet />
    </>
  )
}

export default MainView;
