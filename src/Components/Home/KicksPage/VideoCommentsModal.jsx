import { MdOutlineMusicNote } from "react-icons/md";
import { TiArrowBack } from "react-icons/ti";
import { AiFillHeart } from "react-icons/ai";
import profile from "../../../Assets/Images/Person.jpg";
import profile2 from "../../../Assets/Images/bg2.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function VideoCommentsModal({ onClose }) {
  const reducerData = useSelector((state) => {
    return {
      commentsList: state.kicksReducer.comments,
    };
  });
  const { commentsList = [] } = reducerData;
  const [state, setState] = useState({});
  const {} = state;
  console.log(commentsList, "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");
  return (
    <section
      className="fixed justify-center z-10 items-center top-0 left-0 h-full w-full flex"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <section className="w-[40%]  bg-white h-[80%] mt-16 overflow-scroll hideScroll text-black rounded-xl p-0.5">
        <div className="flex justify-between p-3 border-b">
          <span className="text-[19px] font-medium">Comments</span>
          <AiOutlineCloseCircle
            onClick={onClose}
            className="w-7 h-7 text-gray-700 cursor-pointer"
          />
        </div>
        {commentsList?.map((data, i) => {
          {
            /* console.log(data, "CCCCCCCCCCCCCMMMMMMMMMMMMMMMMMM") */
          }
          const { profile, text, id, likecount, replycount } = data;
          const name = profile?.fname + profile?.lname;
          return (
            <>
              <div key={id} className="my-2 flex items-center">
                <div className="w-1/6 flex justify-center">
                  <img
                    src={profile?.pimage}
                    className="w-12 h-12 border border-gray-500 rounded-full object-cover"
                  />
                </div>

                <div className="bg-[#f3f6f8] w-4/6 p-2 rounded-md">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-semibold text-[15px]">
                        {name ? `${profile?.fname} ${profile.lname}` : "User"}
                      </span>
                      <span className="text-[10px] px-2">
                        Apr 29, 2023 at 8.30am
                      </span>
                    </div>
                    <div>
                      <BsThreeDots />
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-[14px]">{text}</span>
                    <div className="text-[11px]">
                      <span className="px-1">
                        {likecount?.length || 0} likes
                      </span>
                      <span>{replycount?.length || 0} replies</span>
                    </div>
                  </div>
                </div>

                <div className="w-1/6 pl-2 text-[#666666]">
                  <AiFillHeart className="text-2xl" />
                  <TiArrowBack className="text-2xl" />
                </div>
              </div>
              {replycount?.map((item) => {
                const { text, emoji, commentid, profile, likecount } = item;
                const name = profile?.fname + profile?.lname;
                console.log(
                  item,
                  profile,
                  profile?.pimage,
                  "___________ IIIIIIIIIIIIIIIIIIII"
                );
                return (
                  <div
                    key={i}
                    className="my-2 ml-[14%] w-[83%] flex items-center"
                  >
                    <div className="w-1/6 text-sm flex justify-center">
                      <img
                        src={profile?.pimage}
                        alt="User"
                        className="w-10 h-10 border-gray-600 border flex items-center justify-center rounded-full object-cover"
                      />
                    </div>

                    <div className="bg-[#f3f6f8] w-4/6 p-2 rounded-md">
                      <div className="flex justify-between">
                        <div>
                          <span className="font-semibold text-[15px]">
                            {name
                              ? `${profile?.fname} ${profile?.lname}`
                              : "User"}
                          </span>
                          <span className="text-[10px] px-2">
                            Apr 29, 2023 at 8.30am
                          </span>
                        </div>
                        <div>
                          <BsThreeDots />
                        </div>
                      </div>

                      <div className="flex justify-between items-end">
                        <span className="text-[14px]">{text}</span>
                        <div className="text-[11px]">
                          <span className="px-1">
                            {likecount?.length || 0} likes
                          </span>
                          {/* <span>2 replies</span> */}
                        </div>
                      </div>
                    </div>

                    <div className="w-1/6 pl-2 text-[#666666]">
                      <AiFillHeart className="text-2xl" />
                    </div>
                  </div>
                );
              })}
            </>
          );
        })}
      </section>
      {/* input section*/}
      <div className="mx-5 mt-2 bg-gray-100 flex items-center px-1 py-1 border-gray-400 border rounded-lg">
        <input
          className="w-full my-1 outline-none bg-gray-100"
          placeholder="Write something..."
        />
        <span>
          <IoSend className="text-blue-500 text-2xl mx-2 cursor-pointer" />
        </span>
      </div>
    </section>
  );
}
