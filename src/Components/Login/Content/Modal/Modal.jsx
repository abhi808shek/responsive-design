import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Input from "../InputBox/Input";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbPhotoPlus } from "react-icons/tb";
import {
  createProfile,
  getAssenbly,
  getCountryList,
  getDistrict,
  getLocationsList,
  getLoksabha,
  getOrgCategory,
  getStateList,
  loginUser,
  uploadImage,
} from "../../../../redux/actionCreators/authActionCreator";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { geocodeByAddress } from "react-google-places-autocomplete";
import Autocomplete from "react-google-autocomplete";
import { imageUploadApi } from "../../../../redux/actionCreators/eventActionCreator";
import AutocompletePlace from "../../../googlemap/AutocompletePlace";
import { setDataOnStorage, toasterFunction } from "../../../Utility/utility";
import { TiDelete, TiDeleteOutline } from 'react-icons/ti'

const Modal = ({ modalType, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducerData = useSelector((state) => {
    return {
      organizationCategory: state.userReducer.orgCategory,
      userData: state.authReducer.signupData,
      countryList: state.authReducer.countryList,
      stateList: state.authReducer.stateList,
      districtList: state.authReducer.districtList,
      loksabhaList: state.authReducer.loksabhaList,
      assemblyList: state.authReducer.assemblyList,
    };
  });
  const {
    organizationCategory,
    userData,
    countryList,
    stateList,
    districtList,
    loksabhaList,
    assemblyList,
  } = reducerData;
  const [country, setCountry] = useState(null);
  const [states, setState] = useState({});
  const {
    imgFile,
    selectedValue,
    fname,
    lname,
    orgName,
    gender,
    dob,
    state,
    district,
    loksabha,
    assembly,
    category,
    city,
  } = states;

  const isPersonal = modalType === "Personal";
  // let autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), { })
  useEffect(() => {
    isPersonal ? dispatch(getCountryList()) : dispatch(getOrgCategory());
  }, []);
  const handleCountry = (val) => {
    setCountry(val);
    dispatch(getStateList(val.code));
  };

  const handleChange = (name, value) => {
    const obj = {
      state: getDistrict(value.statecode),
      district: getLoksabha(value.did),
      loksabha: getAssenbly(value.lid),
    };
    obj[name] && dispatch(obj[name]);
    setState({ ...states, [name]: value });
  };
  const handleGender = (e) => {
    setState({ ...states, gender: e.target.id });
  };
  const handleDate = (e) => {
    console.log(e.target.value);
    setState({ ...states, dob: e.target.value });
  };
  const handleLiveLocationn = (location) => {
    // console.log(location, "LLLLLLLLL TTTTTTTTTTTTT");
    setState({...states, city: location });
  };
  const handleCreateProfile = async () => {
    const payload = {
      celibrity: false, //default value.
      countrycode: "+91", //default selected in signup screen..
      dob: moment(dob).format("YYYY-MM-DD"), //from user input
      email: userData.uemail, //from signup screen.
      fname: fname, //from user input BUSINESS NAME
      gender: gender,
      pimage: "", //if profile image is there, add the URL here.
      businesscategory: category?.category, //from user input selection.
      orgname: orgName,
      personalLastName: lname, //from user input – profile lnamein SLIDE 4
      personalname: fname, //from user input – profilefnamein SLIDE 4
      profiletype: isPersonal ? "Personal" : "Organization", //profile type, while we passing in signup screen
      updatedate: userData.datetime, //Current UTC time in milliseconds
      userid: userData.userId, // stored User ID from (Slide 3)
    };
    const payloads = {
      assembly: assembly?.assembly, //default value.
      celibrity: false,
      countrycode: "+91", //default selected in signup screen..
      country: country?.country,
      dob: moment(dob).format("YYYY-MM-DD"), //from user input
      email: userData.uemail, //from signup screen.
      fname: fname, //from user input BUSINESS NAME
      gender: gender,
      city: city,
      pimage: "", //if profile image is there, add the URL here.
      loksabha: loksabha?.loksabha,
      lname: lname, //from user input – profile lnamein SLIDE 4
      personalname: fname, //from user input – profilefnamein SLIDE 4
      profiletype: isPersonal ? "Personal" : "Organization", //profile type, while we passing in signup screen
      updatedate: userData.datetime, //Current UTC time in milliseconds
      userid: userData.userId, // stored User ID from (Slide 3)
    };
    const file = new FormData();
    file.append("file", imgFile);
    const data = isPersonal ? payloads : payload;
    if(isPersonal ? !(fname && dob) : !(category?.category && fname && orgName)){
      toasterFunction("Please enter required field");
      return;
    }
    imgFile ? dispatch(imageUploadApi(file)).then((res) => {
      data.pimage = res.data.path;
      dispatch(createProfile(data)).then( async (res)=> {
      if(res.data.status){
        toast.success(res.data.message)
        // navigate('/auth/login')
                  try {
            // dispatch(checkingIsEmailExist(email))
            const userResponse = await dispatch(
              loginUser({
                uemail: userData.uemail,
                password: userData.password,
              })
            );
            console.log("userResponse", userResponse);
            const userCredential = {
              uemail: userResponse?.data.email,
              isLoggedIn: userResponse?.data?.loginstatus,
              token: userResponse?.data?.loginToken,
              id: userResponse.data.id,
            };
            if (!userResponse?.status) {
              navigate('/auth/login')
              toast.error(userResponse.message);
              return userResponse?.message;
            }
            // toast.success(userResponse?.message);
            await setDataOnStorage(userCredential);
            navigate("/select");
          } catch (error) {
            console.log(error);
          }
      } else toast.error(res.data.message)
    }).catch(err => {
      toast.error(err.message)
    })
    }) :
    dispatch(createProfile(data))
      .then(async (res) => {
        if (res.data.status) {
          toast.success(res.data.message);
          // navigate('/auth/login')
          try {
            // dispatch(checkingIsEmailExist(email))
            const userResponse = await dispatch(
              loginUser({
                uemail: userData.uemail,
                password: userData.password,
              })
            );
            console.log("userResponse", userResponse);
            const userCredential = {
              uemail: userResponse?.data.email,
              isLoggedIn: userResponse?.data?.loginstatus,
              token: userResponse?.data?.loginToken,
              id: userResponse.data.id,
            };
            if (!userResponse?.status) {
              toast.error(userResponse.message);
              return userResponse?.message;
            }
            toast.success(userResponse?.message);
            await setDataOnStorage(userCredential);
            navigate("/select");
          } catch (error) {
            console.log(error);
          }
        } else toast.error(res.data.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
    // console.log(response);
  };
  const countryCode = ['1']
  console.log(countryCode?.includes(country?.code));
  const removeProfilePic = () => {
    setState({...states, imgFile: ''})
  }

  const checkDisable = () => {
    if(isPersonal){
    }else {
      //  return !(orgName && category?.category && fname)
    }
  }
  return (
    {
      /* corner radius added to componenet */
    },
    (
      <div
        className=" bg-white w-[95%] sm:w-[95%] lg:w-[95%] h-[100vh] sm:h-[88%] lg:h-[90%] mt-[15px] xl:w-[75%]  xl:h-[80%] sm:mt-[0px] text-center py-2"
        style={{
          // transform: "translate(-50%, -50%)",
          boxShadow: "0px 10px 8px #3f3f3fd9",
        }}
      >
        <h2 className="font-semibold text-xl border-b-[3px] border-grey-400 py-2">
          Let's Create Profile
        </h2>
        <div className="flex bg-white flex-col md:flex-row my-4 h-[118vh] sm:h-[80%]">
          <div className="md:w-1/2 mr-4 border-r-[3px] border-grey-400">
            {/* font-weight removed, font-size reduced, padding added,*/}
            <h2 className="text-xl py-3">Add Profile Picture</h2>
            <div>
              <input
                id="profilePic"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  setState({ ...states, imgFile: e.target.files[0] })
                }
              />
              <label
                htmlFor="profilePic"
                className="flex relative justify-center items-center cursor-pointer w-[10rem] h-[10rem] sm:w-[13rem] sm:h-[13rem] lg:w-[14rem] lg:h-[14rem] xl:w-[15rem] xl:h-[15rem] mx-auto rounded-full bg-gray-200"
              >
                {imgFile ? (
                  <>
                    <img
                      className={
                        "w-[10rem] h-[10rem] sm:w-[13rem] sm:h-[13rem] lg:w-[14rem] lg:h-[14rem] xl:w-[15rem] xl:h-[15rem] mx-auto relative rounded-full block"
                      }
                      src={URL.createObjectURL(imgFile)}
                    />
                    <div
                      className="absolute top-0 right-[34px] bg-white w-[30px] h-[30px] rounded-full border-1 border-white"
                      onClick={removeProfilePic}
                    >
                      <TiDeleteOutline size={30} />
                    </div>
                  </>
                ) : (
                  <span>
                    <TbPhotoPlus size={45} />
                  </span>
                )}
              </label>
              <div className="pt-6">
                {/* bg-color, padding, font-weight of label changed */}
                <label
                  htmlFor="profilePic"
                  className="bg-[#6780af] text-xs sm:text-sm cursor-pointer p-[4px 20px] rounded-xl py-2 text-white font-medium mt-6 px-6"
                >
                  {imgFile ? "Change profile picture" : "Select from computer"}
                </label>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 max-w-[25rem] px-4 relative mt-2 bg-white">
            <div className="mx-auto">
              {/*<Dropdown
              name={isPersonal ? "Select Profile Type*" : "Organization"}
              options={isPersonal ? ["Personal"] : ["World Trade Org"]}
            />*/}

              {/* last name field added */}
              <div className="mt-[9px] mb-2.5">
                <Input
                  title="First Name*"
                  name="fname"
                  onHandleChange={(e) =>
                    setState({ ...states, fname: e.target.value })
                  }
                  className="w-full"
                />
              </div>
              {/* Lastname field was added */}
              <div className="mt-[2px]">
                <Input
                  title="Last Name*"
                  name="lname"
                  onHandleChange={(e) =>
                    setState({ ...states, lname: e.target.value })
                  }
                  className="w-full"
                />
              </div>
              {isPersonal ? (
                <>
                  {/* size of radio button incresed, accent color of button changed,
                    margin top of rdio button removed and margin added to input component*/}
                  <div className="flex justify-between my-3 items-center">
                    {/* input and label grouped in a div, padding added to label*/}
                    <div className="flex justify-center items-center">
                      <input
                        type="radio"
                        name="gender"
                        id="Male"
                        className="h-5 w-4 accent-stone-500"
                        onClick={(e) => handleGender(e)}
                      />
                      <label className="pl-2">Male</label>
                    </div>

                    <div className="flex justify-center items-center">
                      <input
                        type="radio"
                        name="gender"
                        className="h-5 w-4 accent-stone-500"
                        id="Female"
                        onClick={(e) => handleGender(e)}
                      />
                      <label className="pl-2">Female</label>
                    </div>

                    <div className="flex justify-center items-center">
                      <input
                        type="radio"
                        name="gender"
                        className="h-5 w-4 accent-stone-500"
                        id="Other"
                        onClick={(e) => handleGender(e)}
                      />
                      <label className="pl-2">Other</label>
                    </div>
                  </div>
                  {/* <Dropdown name={"Date of birth"} options={[]} /> */}
                  <input
                    type="date"
                    onChange={handleDate}
                    className="w-full h-9 border-[1px] my-1 px-2 text-gray-500 outline-none border-gray-300 rounded-[5px]"
                  />
                  <Dropdown2
                    style={"w-full"}
                    name={"Select country"}
                    country={country}
                    options={countryList}
                    handleCountry={handleCountry}
                  />

                  {/* created Dropdown2 component, when selecting country new dropdowns are shown ,
                    for this local state added, a function created for
                    getting value from child componenet*/}

                  {country ? (
                    <>
                      <div className="flex  flex-col lg:gap-1">
                        <Dropdown
                          name={"State"}
                          options={stateList}
                          selectedValue={state}
                          keyName={"state"}
                          handleChange={(value) => handleChange("state", value)}
                        />
                        {
                          countryCode?.includes(country?.code) &&
                          <>
                            <Dropdown
                          name={"District"}
                          options={districtList}
                          selectedValue={district}
                          keyName={"distric"}
                          handleChange={(value) =>
                            handleChange("district", value)
                          }
                        />
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Dropdown
                          name={"Loksabha"}
                          keyName={"loksabha"}
                          options={loksabhaList}
                          selectedValue={loksabha}
                          handleChange={(value) =>
                            handleChange("loksabha", value)
                          }
                        />
                        <Dropdown
                          name={"Assembly"}
                          keyName={"assembly"}
                          options={assemblyList}
                          selectedValue={assembly}
                          handleChange={(value) =>
                            handleChange("assembly", value)
                          }
                        />
                      </div>
                          </> 
                        }
                        
                      <div className="mt-1.5 relative">
                        {/* <Input id='autocomplete' title="Living Location*" className="w-full" onHandleChange={ handleLiveLocationn}/> */}
                        <AutocompletePlace
                          livePlace={handleLiveLocationn}
                          map={false}
                          placeholder={"Search your city"}
                          types={'cities'}
                        />
                        {/* <input id="autocomplete" type="text"/> */}
                      </div>
                      </div>
                    </>
                  ) : null}
                </>
              ) : (
                <>
                  {/* as per documentation the address, intro, website
                    input fields are removed */}
                  <input
                    type="date"
                    onChange={handleDate}
                    className="w-full h-9 border-[1px] my-1 px-2 text-gray-500 outline-none border-gray-300 rounded-[5px]"
                  />

                  <div className="flex justify-between items-center">
                    {/* gender selection field, organization name added added */}
                    <div className="flex my-2 justify-center items-center">
                      <input
                        type="radio"
                        name="gender"
                        className="h-5 w-4 accent-stone-500"
                        id="Male"
                        onChange={(e) => handleGender(e)}
                      />
                      <label className="pl-2">Male</label>
                    </div>

                    <div className="flex justify-center items-center">
                      <input
                        type="radio"
                        name="gender"
                        className="h-5 w-4 accent-stone-500"
                        id="Female"
                        onChange={(e) => handleGender(e)}
                      />
                      <label className="pl-2">Female</label>
                    </div>

                    <div className="flex justify-center items-center">
                      <input
                        type="radio"
                        name="gender"
                        className="h-5 w-4 accent-stone-500"
                        id="Other"
                        onChange={(e) => handleGender(e)}
                      />
                      <label className="pl-2">Other</label>
                    </div>
                  </div>

                  <Input
                    type="search"
                    title="Organization Name*"
                    onHandleChange={(e) =>
                      handleChange("orgName", e.target.value)
                    }
                  />
                  <Dropdown
                    name={"Organization Category*"}
                    options={organizationCategory}
                    handleChange={(value) => handleChange("category", value)}
                    selectedValue={category}
                    keyName={"category"}
                  />
                </>
              )}
            </div>

            {/* create button positioned to top level div */}
            <div className="flex justify-center">
              <button
                disabled={checkDisable()}
                className="flex justify-center"
                onClick={handleCreateProfile}
              >
                <label
                  htmlFor=""
                  className="bg-[#6780af] w-52 text-xs sm:text-sm flex justify-center py-1 rounded-xl cursor-pointer mt-5 text-white font-medium"
                >
                  Create
                </label>
              </button>
            </div>
          </div>
        </div>
        <span
          className="absolute top-[5%] lg:right-[3rem] sm:top-[8%] xl:right-[12rem] xl:top-[12%] cursor-pointer"
          onClick={() => handleClose()}
        >
          <AiOutlineCloseCircle size={25} className="text-gray-600" />
        </span>
      </div>
    )
  );
};

export default Modal;
