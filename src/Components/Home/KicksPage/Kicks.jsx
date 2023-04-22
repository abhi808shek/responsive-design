import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectKicksType } from "../../../redux/actionCreators/userActionCreator";
import events from "./events.jpg"
import VideoComponent from "./VideosComponent/VideoComponent";
import ReactPlayer from 'react-player'
import v1 from '../../../Assets/Videos/v1.mp4';
import v2 from '../../../Assets/Videos/v2.mp4';
import v3 from '../../../Assets/Videos/v3.mp4';
import v4 from '../../../Assets/Videos/v4.mp4';
import v5 from '../../../Assets/Videos/v5.mp4';
const Kicks = () => {
  const data = [
    { title: "Following" },
    { title: "Latest" },
    { title: "Trending" },
  ];

  const dataList = [
    { title: "mute" },
    { title: "25 likes" },
    { title: "3 comments" },
    { title: "share" },
  ];
  const dispatch = useDispatch();
  const { kicksType } = useSelector((state) => state.userReducer);
  return (
    <div className={`w-full grid grid-cols-3 h-[88vh] bg-[url(${events})] z-10`}>
      <section className="flex items-center justify-center bg-black">
        <div className="w-[80%] flex flex-col items-center">
          <div className="flex flex-col gap-3">
            {data.map((elem) => (
              <p
                key={elem.title}
                className="text-white cursor-pointer flex items-center justify-center rounded-xl font-semibold"
                style={{
                  padding: kicksType === elem.title ? "0.5rem 1rem" : "0rem",
                  backgroundColor:
                    kicksType === elem.title ? "#DD8E58" : "black",
                }}
                onClick={() => dispatch(selectKicksType(elem.title))}
              >
                {elem.title}
              </p>
            ))}
            <div className="flex gap-2">
              <img
                src="./images/groups.png"
                alt=""
                className="w-[40px] cursor-pointer"
              />
              <img
                src="./images/groups.png"
                alt=""
                className="w-[40px] cursor-pointer"
              />
              <img
                src="./images/groups.png"
                alt=""
                className="w-[40px] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/*Left Arrow Button Section */}
        <div className="w-[20%]">
          <img
            src="./images/groups.png"
            alt=""
            className="w-[40px] cursor-pointer"
          />
        </div>
      </section>

      {/* Reels Section */}

      <section className="overflow-y-scroll">
        <VideoComponent dataList={dataList} />
        <VideoComponent dataList={dataList} />
        {/* <section className="mt-8 h-[90vh] w-[30rem] relative left-4 rounded-[20px] flex justify-center items-center">
          <video width="540px" className="h-[98%] rounded-[25px] border-2 border-red-700" loop={true} autoPlay="autoplay" controls>
            <source src={v2} type="video/mp4" />
          </video>
        </section>
        <section className="mt-8 h-[90vh] w-[30rem] relative left-4 rounded-[20px] flex justify-center items-center">
          <video width="540px" className="h-[98%] rounded-[25px] border-2 border-red-700" loop={true} autoPlay="autoplay" controls>
            <source src={v3} type="video/mp4" />
          </video>
        </section>
        <section className="mt-8 h-[90vh] w-[30rem] relative left-4 rounded-[20px] flex justify-center items-center">
          <video width="540px" className="h-[98%] rounded-[25px] border-2 border-red-700" loop={true} autoPlay="autoplay" controls>
            <source src={v4} type="video/mp4" />
          </video>
        </section>
        <section className="mt-8 h-[90vh] w-[30rem] relative left-4 rounded-[20px] flex justify-center items-center">
          <video width="540px" className="h-[98%] rounded-[25px] border-2 border-red-700" loop={true} autoPlay="autoplay" controls>
            <source src={v5} type="video/mp4" />
          </video>
        </section>
        <section className="mt-8 h-[90vh] w-[30rem] relative left-4 rounded-[20px] flex justify-center items-center">
          <video width="540px" className="h-[98%] rounded-[25px] border-2 border-red-700" loop={true} autoPlay="autoplay" controls>
            <source src={v1} type="video/mp4" />
          </video>
        </section> */}
      </section>

      {/* Comment Section */}
      <section className="flex items-center bg-black">
        <div className="w-[80%] flex flex-col text-[12px] text-white gap-2 pl-4">
          <h1 className="font-bold">#nature_lover #nature_lover</h1>
          <p>
            “Nature is a creative and controlling force in the universe,” “the
            external world in its entirety” or “humankind's original condition.”
          </p>
          <div className="flex gap-4">
            <div className="w-[20%] font-bold py-0.5 bg-white text-gray-500 flex items-center justify-center rounded-lg">
              @music
            </div>
            <img
              src="./images/groups.png"
              alt=""
              className="w-[30px] cursor-pointer"
            />
            <p className="flex items-center font-bold">
              maayadari maayadari andamaa
            </p>
          </div>
        </div>

        {/*Right Arrow Button */}
        <div className="w-[20%]">
          <img
            src="./images/groups.png"
            alt=""
            className="w-[40px] cursor-pointer"
          />
        </div>
      </section>
    </div >
  );
};

export default Kicks;
