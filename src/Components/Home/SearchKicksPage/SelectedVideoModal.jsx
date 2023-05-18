import { useState } from 'react'
import profile from '../../../Assets/Images/Person.jpg'
import videoImg from '../../../Assets/Images/videoImg.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md';
import { imageUploadApi } from '../../../redux/actionCreators/rootsActionCreator';
import { createKicksPost } from '../../../redux/actionCreators/kicksActionCreator';
import moment from 'moment';
import { toast } from 'react-toastify';

const dataList = [
  'All', 'Action', 'Adventures', 'Arts & Craft', 'Beauty Tips', 'Comedy', 'Drama', 'Fiction', 'Novel', 'Romance'
]

export default function SelectedVideoModal({ onClose, selectedVideo }) {
  const dispatch = useDispatch()

  const reducerDate = useSelector((state) => {
    return {
      profile: state.profileReducer.profile
    }
  });

  const { profile } = reducerDate;
  const name = profile?.fname + profile?.lname;

  const [state, setState] = useState({})
  const { videoFile, postContent } = state;
  const handleFileSelection = (e) => {
    const file = e.target.files[0];
    setState({ ...state, videoFile: file })
  }

  const addPost = async () => {
    const payload = {
      shareto: "share1",
      type: "type1",
      template: "template1",
      // image: "afadsf1,sdfasdf,dfasdf",
      text: postContent,
      suggesttemp: "sugest1",
      utag: null,
      delete: false,
      close: "close",
      profileid: profile?.id,
      postdate: moment().format('YYYY-MM-DDTHH:mm'),
    };
    const uploadVideo = await dispatch(imageUploadApi(videoFile));
    try {
      if (uploadVideo?.status) {
        payload.video = uploadVideo?.path
        const createPost = await dispatch(createKicksPost(payload));
        if (createPost.status) {
          toast.success(createPost.message)
          onClose()
        } else {
          throw createPost
        }
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <div
      className="top-0 absolute  left-0 fixed flex justify-center items-center w-full h-full z-40"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white p-4 w-[50%] rounded-lg m-auto">
        <p className="py-1 border-b mb-2 font-semibold text-orange-600 flex justify-center text-xl">
          Add Kicks
        </p>
        <section className="flex justify-between">
          <div className="flex flex-col w-[500px] mr-12">
            <div className="flex w-full my-6 items-center">
              <img
                src={profile?.pimage}
                className="w-10 border border-gray-600 h-10 rounded-full object-cover mr-2"
              />
              <span>
                {name ? `${profile?.fname} ${profile?.lname}` : "User"}
              </span>
            </div>
            <select className="w-full outline-none h-12 px-2 border-gray-300 rounded overflow-hidden bg-white border text-black">
              {dataList.map((data, i) => (
                <option key={i}>{data}</option>
              ))}
            </select>
          </div>
          <label htmlFor='chooseVideos' className="w-[500px] h-[200px] flex justify-center items-center  ml-30 cursor-pointer border border-gray-400 rounded-md">
            <input
              accept='video/*'
              type="file"
              id="chooseVideos"
              onChange={handleFileSelection}
              className="hidden"
            />
            {
              videoFile ?
                <div className='flex flex-col w-full h-full bg-black'>
                  <video className='h-full w-full'
                    height={200} controls autoPlay src={URL.createObjectURL(videoFile)}></video>
                  <div className='bg-white flex justify-center' onClick={() => setState({ ...state, videoFile: '' })}><MdDelete size={24} color='red' /></div>
                </div>
                :
                <spna className='bg-gray-200 py-2 px-3 rounded-md'>Upload</spna>
            }
          </label>
        </section>

        <section className="">
          <textarea
            onChange={(e) => setState({ ...state, postContent: e.target.value })}
            value={postContent}
            rows="5"
            id="message"
            name="message"
            placeholder="Write something..."
            className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 my-3 mr-2 bg-gray-100"
          />

          <div className="flex">
            <button onClick={() => addPost()}
              className="bg-[#649b8e] text-white font-bold border border-[#649b8e] px-5 w-1/2 mx-3 py-2 rounded-lg">
              Post
            </button>
            <button
              onClick={onClose}
              className="px-5 w-1/2 border border-[#649b8e] py-2 mx-3 rounded-lg text-black"
            >
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}