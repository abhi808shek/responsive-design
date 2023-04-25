import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Input from "../InputBox/Input";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbPhotoPlus } from "react-icons/tb";
import { createProfile, getAssenbly, getCountryList, getDistrict, getLocationsList, getLoksabha, getOrgCategory, getStateList, uploadImage } from "../../../../redux/actionCreators/authActionCreator";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { geocodeByAddress } from "react-google-places-autocomplete";


const Modal = ({ modalType, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const reducerData = useSelector((state) => {
    return {
      organizationCategory: state.userReducer.orgCategory,
      userData: state.authReducer.signupData,
      countryList: state.authReducer.countryList,
      stateList: state.authReducer.stateList,
      districtList: state.authReducer.districtList,
      loksabhaList: state.authReducer.loksabhaList,
      assemblyList: state.authReducer.assemblyList
    }
  });
  const { organizationCategory, userData, countryList, stateList, districtList,
     loksabhaList, assemblyList} = reducerData;
  const [country, setCountry] = useState(null)
  const [states, setState ] = useState({})
  const { imgFile, selectedValue , fname, lname, orgName, gender, dob, state, district,
        loksabha, assembly, category} = states;

  const isPersonal = modalType === "Personal";
  // let autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), { })
  useEffect(() => {

    isPersonal ? dispatch(getCountryList()) : dispatch(getOrgCategory())
  }, []);
  const handleCountry = (val)=>{
    setCountry(val)
    dispatch(getStateList(val.code))
  }


  const handleChange = (name, value) => {
    const obj ={
      'state': getDistrict(value.statecode),
      'district': getLoksabha(value.did),
      'loksabha': getAssenbly(value.lid)
    }
   obj[name] && dispatch(obj[name])
    setState({ ...states, [name]: value })
  }
  const handleGender = e => {
    setState({...states, gender: e.target.id});
  }
  const handleDate = e => {
    console.log(e.target.value);
    setState({...states, dob: e.target.value})
  }
  const handleLiveLocationn = () => {

  }
  const handleCreateProfile = async () => {
    const file = new FormData();
    file.append("image", file)
    // const uploadResponse = dispatch(uploadImage())
    const payload = {
 "celibrity": false,//default value.
 "countrycode": "+91",//default selected in signup screen..
 "dob": moment(dob).format("YYYY-MM-DD"),//from user input
 "email": userData.uemail, //from signup screen.
 "fname": orgName,//from user input BUSINESS NAME
 "gender": gender,
  "pimage":"", //if profile image is there, add the URL here.
 "businesscategory": selectedValue?.category,//from user input selection.
 "personalLastName": lname,//from user input – profile lnamein SLIDE 4
 "personalname": fname,//from user input – profilefnamein SLIDE 4
 "profiletype": isPersonal ? "Personal" : "Organization",//profile type, while we passing in signup screen
 "updatedate": userData.datetime,//Current UTC time in milliseconds
 "userid": userData.userId// stored User ID from (Slide 3)
}
const payloads = {
    "assembly": assembly?.assembly,//default value.
    "celibrity": false,
 "countrycode": "+91",//default selected in signup screen..
 "country": country?.country,
 "dob": moment(dob).format("YYYY-MM-DD"),//from user input
 "email": userData.uemail, //from signup screen.
 "fname": fname,//from user input BUSINESS NAME
 "gender": gender,
  "pimage":"", //if profile image is there, add the URL here.
  "loksabha": loksabha?.loksabha,
 "lname": lname,//from user input – profile lnamein SLIDE 4
 "personalname": fname,//from user input – profilefnamein SLIDE 4
 "profiletype": isPersonal ? "Personal" : "Organization",//profile type, while we passing in signup screen
 "updatedate": userData.datetime,//Current UTC time in milliseconds
 "userid": userData.userId// stored User ID from (Slide 3) 

}
    dispatch(createProfile(isPersonal ? payloads : payload)).then((res)=> {
      if(res.data.status){
        toast.success(res.data.message)
        navigate('/auth/login')
      } else toast.error(res.data.message)
    }).catch(err => {
      toast.error(err.message)
    })
    // console.log(response);
  }
  return (
    {/* corner radius added to componenet */},
    <div
      className="absolute py-2 rounded-xl px-10 top-1/2 left-1/2 bg-white max-w-[60rem] w-[75vw] text-center"
      style={{
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 10px 8px #3f3f3fd9",
      }}
    >
      <h2 className="font-semibold text-xl border-b-[3px] border-grey-400 py-2">
        Let's Create Profile
      </h2>
      <div className="flex flex-col md:flex-row my-4">
        <div className="md:w-1/2 mr-4 border-r-[3px] border-grey-400">
          {/* font-weight removed, font-size reduced, padding added,*/}
          <h2 className="text-xl py-3">Add Profile Picture</h2>
          <div>
            <input
              id="profilePic"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setState({ ...states, imgFile: e.target.files[0] })}
            />
            <label
              htmlFor="profilePic"
              className="flex justify-center items-center cursor-pointer w-[15rem] h-[15rem] mx-auto rounded-full block bg-gray-200"
            >
            { 
              imgFile ? 
              <img className={'w-[15rem] h-[15rem] mx-auto rounded-full block'} src={ URL.createObjectURL(imgFile)}/>
              : 
              <span><TbPhotoPlus size={45} /></span>
            }
            </label>
            <div className="pt-6">
              {/* bg-color, padding, font-weight of label changed */}
              <label
                htmlFor="profilePic"
                className="bg-[#6780af] cursor-pointer p-[4px 20px] rounded-xl py-2 text-white font-medium mt-6 px-6"
              >
                Select from computer
              </label>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 max-w-[25rem] px-4 relative">
          <div className="mx-auto">
            {/*<Dropdown
              name={isPersonal ? "Select Profile Type*" : "Organization"}
              options={isPersonal ? ["Personal"] : ["World Trade Org"]}
            />*/}

            {/* last name field added */}
            <div className="mt-[9px] mb-2.5">
              <Input title="First Name*" name="fname" onHandleChange={(e) => setState({ ...states, fname: e.target.value})} className="w-full" />
            </div>
            {/* Lastname field was added */}
            <div className="mt-[2px]">
              <Input title="Last Name*" name="lname" onHandleChange={(e) => setState( {...states, lname: e.target.value})} className="w-full" />
            </div>
            {isPersonal ? (
              <>
                {/* size of radio button incresed, accent color of button changed,
                    margin top of rdio button removed and margin added to input component*/}
                <div className="flex justify-between my-1 items-center">

                {/* input and label grouped in a div, padding added to label*/}
                 <div className='flex justify-center items-center'>
                  <input
                    type="radio"
                    name="gender"
                    id="Male"
                    className='h-5 w-4 accent-stone-500'
                     onClick={(e) => handleGender(e)}
                  />{" "}
                  <label className='pl-2'>Male</label>
                 </div>

                 <div className='flex justify-center items-center'>
                  <input
                    type="radio"
                    name="gender"
                    className='h-5 w-4 accent-stone-500'
                    id="Female"
                     onClick={(e) => handleGender(e)}
                  />
                  <label className='pl-2'>Female</label>
                 </div>

                 <div className='flex justify-center items-center'>
                  <input
                    type="radio"
                    name="gender"
                    className='h-5 w-4 accent-stone-500'
                    id="Other"
                    onClick={(e) => handleGender(e)}
                  />
                  <label className='pl-2'>Other</label>
                 </div>
                </div>
                {/* <Dropdown name={"Date of birth"} options={[]} /> */}
                <input type='date' onChange={ handleDate } className='w-full h-9 border-[1px] my-1 px-2 text-gray-500 outline-none border-gray-300 rounded-[5px]' />                
                <Dropdown2 name={"Select country"} country={ country } options={countryList} handleCountry={handleCountry} />

                {/* created Dropdown2 component, when selecting country new dropdowns are shown ,
                    for this local state added, a function created for
                    getting value from child componenet*/}

                {
                  country ?
                    <>
                     <div className='flex'>
                      <Dropdown name={"State"} options={stateList} selectedValue={state} keyName={'state'} handleChange={(value) => handleChange('state', value)}/>
                      <Dropdown name={"District"} options={districtList} selectedValue={district} keyName={'distric'} handleChange={(value) => handleChange('district', value)}/>
                     </div>
                     <div className='flex'>
                      <Dropdown name={"Loksabha"} keyName={'loksabha'} options={ loksabhaList } selectedValue={loksabha} handleChange={(value) => handleChange('loksabha', value)} />
                      <Dropdown name={"Assembly"} keyName={'assembly'} options={ assemblyList } selectedValue={assembly} handleChange={(value) => handleChange('assembly', value)} />
                     </div>
                     <div className='mt-1.5'>
                      {/* <Input id='autocomplete' title="Living Location*" className="w-full" onHandleChange={ handleLiveLocationn}/> */}
                      <input id="autocomplete" type="text"/>
                     </div>
                    </>
                    : null
                }
              </>
            ) : (
              <>
                {/* as per documentation the address, intro, website
                    input fields are removed */}
                <input type='date' onChange={ handleDate } className='w-full h-9 border-[1px] my-1 px-2 text-gray-500 outline-none border-gray-300 rounded-[5px]' />                

                <div className="flex justify-between items-center">
                {/* gender selection field, organization name added added */}
                 <div className='flex my-2 justify-center items-center'>
                  <input
                    type="radio"
                    name="gender"
                    className='h-5 w-4 accent-stone-500'
                    id="Male"
                     onChange={(e) => handleGender(e)}
                  />{" "}
                  <label className='pl-2'>Male</label>
                 </div>

                 <div className='flex justify-center items-center'>
                  <input
                    type="radio"
                    name="gender"
                    className='h-5 w-4 accent-stone-500'
                    id="Female"
                     onChange={(e) => handleGender(e)}
                  />
                  <label className='pl-2'>Female</label>
                 </div>

                 <div className='flex justify-center items-center'>
                  <input
                    type="radio"
                    name="gender"
                    className='h-5 w-4 accent-stone-500'
                    id="Other"
                    onChange={(e) => handleGender(e)}
                  />
                  <label className='pl-2'>Other</label>
                 </div>
                </div>

                <Input type='search' title='Organization Name*' onHandleChange={(e) => setState({...state, orgName: e.target.value})} />
                <Dropdown name={"Organization Category*"} options={ organizationCategory } handleChange={(value) => handleChange('category', value)} selectedValue={category} keyName={'category'}/>
              </>
            )}
          </div>
          
          {/* create button positioned to top level div */}
          <div className='flex justify-center' onClick={handleCreateProfile}>
            <label
            htmlFor=""
            className="bg-[#6780af] w-52 py-1.5 flex justify-center py-1 rounded-xl block mt-[60px] cursor-pointer text-white font-medium"
            >
            Create
            </label>
          </div>
        </div>
      </div>
      <span
        className="absolute top-4 right-2 cursor-pointer"
        onClick={() => handleClose()}
      >
        <AiOutlineCloseCircle size={25} className="text-gray-600" />
      </span>
    </div>
  );
};

export default Modal;
