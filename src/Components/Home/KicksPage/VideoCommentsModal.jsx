import { MdOutlineMusicNote } from 'react-icons/md'
import { TiArrowBack } from 'react-icons/ti'
import { AiFillHeart } from 'react-icons/ai'
import { IoSend } from 'react-icons/io5'
import profile from '../../../Assets/Images/Person.jpg'
import profile2 from '../../../Assets/Images/bg2.jpg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, input } from '@material-tailwind/react'
import TypeMessage from '../../chat/TypeMessage'
import { addCommentOnKicks, addCommentReplyOnKicks, getCommentsByPostid, getCommentsReplyByPostid } from '../../../redux/actionCreators/kicksActionCreator'
import moment from 'moment'
import { toast } from 'react-toastify'
import { getCommentByPostid, imageUploadApi } from '../../../redux/actionCreators/rootsActionCreator';

export default function
  VideoCommentsModal({ onClose }) {
  const dispatch = useDispatch()
  const reducerData = useSelector((state) => {
    return {
      commentsList: state.kicksReducer.comments,
      activePost: state.rootsReducer?.activePost,  //active post --- that post which is currently click by user
      profile: state.profileReducer.profile,
      replyList: state.kicksReducer.reply
    }
  });

  // console.log("reply", replyList)
  const { commentsList = [], activePost, profile } = reducerData
  // const { replyList = [], reply } = reducerData
  // console.log("repppppppp", commentsList);
  const [state, setState] = useState({})
  const { commentImage, imgFile, alert } = state;
  const [openInput, setOpenInput] = useState(false);
  const [id, setid] = useState("");

  const openReplyModal = (id) => {
    setOpenInput(true);
    setid(id);

  }

  // comment Reply api intregration....
  const handleSendReply = async (msgText) => {
    if (!msgText) {
      setState({ ...state, alert: true })
    }
    let imgPath;
    if (commentImage) {
      imgPath = dispatch(imageUploadApi(imgFile));
    }
    if (msgText?.trim() || imgPath) {
      const payload = {
        profileid: profile?.id,
        commentid: id,
        text: msgText,
        image: imgPath?.path,
        emogi: "emogi",
        datetime: moment().format("YYYY-MM-DDTHH:mm:ms"),
      }
      dispatch(addCommentReplyOnKicks(payload)).then((res) => {
        console.log(res);
        // if (res?.status) {
        //   dispatch(getCommentsReplyByPostid(id))
        // } else {
        //   toast.error(res?.message)  
        // }
        dispatch(getCommentsByPostid(activePost?.id))
      }
      )
    }
  }

  const handleSendComment = async (msgText) => {
    console.log("profileid", profile?.id)
    console.log("postid", activePost?.id)
    if (!msgText) {
      setState({ ...state, alert: true })
    }
    let imgPath;
    if (commentImage) {
      imgPath = dispatch(imageUploadApi(imgFile))
    }
    if (msgText?.trim() || imgPath) {
      const payload = {
        profileid: profile?.id,
        postid: activePost?.id,
        text: msgText,
        image: imgPath?.path,
        emogi: "emogi",
        datetime: moment().format("YYYY-MM-DDTHH:mm:ms"),
      };
      dispatch(addCommentOnKicks(payload)).then((res) => {
        console.log(res);
        if (res?.status) {
          dispatch(getCommentsByPostid(activePost?.id))
        } else {
          toast.error(res?.message)
        }
      }).catch((err) => {
        console.log(err);
        toast.error(err.message)
      })
    }
  }

  const handleLike = (itemId) => {
  }

  const handleFile = (e) => {
    const file = URL.createObjectURL(e.target.files[0])
    console.log(file, ">>>>>>>>>>>>>>>>");
    setState({ ...state, commentImage: file, imgFile: e.target.files[0] })
  }

  // console.log("reply add", commentsList)

  return (
    <section
      className="fixed items-stretch justify-center z-10 top-0 left-0 h-full w-full flex"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <section className="pb-20 w-[50%] sm:w-[50%] lg:w-[40%] relative  bg-white h-[80%] mt-16 overflow-scroll hideScroll text-black rounded-xl p-0.5 z-50">
        <div className="flex justify-between p-3 border-b">
          <span className="text-[19px] font-medium">Comments</span>
          <AiOutlineCloseCircle
            onClick={onClose}
            className="w-7 h-7 text-gray-700 cursor-pointer"
          />
        </div>

        {(commentsList?.content ? commentsList.content : commentsList)?.map((data, i) => {

          const { profile, text, id, likecount, replycount, datetime, postid, profileid } = data;
          const name = profile?.fname + profile?.lname;
          return (
            <>
              <div key={id} className="my-2 flex items-center z-50 ">
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
                        {moment(datetime, "YYYY-MM-DDTHH:mm:ms").format('DD  MMM, YYYY')}
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
                {/* <input type="text" /> */}

                <div className="w-1/6 pl-2 text-[#666666]">
                  <AiFillHeart className="text-2xl" />
                  <TiArrowBack className="text-2xl cursor-pointer" onClick={() => openReplyModal(id)} />
                </div>
              </div>
              {replycount?.map((item, i) => {
                const { text, emoji, commentid, profile, likecount } = item;
                const name = profile?.fname + profile?.lname;
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

                    <button onClick={() => handleLike(id)} className="w-1/6 pl-2 text-[#666666]">
                      <AiFillHeart className="text-2xl" />
                    </button>
                  </div>

                );
              })}
            </>
          );
        })}


        <div className="mt-auto fixed left-50 bottom-[10%]  bg-blue-200  rounded-md w-[45%] lg:w-[35%] ">
          {
            openInput === false ?
              <TypeMessage
                alert={alert}
                msgFile={commentImage}
                handleFile={handleFile}
                placeholder="Add comment"
                sendMessage={handleSendComment}
              />
              :
              <div className='flex items-center ml-4'>
                <TypeMessage
                  alert={alert}
                  msgFile={commentImage}
                  handleFile={handleFile}
                  placeholder="Reply comment....."
                  sendMessage={handleSendReply}
                />
                <AiOutlineCloseCircle
                  onClick={() => setOpenInput(false)}
                  className="w-7 h-7 text-gray-700 cursor-pointer mr-4 border-red-500"
                />
              </div>

          }
        </div>
      </section>

    </section>
  );
}