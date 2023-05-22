import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../Login/Content/Modal/Dropdown";
import {
  checkingIsEmailExist,
  getAssenbly,
  getCountryList,
  getDistrict,
  getLoksabha,
  getOrgCategory,
  getStateList,
} from "../../../redux/actionCreators/authActionCreator";
import AutocompletePlace from "../../googlemap/AutocompletePlace";
import Dropdown2 from "../../Login/Content/Modal/Dropdown2";
import { addGraduation, getGraduationList, getPgList, getProfileById, updateEducation, updateProfile } from "../../../redux/actionCreators/profileAction";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { imageUploadApi } from "../../../redux/actionCreators/eventActionCreator";
import Input from "../../input/input";
import PersonalAccount from "./PersonalAccount";
import OrganizationAccount from "./OrganizationAccount";
import { getEducationDetail } from "../../../redux/actionCreators/profileAction";
import { Typography } from "@material-tailwind/react";
import { getUserDataFromLocalStorage } from "../../Utility/utility";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reducerData = useSelector((state) => {
    return {
      profileDetail: state?.profileReducer?.profileDetail?.data || state.profileReducer.profile,
      educationDetails: state?.profileReducer?.educationDetails?.data,
      profile: state?.profileReducer?.profile,
    };
  });
  const { profileDetail, educationDetails, profile } = reducerData;
  const [states, setState] = useState(profileDetail || {});
  const [country, setCountry] = useState({country : profile?.country});
  const [education, setEducation] = useState(educationDetails || {});
  const [orgDetail, setOrgDetail] = useState({});

  const {
    pcoverimage,
    pimage,
    fname,
    lname,
    email,
    dob,
    gender,
    state = { state: profile?.state },
    district,
    loksabha =  {loksabha: profile?.loksabha},
    assembly,
    profiletype,
    userid,
    id,
    profilePic,
    coverPic,
    code,
    location=profile?.city
  } = states;

  const isPersonal = profiletype === "Personal";

  useEffect(() => {
    isPersonal ? getPersonalDetail() : dispatch(getOrgCategory());
  }, [profiletype]);

  const getPersonalDetail = () => {
     dispatch(getCountryList());
     dispatch(getEducationDetail(id));
     dispatch(getPgList());
     dispatch(getGraduationList());
  }
  const handleUpload = (name, value) => {
    if (name === "profile") {
      const profileImg = URL.createObjectURL(value);
      setState({ ...states, pimage: profileImg, profilePic: value });
    } else if ("cover") {
      const profileImg = URL.createObjectURL(value);
      setState({ ...states, pcoverimage: profileImg, coverPic: value });
    }
  };

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

  const handleOrganization = (name, value) => {
    setOrgDetail({...orgDetail, [name]: value})
  }
  const handleSubmit = async () => {
    if (email !== profile?.email) {
      const checkEmail = await dispatch(checkingIsEmailExist(email));
      console.log(checkEmail, );
      if(checkEmail?.status){
        return toast.error("Email id is already registered with us")
      }
    }
    const payloads = {
      id: id,
      assembly: assembly?.assembly, //default value.
      celibrity: false,
      countrycode: "+91", //default selected in signup screen..
      country: country?.country || "",
      dob: moment(dob).format("YYYY-MM-DD"), //from user input
      email: email, //from signup screen.
      fname: fname, //from user input BUSINESS NAME
      gender: gender,
      pimage: "", //if profile image is there, add the URL here.
      loksabha: loksabha?.loksabha,
      state: state?.state || '',
      city: location,
      lname: lname, //from user input – profile lnamein SLIDE 4
      personalname: fname, //from user input – profilefnamein SLIDE 4
      profiletype: isPersonal ? "Personal" : "Organization", //profile type, while we passing in signup screen
      updatedate: Date.now(), //Current UTC time in milliseconds
      userid: userid, // stored User ID from (Slide 3)
    };
    if (profilePic) {
      const file = new FormData();
      file.append("file", profilePic);
      let response = await dispatch(imageUploadApi(file));
      payloads.pimage = response.data.path;
    }
    if (coverPic) {
      const file = new FormData();
      file.append("file", coverPic);
      let response = await dispatch(imageUploadApi(file));
      payloads.pcoverimage = response.data.path;
    }
    isPersonal ? addEducation() : addProfession()
    
    dispatch(updateProfile(payloads))
      .then((res) => {
        if (res.status) {
          navigate("/profile");
          dispatch(getProfileById(getUserDataFromLocalStorage().id))
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {});
  };
// ------------------- for organization account ----------------
  function addProfession(){

  }
console.log(state, "STATEEEEE");
  // ---------------- for personal account ----------------------
 async function addEducation (){
  Promise.all([
    dispatch(updateEducation(education)),
    dispatch(addGraduation(education)),
  ]).then((res) => {
    if(res[0]?.status){
      dispatch(getEducationDetail(id))
    }
  });
  }
  const handleEducation = (name, value) => setEducation({...education, [name]: value})
  // console.log(profileDetail, stateName, moment(dob).format('YYYY-MM-DD'), 'PPPPPPPPPPPPPPP');
  const checkDisable = () => {
    return !(fname || lname)
  }
    const handleLocation = (location) => {
      setState({...states, location})
    };
  return (
    <div className="bg-[#E4E7EC] w-[100%]  p-6">
      <div className="updateTitle text-center rounded-xl flex-wrap mt-2 mb-6 bg-[#FFFFFF] text-[#000] text-xl ">
        <h3 className="p-2 font-bold">Let's update your profile</h3>
        <h4 className=" text-[#666567]">
          This will help us others get to know better!
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center rounded-2xl md:grid-cols-2 ">
        <div className="bg-[#fff] rounded-2xl ">
          <h3 className="p-2 font-bold text-center text-[20px]">
            Cover Picture:
          </h3>
          <img
            src={pcoverimage}
            alt=""
            className="mb-4 object-cover border border-gray-500 w-[400px]  h-[200px] text center m-auto rounded-2xl"
          />
          <i class="bi bi-exclamation-circle m-12   text-[#707070] "></i>
          <div className="flex justify-center mb-6">
            <input
              id="coverPic"
              className="hidden"
              type="file"
              onChange={(e) => handleUpload("cover", e.target.files[0])}
            />
            <label
              htmlFor="coverPic"
              className="bg-[#7991BD] p-2 w-[210.7px] text-[#fff] text-center rounded-2xl "
            >
              Change Picture
            </label>
            <button
              onClick={() => setState({ ...states, pcoverimage: "" })}
              className="text-[#7991BD] w-[100.7px] "
            >
              remove
            </button>
          </div>
        </div>
        <div className="bg-[#fff] rounded-2xl ">
          <h3 className="p-2 font-bold text-center text-[20px]">
            Profile Picture :
          </h3>
          <img
            src={pimage}
            alt=""
            className="h-[200px] w-[250px] border border-gray-500 object-cover text center m-auto rounded-2xl"
          />
          <div className="flex content-center  justify-center mt-8">
            <input
              className="hidden"
              type="file"
              id="profilePic"
              onChange={(e) => handleUpload("profile", e.target.files[0])}
            />
            <label
              role="button"
              htmlFor="profilePic"
              className="bg-[#7991BD] p-2 w-[210.7px] text-[#fff] rounded-2xl ml-[120px] text-center  items-center content-center"
            >
              Change Picture
            </label>
            <button
              onClick={() => setState({ ...states, pimage: "" })}
              className="text-[#7991BD] w-[100.7px]"
            >
              remove
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center  flex-row">
        <div className="m-2 p-6">
          <div action="">
            <div className="mb-3 text-white ps-4 py-2 mt-6 text-[20px] bg-[#7991bd]">
              Personal Info :
            </div>

            <div>
              <div className="flex gap-2">
                <Input
                  classes={"my-2"}
                  label={"First Name"}
                  attributes={{
                    name: "fname",
                    onChange: (e) =>
                      handleChange(e.target.name, e.target.value),
                    type: "text",
                    placeholder: "First Name",
                    value: fname,
                  }}
                />
                <Input
                  classes={"my-2"}
                  label={"Last Name"}
                  attributes={{
                    name: "lname",
                    onChange: (e) =>
                      handleChange(e.target.name, e.target.value),
                    type: "text",
                    placeholder: "Last Name",
                    value: lname,
                  }}
                />
              </div>
              {fname || lname ? (
                ""
              ) : (
                <div className="-mt-2 flex gap-2">
                  {fname ? (
                    <></>
                  ) : (
                    <Typography className="w-1/2" variant="small" color="red">
                      {" "}
                      Enter first name
                    </Typography>
                  )}
                  {lname ? (
                    <></>
                  ) : (
                    <Typography variant="small" color="red">
                      {" "}
                      Enter last name
                    </Typography>
                  )}
                </div>
              )}
              <Input
                classes={"flex my-2"}
                label={"Email"}
                attributes={{
                  name: "email",
                  onChange: (e) => handleChange(e.target.name, e.target.value),
                  type: "text",
                  placeholder: "Email",
                  value: email,
                }}
              />
              <div className="my-3 gap-2 flex w-full justify-between">
                <Dropdown
                  style={"w-1/2"}
                  label={"Phone"}
                  options={[{ code: "+91" }, { code: "+1" }]}
                  keyName={"code"}
                  selectedValue={code}
                  handleChange={(value) => handleChange("code", value)}
                />
                <Input
                  classes={""}
                  //   label={"First Name"}
                  attributes={{
                    name: "mobile",
                    onChange: (e) =>
                      handleChange(e.target.name, e.target.value),
                    type: "text",
                    placeholder: "Phone Number",
                  }}
                />
                {/* <input
                  type="tel"
                  placeholder="7878787878"
                  className="mb-6   ml-3 w-full border-none  p-2 outline-none  w-[70%] "
                /> */}
              </div>
              <div className=" gap-2 my-2 ">
                <div className="">
                  <Input
                    labelclass={"min-w-[165px]"}
                    classes={"flex"}
                    label={"Date of birth*"}
                    attributes={{
                      name: "dob",
                      onChange: (e) =>
                        handleChange(e.target.name, e.target.value),
                      type: "date",
                      placeholder: "",
                      value: dob,
                    }}
                  />
                </div>
                <div className="flex items-center mt-3">
                  {/* <label className="block me-6 text-gray-900">
                    Gender
                  </label> */}
                  <Dropdown
                    label={"Gender"}
                    style={"w-full"}
                    name={"Gender"}
                    options={[{ name: "Male" }, { name: "Female" }]}
                    selectedValue={gender}
                    keyName={"name"}
                    handleChange={(value) => handleChange("gender", value)}
                  />
                </div>
              </div>
              {isPersonal ? (
                <PersonalAccount
                  states={states}
                  education={education}
                  country={country}
                  handleCountry={handleCountry}
                  handleChange={handleChange}
                  handleEducation={handleEducation}
                  handleLocation={handleLocation}
                  location={location}
                />
              ) : (
                <OrganizationAccount
                  states={states}
                  orgDetail={orgDetail}
                  handleChange={handleOrganization}
                />
              )}
              {/* form button */}
              <div className="flext w-full text-center">
                <button
                  disabled={ checkDisable() }
                  onClick={handleSubmit}
                  className="w-[180px] pr-3 bg-[#7991BD] p-1 px-2 rounded-lg text-white mt-4"
                >
                  Save & Continue
                </button>
                <button
                  onClick={() => navigate("/profile")}
                  className="w-[180px] ml-3 border-solid border border-[#7991BD] p-1 inline-block rounded-lg text-[#7991BD]"
                >
                  Cancel
                </button>
              </div>
              {/* <AutocompletePlace/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
