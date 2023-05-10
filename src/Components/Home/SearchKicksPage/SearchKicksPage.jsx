import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import { BiCategory } from 'react-icons/bi'
import { HiPlus } from 'react-icons/hi'
import '../Umeet/Umeet.css'
import video from '../../../Assets/Videos/v2.mp4';
import { AiOutlinePlayCircle } from 'react-icons/ai'
import CategoriesModal from './CategoriesModal'
import SelectedVideoModal from './SelectedVideoModal'
import SearchVideo from './SearchVideo'
import SearchPeople from './SearchPeople'
import SearchHastag from './SearchHastag'

const SearchKicksPage = () => {
  const [showCategories, setShowCategories] = useState(false)
  const [selectVideo, setSelectVideo] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState(true)
  const [people, setPeople] = useState(false)
  const [hastag, setHastag] = useState(false)

  function handleFileSelection(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedVideo(reader.result);
    };

    reader.readAsDataURL(file);
  }

  const handleHastag = ()=>{
    setSearch(false)
    setPeople(false)
    setHastag(true)
  }

  const handPeople = ()=>{
    setSearch(false)
    setPeople(true)
    setHastag(false)
  }

  const handleSearch = ()=>{
    setSearch(true)
    setPeople(false)
    setHastag(false)
  }

  const data = [
    { title: "Following" },
    { title: "Latest" },
    { title: "Trending" },
  ]

  function RenderStatus(){
    if(search) return <SearchVideo />
    else if(people) return <SearchPeople />
    else if(hastag) return <SearchHastag />
  }
  return (
    <div className={`w-full relative flex lg:h-[90vh] xl:h-[90vh]`}>
      <section className="flex w-2/6 items-center justify-center bg-black">
        <div className="w-[70%] flex flex-col items-center">
          <div className="flex flex-col gap-3">
            {data.map((elem) => (
              <p
                key={elem.title}
                className="text-white cursor-pointer flex items-center justify-center rounded-xl font-semibold"
              >
                {elem.title}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="flex w-4/6 bg-black col-span-2 flex-col">
        <div className=" w-[60%]">
          <div className="flex w-full items-center my-1">
            <span onClick={()=>setShowCategories(true)} className='cursor-pointer'><BiCategory className='text-white bg-[#6e6f6f] h-10 w-10 rounded-full p-0.5' /></span>
            <input placeholder="Search by name/keyword/hashtag" type='search' className='w-full mx-2 h-10 rounded-lg outline-none px-2' onFocus={()=>setIsFocused(true)} width={95} bgColor="#fff" />
            <input type='file' id='chooseVideo' onChange={handleFileSelection} className='hidden' />
            <span><label onClick={()=>setSelectVideo(true)} htmlFor='chooseVideo'><HiPlus className='text-white bg-[#6e6f6f] h-10 w-10 rounded-full p-0.5 cursor-pointer'/></label></span>
          </div>
        </div>

      {isFocused && (
      <div className='p-2 mb-1 w-[60%] flex bg-white rounded-lg'>
       <div onClick={handleSearch} className={`${search ? 'bg-[#649B8E] text-white' : 'bg-[#E4E4E4]'} rounded-lg flex justify-center py-1 px-4 w-1/3 cursor-pointer`}>Video</div>
       <div onClick={handPeople} className={`${people ? 'bg-[#649B8E] text-white' : 'bg-[#E4E4E4]'} rounded-lg flex justify-center py-1 px-4 w-1/3 mx-2 cursor-pointer`}>Profile</div>
       <div onClick={handleHastag} className={`${hastag ? 'bg-[#649B8E] text-white' : 'bg-[#E4E4E4]'} rounded-lg flex justify-center py-1 px-4 w-1/3 cursor-pointer`}>Hastag</div>
      </div>   
      )}

      {/* Reels Sections */}
      <div className=" w-[60%] overflow-y-scroll hideScroll h-[89%]  bg-white p-2 rounded-lg">
       <RenderStatus />
      </div>
     </section>
      {showCategories && <CategoriesModal onClose={()=>setShowCategories(false)} />}
      {selectVideo && <SelectedVideoModal selectedVideo={selectedVideo} onClose={()=>setSelectVideo(false)} />}
    </div>
  );
};

export default SearchKicksPage;
