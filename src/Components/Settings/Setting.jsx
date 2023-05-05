import React, { useState } from "react";
import Dropdownmenu from "./DropdownMenu/Dropdownmenu";
import PasswordInput from "../Login/Content/InputBox/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import ContactInformation from "./VerificationRequest/ContactInformation";
import SettingOptions from "./VerificationRequest/SettingOptions";
import Portals from "./../Portals/Portals";
import DeactivateAccountModal from "./VerificationRequest/DeactivateAccountModal";
import OldPassword from "./OldPassword";
import CreatenewPassword from "./CreatenewPassword";

const Setting = () => {

  const navigate = useNavigate()
  const [oldPassword, setOldPassword] = useState(false);

  const OldPasswordChange = ()=>{
    setOldPassword(true)
  }
  const [openDropdown, setOpenDropdown] = useState({
    changePassword: false,
    deActivate: false,
  });
  const [deActivateModal, setDeactivateModal] = useState(false);
  const onChangePassword = () => {
    setOpenDropdown({
      ...openDropdown,
      changePassword: !openDropdown.changePassword,
    });
  };

  const onDeactivateClick = () => {
    setDeactivateModal(true);
  };

  const onDeActivate = () => {
    setOpenDropdown({
      ...openDropdown,
      deActivate: !openDropdown.deActivate,
    });
  };
  const options = [
    { title: "Public", value: "public" },
    { title: "Friends", value: "friends" },
    { title: "None", value: "none" },
  ];

  const dataList = [
    {
      title: "Email Address:",
      options,
      name: "email",
    },
    {
      title: "Phone Number:",
      options,
      name: "phone",
    },
    {
      title: "Date of Birth:",
      options,
      name: "dob",
    },
    {
      title: "Location:",
      options,
      name: "location",
    },
  ];

  const data = [
    {
      title: " Who can view your Contact Information ?",
      ChildComponent: ContactInformation,
      otherProps: { dataList },
    },
    { title: " Who can view your Profile ?", ChildComponent: Dropdownmenu },
    { title: "Who can post on your Timeline ?", ChildComponent: Dropdownmenu },
    { title: "Who can view your Friend List ?", ChildComponent: Dropdownmenu },
  ];
  return (
    <>
      <div className="w-[40%] bg-white border-2 mx-auto rounded-xl flex-col flex mt-[70px] ">
        {/* Privacy Section */}
        <section className="flex flex-col">
          <h1 className="text-md font-bold py-2 pl-2 bg-gray-500 rounded-t-xl">
            Privacy
          </h1>
          {data?.map((elem) => (
            <SettingOptions key={elem?.title} elem={elem} />
          ))}
        </section>
        {/* --------------------------------------------- */}
        {/* Security Section */}
        <section className="flex flex-col gap-3 ">
          <h1 className="text-md font-bold bg-gray-500 w-full p-2">Security</h1>
          <div className="px-2 flex flex-col gap-2">
            <div
              className="flex cursor-pointer w-full py-1"
              id="changePassword"
              onClick={onChangePassword}
            >
              <h1 className="text-sm flex-1">Change your password</h1>
              <img
                src="./images/groups.png"
                alt=""
                className="w-[20px] h-[20px]"
              />
            </div>

            <div
              className="flex w-full"
              style={{
                display: openDropdown.changePassword ? "block" : "none",
              }}
            >
              {oldPassword ? <CreatenewPassword /> : <OldPassword OldPasswordChange={OldPasswordChange}/>}
            </div>
          </div>

          <div className="px-2" onClick={()=>navigate("/blocklist-page")}>
            <div
              className="flex cursor-pointer w-full my-2"
             
            >
              <h1  className="text-sm flex-1" >
                Blocked users
              </h1>
              <img
                src="./images/groups.png"
                alt=""
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>

          <div className="px-2">
            <div
              className="flex cursor-pointer w-full my-2"
              onClick={onDeActivate}
            >
              <h1 className="text-sm flex-1">De-Activate Account</h1>

              <img
                src="./images/groups.png"
                alt=""
                className="w-[20px] h-[20px]"
              />
            </div>
            <div
              className="w-full flex flex-col"
              style={{
                display: openDropdown.deActivate ? "block" : "none",
              }}
            >
              <div className="flex w-[95%] gap-1 my-2 flex-col">
                <span className="text-blue-400 font-bold text-xs">Note:</span>
                <p className="text-xs">
                  Once De-Activate your account your Posts, Likes, Comments,
                  Profile, Friends, Kicks and Events will be hidden Until you
                  login again
                </p>
                <PasswordInput />
                <div className="flex text-white justify-end gap-2">
                  <button
                    className="bg-blue-400 w-[20%] py-2 rounded-lg text-xs"
                    onClick={onDeactivateClick}
                  >
                    De-Activate
                  </button>
                  <button className="bg-blue-400 w-[20%] py-2 rounded-lg text-xs">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-gray-500"></div>

          <div className="px-2">
            <Link to="/verification-request" className="text-sm">
              Do you want to get verified ?
            </Link>
          </div>
        </section>
      </div>

      {deActivateModal && (
        <Portals>
          <DeactivateAccountModal setDeactivateModal={setDeactivateModal} />
        </Portals>
      )}
    </>
  );
};

export default Setting;
