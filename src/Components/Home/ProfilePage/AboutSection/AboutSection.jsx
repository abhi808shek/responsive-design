import React from "react";
import { AiTwotoneSound } from "react-icons/ai";
import { MdDirectionsWalk, MdOutlineMarkEmailUnread, MdWorkOutline } from "react-icons/md";
import { BsPhone, BsCalendarEvent } from "react-icons/bs";
import { CgOrganisation, CgProfile } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { TbBrandRedhat } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const AboutSection = ({ isOther, data = {} }) => {
  const {countrycode, mobile, country, state, loksabha, city, assembly, hometown, profiletype } =
    data;
  const isPersonal = profiletype === "Personal";
  const navigate = useNavigate();
  return (
    <div className="lg:w-[80%] xl:w-[70%] bg-white rounded-xl flex flex-col items-center ">
      {/*Head Section */}
      <section className="flex w-full justify-between my-2 px-4">
        <strong className="text-lg font-medium">About</strong>
        {!isOther && (
          <button
            onClick={() => navigate("/edit-profile")}
            className="text-md font-bold rounded-lg flex items-center text-white bg-[#6780AF] px-[10px] text-[12px]"
          >
            Edit Profile
          </button>
        )}
      </section>
      <div className="w-[93%] h-0.5 bg-gray-500"></div>

      {/* Details Section */}
      <section className="flex flex-col w-[90%] my-4 gap-2">
        {/* <div className="flex items-center gap-2 my-2">
          <div className='w-7'>
           <AiTwotoneSound alt="" className="w-6 h-6 text-[#6c6c6c]" />
          </div>
          <p className="text-sm">
            Influenced by <strong>Kathy S</strong>
          </p>
        </div> */}

        {/* Work Section */}
        {/* <div className="flex items-center gap-2 ">
         <div className='w-7'>
          <MdDirectionsWalk alt="" className="w-6 h-6 text-[#6c6c6c]" />
         </div>
           <p className="text-sm">
            Works at <strong>Unite INC</strong> as <strong>Software Developer</strong>
          </p>
        </div> */}

        {/* Email Section */}
        <div className="flex items-center gap-2">
          <div className="w-7">
            <MdOutlineMarkEmailUnread
              alt=""
              className="w-6 h-6 text-[#6c6c6c]"
            />
          </div>
          <p className="text-sm">
            <strong>{data?.email}</strong>
          </p>
        </div>

        {/* Phone Number Section */}
        <div className="flex items-center gap-2">
          <div className="w-7">
            <BsPhone alt="" className="w-6 h-6 text-[#6c6c6c]" />
          </div>
          <p className="text-sm">
            <strong>{`${countrycode} ${mobile}`}</strong>
          </p>
        </div>

        {/* DOB Section */}
        <div className="flex items-center gap-2">
          <div className="w-7">
            <BsCalendarEvent alt="" className="w-5 h-6 text-[#6c6c6c]" />
          </div>
          <p className="text-sm">
            <strong>{moment(data?.dob).format("DD-MMM-YYYY")}</strong>
          </p>
        </div>

        {/* Gender Section */}
        <div className="flex items-center gap-2">
          <div className="w-7">
            <CgProfile alt="" className="w-6 h-6 text-[#6c6c6c]" />
          </div>
          <p className="text-sm">
            <strong>{data.gender}</strong>
          </p>
        </div>

        {/* Location Section */}
        <div className="flex items-center gap-2">
          <div className="w-7">
            <GoLocation alt="" className="w-6 h-6 text-[#6c6c6c]" />
          </div>
          <p className="text-sm">
            <strong>
              {`${hometown ? `${hometown}, ` : ""} 
           ${city ? `${city}, ` : ""} 
           ${state ? `${state}, ` : ""}
           ${loksabha ? `${loksabha}, ` : ""}
           ${assembly ? `${assembly}, ` : ""}
           ${country}`}
            </strong>
          </p>
        </div>
        {isPersonal ? (
          <>
            {/* Scholling Section */}
            <div className="flex items-center gap-2">
              <div className="w-7">
                <TbBrandRedhat alt="" className="w-6 h-6 text-[#6c6c6c]" />
              </div>
              <p className="text-sm">
                Completed schooling from
                <strong> St. John's school, Aurora, Chicago</strong> in the year
                <strong> 2010</strong>.
              </p>
            </div>
            {/* Graduation Section */}
            <div className="flex items-center gap-2">
              <div className="w-7">
                <TbBrandRedhat alt="" className="w-6 h-6 text-[#6c6c6c]" />
              </div>
              <p className="text-sm">Add Graduation Details</p>
            </div>

            {/* Graduation Section */}
            <div className="flex items-center gap-2">
              <div className="w-7">
                <TbBrandRedhat alt="" className="w-6 h-6 text-[#6c6c6c]" />
              </div>
              <p className="text-sm">Add Post Graduation Details</p>
            </div>
          </>
        ) : (
          <>
            <div className="items-center gap-2">
              <div className="mb-2">
                <strong>Professional Info : </strong>
              </div>
              <p className="text-sm">
                {/* ORGANIZATION NAME */}
                <div className="flex items-center gap-2">
                  <div className="w-7">
                    <CgOrganisation alt="" className="w-6 h-6 text-[#6c6c6c]" />
                  </div>
                  <strong className="text-sm">Organization Name : Destiny</strong>
                </div>
                {/* ORGANIZATION CATEGORY */}
                <div className="flex items-center gap-2">
                  <div className="w-7">
                    <MdWorkOutline alt="" className="w-6 h-6 text-[#6c6c6c]" />
                  </div>
                  <strong className="text-sm">Organization Type : Actor</strong>
                </div>
              </p>
            </div>
          </>
        )}
      </section>
      <p className="mb-4 text-sm">
        <strong>Uynited</strong> on <strong>February 2022</strong>
      </p>
    </div>
  );
};

export default AboutSection;
