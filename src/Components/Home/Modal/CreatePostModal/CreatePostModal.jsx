import React, { useEffect } from "react";
import MainCarousel from "../../SliderSection/MainCarousel";
import AccordionToggle from "../../Accordian/AccordianToggle";
import SelectDropdown from "./SelectDropdown";
import { Autocomplete } from "@react-google-maps/api";
import Dropdown from "../../../Login/Content/Modal/Dropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../../../redux/actionCreators/postActionCreator";
import moment from "moment";
import { getAllPostWithLimit, imageUploadApi } from "../../../../redux/actionCreators/rootsActionCreator";
import { toast } from "react-toastify";
import AutocompletePlace from "../../../googlemap/AutocompletePlace";
import { Alert } from "@material-tailwind/react";
import { list } from "postcss";
import { getMyUnion } from "../../../../redux/actionCreators/unionActionCreator";
const CreatePostModal = ({
  // setShowCreatePostModal,
  title,
  handleCloseModal,
}) => {
  const dispatch = useDispatch();
  const reducerData = useSelector((state) => {
    return {
      profile: state.profileReducer.profile,
      activePost: state.rootsReducer.activePost,
      myUnionList: state.unionReducer.myUnionList,
    };
  });
  const { profile, activePost, myUnionList} = reducerData;
  const name = profile?.fname + profile?.lname;
  const [state, setState] = useState({});
  const isEdit = title === "Edit";
  const isPersonal = profile?.profiletype === "Personal"

  const {
    postPrivacy = isEdit ? activePost?.shareto : "",
    postContent = isEdit ? activePost?.text : "",
    location = isEdit ? activePost?.location : "",
    uploadFileList,
    alert,
  } = state;

  const [ImageFile, setImageFile] = useState(isEdit ? [activePost?.image] : []);
  const [VideoFile, setVideoFile] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMyUnion(profile?.id))
  }, [])

  const handlePostContent = (e) => {
    setState({ ...state, "postContent": e.target.value });
  }

  const handleImageChange = async (e) => {
    if (e === "delete") {
      setImageFile("");
      setVideoFile("");
    } else {
      const fileList = e.target.files;

      const fileArray = Array.from(fileList);
      fileArray.forEach((element) => {
        if (element?.type?.includes("image")) {
          setImageFile((ImageFile) => [...ImageFile, element]);
        } else {
          setVideoFile((VideoFile) => [...VideoFile, element]);
        }
      });

      uploadAllImages(fileArray);
    }
  };

  function uploadAllImages(files) {
    Promise.all(
      files?.map((item, index) => {
        return dispatch(imageUploadApi(item));
      })
    ).then((res) => {
      const paths = res.map((item) => item.path);
      setState({ ...state, uploadFileList: paths });
    });
  }
  let privacyList =[
      { name: "Public" },
      { name: "Friends" },
      { name: "Relatives" },
      { name: "Classmates" },
      { name: "Officemates" },
  ]
  const unions = myUnionList.map((item) => {
    return { name: item?.groupName}
  })
  const postPrivacyList = isPersonal ? [...privacyList, ...unions] : [{ name: "Friends"}, ...unions];
  console.log({postPrivacyList, privacyList, unions, isPersonal});
  const handlePostPrivacy = (selectedValue) => {
    if (selectedValue?.name === "Friends") {
      setState({ ...state, alert: true, postPrivacy: selectedValue });
    }else{
      setState({ ...state, alert: true, postPrivacy: selectedValue });
    }

    setTimeout(() => {
      setState({...state,postPrivacy: selectedValue, alert: false})
    }, 1000)
    // setState({ ...state, postPrivacy: selectedValue });
  };
  console.log(uploadFileList?.[0], "uploadFileList?.[0]");
  const handleCreatePost = () => {
    const payload = {
      shareto: postPrivacy?.name,
      type: "personal",
      template: "template1",
      image: uploadFileList?.[0],
      text: postContent,
      suggesttemp: "sugest1",
      utag: null,
      delete: false,
      close: "close",
      profileid: profile?.id,
      city: location,
      postdate: moment().format('DD-MM-YYYY HH:mm:ms'),
    };
    const updatePayload = {
      profileid: profile?.id,
      shareto: postPrivacy?.name,
      type: "personal",
      template: "template1",
      image: uploadFileList?.[0],
      text: postContent,
      suggesttemp: "sugest1",
      utag: null,
      delete: false,
      close: "close",
      postid: activePost?.id,
      location: location,
      datetime: moment().format("DD-MM-YYYY HH:mm:ms"),
    };
    isEdit ?
      dispatch(updatePost(updatePayload)).then((res) => {
        handleCloseModal()
        // handleCloseModal();
        dispatch(getAllPostWithLimit(profile?.id));
      })
      :
      dispatch(createPost(payload)).then((res) => {
        if (res?.status) {
          toast.success(res.message);
          handleCloseModal()
          dispatch(getAllPostWithLimit(profile?.id))
        } else {
          toast.error(res.message)
        }
      });
  };
  const handlePlace = (location) => {
    setState({...state, location})
  }
  return (
    <div className="overflow-y-scroll bg-white top-[5rem] sm:top-8 w-[90%] sm:w-[80%] lg:w-[77%] sm:h-[70%] lg:h-[75%] xl:h-[80%] xl:w-[70%] py-[10px] px-2 sm:px-4 rounded-2xl mx-auto relative z-50">
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
            <section className="flex items-center relative ">
              <span className=" text-xs w-[40%] sm:text-[10px] lg:w-[30%] xl:w[22%] flex items-center">
                Share with
              </span>

              {/* <SelectDropdown /> */}
              <Dropdown
                selectedValue={postPrivacy}
                handleChange={handlePostPrivacy}
                name="Select who can see your post"
                options={[
                  ...postPrivacyList,
                  {
                    name: "Create your own union",
                    onClick: true,
                    link: "/create-union",
                  },
                ]}
                keyName="name"
              />
              {alert && (
                <div className="absolute z-40 -bottom-8 right-0">
                  <Alert variant="outlined" className="z-[50] bg-transparent text-gray-600">
                    You do not have {postPrivacy?.name}
                  </Alert>
                </div>
              )}
            </section>
          </div>
          <div className="absolute sm:left-2/4 sm:ml-0.5 sm:w-0.5 h-[70%] top-[90px] bg-gray-300"></div>
          <div className="leftSide">
            {/* comment */}
            <div className="comment">
              <textarea
                value={postContent}
                onChange={(e) => handlePostContent(e)}
                placeholder="Write something..."
                className="px-4 pt-2 outline-none bg-[#E4E7EC] w-[95%] rounded-lg my-4 resize-none lg:h-[100px] xl:h-[125px]"
              ></textarea>
            </div>
            {/* add location */}
            <div className="w-full flex p-2 text-sm  items-center placeholder-gray-500">
              {/* <input
                type="text"
                placeholder="Add Location"
                className="flex-1  p-2 outline-none"
              /> */}
              <AutocompletePlace
                placeholder={"Add location"}
                value={location}
                livePlace={handlePlace}
              />
              <SlLocationPin size={20} className="ml-4" />
            </div>
          </div>
        </div>

        <div>
          <MainCarousel
            isEdit={isEdit}
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
