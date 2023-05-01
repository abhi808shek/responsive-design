import React from 'react'

const UpdateProfile = () => {
    return (
        <div className='bg-[#E4E7EC] w-[100%]  p-6'>
            <div className="updateTitle text-center rounded-xl flex-wrap mt-16 mb-6 bg-[#FFFFFF] text-[#000] text-xl ">
                <h3 className='p-2 font-bold'>Let's update your profile</h3>
                <h4 className=' text-[#666567]'>This will help us others get to know better!</h4>
            </div>
            <div className='grid grid-cols-2 gap-4 justify-center rounded-2xl md:grid-cols-2 '>
                <div className='bg-[#fff] rounded-2xl '>
                    <h3 className='p-2 font-bold text-center text-[20px]'>Cover Picture:</h3>
                    <img src="https://th.bing.com/th/id/OIP.akz0hTxRH7ofWzOzjjH3zQHaDn?pid=ImgDet&rs=1" alt="" className='mb-4   h-[200px] text center m-auto rounded-2xl' />
                    <i class="bi bi-exclamation-circle m-12   text-[#707070] "></i>
                    <div className='flex justify-center mb-6'>
                        <button className='bg-[#7991BD] p-2 w-[210.7px] text-[#fff] rounded-2xl '>Change Picture</button>
                        <button className='text-[#7991BD] w-[100.7px] '>remove</button>
                    </div>
                </div>
                <div className='bg-[#fff] rounded-2xl '>
                    <h3 className='p-2 font-bold text-center text-[20px]'>Profile Picture :</h3>
                    <img src="https://th.bing.com/th/id/OIP.bKxmwxuEqQ8SLdnFOXn3KAHaHa?pid=ImgDet&rs=1" alt="" className='h-[200px] object-cover text center m-auto rounded-2xl' />
                    <div className='flex content-center  justify-center mt-8'>
                        <button className='bg-[#7991BD] p-2 w-[210.7px] text-[#fff] rounded-2xl ml-[120px]  items-center content-center'>Change Picture</button>
                        <button className='text-[#7991BD] w-[100.7px]   '>remove</button>
                    </div>
                </div>
            </div>

            <div className='mt-10 flex justify-center  flex-row'>
                <div className=' w-[408.8px] m-2 p-6'>
                    <form action="">
                        <lable className='mb-6 text-[20px]'>Personal Info :</lable>
                        <div className=''>
                            <input type="text" placeholder="Anurag Mourya" className=' placeholder-black mb-6 mt-6 w-full border-none  p-2 outline-none  ' />
                            <input type="text" placeholder="Influenced by" className='mb-6  placeholder-black w-full border-none  p-2 outline-none  ' />
                            <input type="text" placeholder="Software Engineer" className='mb-6  placeholder-black w-full border-none  p-2 outline-none  ' />
                            <input type="text" placeholder="Uynite INC" className='mb-6  placeholder-black w-full border-none  p-2 outline-none  ' />
                            <input type="email" placeholder='example@uynite.com' className='mb-6  placeholder-black w-full border-none  p-2 outline-none  ' />
                            <div className=' flex w-full justify-end'>
                                <select name="MobilNumber" id="PhoneNo" className='h-[39px] w-[130px]'>
                                    <option value="IND" className=''>IND 91+</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                                <input type="tel" placeholder='7878787878' className='mb-6  placeholder-black ml-3 w-full border-none  p-2 outline-none  w-[70%] ' />
                            </div>
                            <div className='flex '>
                                <h4 className=' w-[130px] text-[14px] mt-2 '>Date of birth*</h4>
                                <input type="date" className='mb-6 ml-3 border-none  p-2 outline-none  w-[70%] ' />
                            </div>
                            <div className='flex '>
                                <h4 className=' w-[130px] text-[14px] mt-2 '>Gender*</h4>
                                <select name="gender" id="gender" className='  mb-6 ml-3  border-none  p-2 outline-none  w-[98%] '>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <select name="country" id="country" className=' h-[39px] mb-6  border-none   outline-none  w-[100%] '>
                                <option value="India">India</option>
                            </select>
                            <div className='flex mb-6'>
                                <select name="state" id="state" className=' h-[39px]  border-none   outline-none  w-full mr-1 '>
                                    <option value="Nellore">Nellore</option>
                                </select>
                                <select name="state" id="state" className='h-[39px]  border-none  outline-none  w-full ml-1  '>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                </select>
                            </div>
                            <div className='flex mb-6'>
                                <select name="" id="" className=' h-[39px] border-none   outline-none  w-full mr-1 '>
                                    <option value="Lok Sabha">Lok Sabha</option>
                                </select>
                                <select name="" id="" className=' h-[39px] border-none  outline-none  w-full ml-1  '>
                                    <option value="Assembly">Assembly</option>
                                </select>
                            </div>
                            <input type="text" placeholder="Veerepalli" className='mb-6 w-full placeholder-black  p-2 outline-none  border-solid border-1 border-[#000]' />
                            <div className='flext w-full text-center'>
                                <button className=' pr-3 bg-[#7991BD] p-1 px-2 rounded-xl text-white'>Save & Continue</button>
                                <button className='w-[35%] ml-3 border-solid border border-[#7991BD] p-1 inline-block rounded-xl text-[#7991BD]'>Cancel</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile;