import React from "react";
import MainCarousel from "../../SliderSection/MainCarousel";
import AccordionToggle from "../../Accordian/AccordianToggle";
import SelectDropdown from "./SelectDropdown";
import { Autocomplete } from "@react-google-maps/api";
import Dropdown from "../../../Login/Content/Modal/Dropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../../redux/actionCreators/postActionCreator";
import moment from "moment";
import { imageUploadApi } from "../../../../redux/actionCreators/rootsActionCreator";
import { toast } from "react-toastify";
const CreatePostModal = ({
  setShowCreatePostModal,
  title,
  handleCloseModal,
}) => {
  const dispatch = useDispatch()
  const reducerData = useSelector((state) => {
    return {
      profile: state.profileReducer.profile,
      activePost: state.rootsReducer.activePost
    };
  });
  const { profile, activePost} = reducerData;
  const name = profile?.fname + profile?.lname;
  const [state, setState] = useState({});
  const isEdit = title === 'Edit';

  const { postPrivacy= isEdit ? activePost?.shareto : '' , postContent = isEdit ? activePost?.text : "", uploadFileList } = state;

  const [ImageFile, setImageFile] = useState(isEdit ? [activePost?.image] : []);
  const [VideoFile, setVideoFile] = useState([]);

  const navigate = useNavigate();
  const onCloseCreatePostModal = () => {
    setShowCreatePostModal(false);
  };

  const handleImageChange = async (e) => {
    if (e === "delete") {
      setImageFile("");
      setVideoFile("");
    } else {
      const fileList = e.target.files;
      // console.log("fileListwwwwwwwww", fileList);
      // console.log(fileList, "file listtttttttttt");
      const fileArray = Array.from(fileList);
      fileArray.forEach((element) => {
        if (element?.type?.includes("image")) {
          // console.log("eeeeeeeeeeeeeeee", element);
          setImageFile((ImageFile) => [...ImageFile, element]);
        } else {
          setVideoFile((VideoFile) => [...VideoFile, element]);
        }
      });
      // const uploadFile = await dispatch(imageUploadApi(fileList[0]))
      // setState((prev) => ({...prev, }))
      uploadAllImages(fileArray)
      // console.log(uploadFile, "resppppppppppp");
    }
  };

  function uploadAllImages (files) {
    // console.log(files, 'GGGGGGGGGGGGGGG');
    Promise.all(files.map((item, index) => {
      return dispatch(imageUploadApi(item))
    })).then((res) => {
      // console.log(res, 'RDDDDDDDDDDDD');
      const paths = res.map(item => item.path)
      setState({...state, uploadFileList: paths})
    })
  }

  const handlePostPrivacy = (selectedValue) => {
    setState({ ...state, postPrivacy: selectedValue });
  };

  const handleCreatePost = () => {
    const payload = {
      shareto: postPrivacy?.name,
      type: "personal",
      template: "template1",
      image: uploadFileList[0],
      text: postContent,
      suggesttemp: "sugest1",
      utag: null,
      delete: false,
      close: "close",
      profileid: profile?.id,
      postdate: moment().format('DD-MM-YYYY HH:mm:ms'),
    };  
    dispatch(createPost(payload)).then((res) => {
      if(res?.status){
        toast.success(res.message);
        handleCloseModal()
      }else{
        toast.error(res.message)
      }
    })
  }
  return (
    <div className="overflow-y-scroll bg-white top-[5rem] sm:top-8 w-[90%] sm:w-[80%] lg:w-[77%] sm:h-[70%] lg:h-[75%] xl:h-[80%] xl:w-[70%] py-[10px] px-2 sm:px-4 rounded-2xl mx-auto relative z-20">
      {/* create post */}
      <div className="flex justify-between">
        <div className="w-full">
          <h3 className=" text-sm sm:text-md font-bold">{title} Post</h3>
        </div>
        <div className="flex">
          <button
            onClick={handleCreatePost}
            className="bg-[#6780AF] text-white text-sm px-3 font-semibold  sm:font-bold sm:px-5 rounded-full "
          >
            Post
          </button>
          <button
            className="bg-transparent text-[#6780AF] font-semibold px-3 text-sm  sm:font-bold sm:px-5 mx-3 border border-[#6780AF] rounded-full"
            onClick={handleCloseModal}
          >
            Discard
          </button>
        </div>
      </div>

      <hr className="w-100 h-[2px] sm:h-1 bg-gray-200 border-0 rounded my-2 sm:my-3 dark:bg-gray-900" />
      <div className="grid sm:grid-cols-2 gap-2 ">
        <div className="">
          <div className="lg:w-[75%] xl:w-[70%] ">
            <section className="flex items-center my-2 gap-2">
              <img
                src="./images/events.jpg"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <span className="font-bold">
                {name ? `${profile?.fname} ${profile?.lname}` : "User"}
              </span>
            </section>
            <section className="flex items-center ">
              <span className=" text-xs w-[40%] sm:text-[10px] lg:w-[30%] xl:w[22%] flex items-center">
                Share with
              </span>

              {/* <SelectDropdown /> */}
              <Dropdown
                selectedValue={postPrivacy}
                handleChange={handlePostPrivacy}
                name="Select who can see your post"
                options={[
                  { name: "Public" },
                  { name: "Friends" },
                  { name: "Relatives" },
                  { name: "Classmates" },
                  { name: "Officemates" },
                  {
                    name: "Create your own union",
                    onClick: "/create-union",
                  },
                ]}
                keyName="name"
              />
            </section>
          </div>
          <div className="absolute sm:left-2/4 sm:ml-0.5 sm:w-0.5 h-[70%] top-[90px] bg-gray-300"></div>
          <div className="leftSide">
            {/* comment */}
            <div className="comment">
              <textarea
                value={postContent}
                onChange={(e) => setState('postContent', e.target.value)}
                placeholder="Write something..."
                className="px-4 pt-2 outline-none bg-[#E4E7EC] w-[95%] rounded-lg my-4 resize-none lg:h-[100px] xl:h-[125px]"
              ></textarea>
            </div>
            {/* add location */}
            <div className="w-[90%] flex p-2 text-sm border-b-2 items-center border-gray-400  font-bold placeholder-gray-500">
              <input
                type="text"
                placeholder="Add Location"
                className="flex-1  p-2 outline-none"
              />
              <SlLocationPin size={20} />
            </div>
            {/* accordion */}
            {/* <div className="my-2">
              <span className="text-gray-500 font-bold inline align-center">
                Turn off commenting
              </span>
              <label className="relative inline-flex items-center mb-5 cursor-pointer float-right mr-12">
                <input type="checkbox" value="" class="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>

              <p className="text-black text-opacity-40 w-[90%] text-sm">
                You can change this later by going to the options at the top of
                your post.
              </p>
            </div> */}

            {/* <hr className="w-[90%] h-0.5 bg-gray-300 border-0 rounded md:my-3 dark:bg-black-900" />
            <div>
              <AccordionToggle />
            </div> */}
          </div>
        </div>

        <div>
          <MainCarousel
          isEdit ={isEdit}
            ImageFile={ImageFile}
            VideoFile={VideoFile}
            handleImageChange={handleImageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
