import React from "react";
import Input from "../../input/input";
import Dropdown from "../../Login/Content/Modal/Dropdown";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Accordion from "../../Accordion/Accordion";
import Dropdown2 from "../../Login/Content/Modal/Dropdown2";
import { useSelector } from "react-redux";

const PersonalAccount = ({state = {}, country, handleCountry, handleChange }) => {
    const { stateName, district, school, assembly, loksabha} = state
    const reducerData = useSelector((state) => {
      return {
        countryList: state.authReducer.countryList,
        stateList: state.authReducer.stateList,
        districtList: state.authReducer.districtList,
        loksabhaList: state.authReducer.loksabhaList,
        assemblyList: state.authReducer.assemblyList,
      };
    })
    const {
      countryList,
      stateList,
      districtList,
      loksabhaList,
      assemblyList,
    } = reducerData;

  const year = [
    { year: "2000" },
    { year: "2000" },
    { year: "2000" },
    { year: "2000" },
    { year: "2000" },
    { year: "2000" },
    { year: "2000" },
    { year: "2000" },
    { year: "2000" },
  ];
  return (
    <>
      <Dropdown2
        label={"Country: "}
        name={"Select country"}
        country={country}
        options={countryList}
        handleCountry={handleCountry}
      />
      <Dropdown
        style={"w-[77%] my-2"}
        label={"State"}
        name={"State"}
        options={stateList}
        selectedValue={stateName}
        keyName={"state"}
        handleChange={(value) => handleChange("stateName", value)}
      />
      <Dropdown
        style={"w-[77%] my-2"}
        label={"District"}
        name={"District"}
        options={districtList}
        selectedValue={district}
        keyName={"distric"}
        handleChange={(value) => handleChange("district", value)}
      />
      <div className="flex gap-2">
        <Dropdown
          style={"w-1/2 my-2"}
          label={"Loksabha"}
          name={"Loksabha"}
          keyName={"loksabha"}
          options={loksabhaList}
          selectedValue={loksabha}
          handleChange={(value) => handleChange("loksabha", value)}
        />
        <Dropdown
          style={"w-full my-2"}
          label={"Assembly"}
          name={"Assembly"}
          keyName={"assembly"}
          options={assemblyList}
          selectedValue={assembly}
          handleChange={(value) => handleChange("assembly", value)}
        />
      </div>
      <div className="mb-6 text-white ps-4 py-2 mt-6 text-[20px] bg-[#7991bd]">
        Education Detail:
      </div>
      <p>Let's start with school</p>
      <div className="flex my-2 gap-3">
        <Input
          attributes={{
            name: "school",
            placeholder: "School Name",
            type: "text",
            onChange: (e) => handleChange(e.target.name, e.target.value),
            value: school,
          }}
        />
        <Dropdown
          name={"Choose Year"}
          style={"w-full"}
          options={year}
          keyName={"year"}
        />
      </div>
      <div className="flex gap-3">
        <div className="w-1/2">
          <Accordion
            title={
              <p className="flex gap-3 items-center justify-between">
                <span>Graduation</span>
                <AiOutlinePlusCircle />
              </p>
            }
          >
            <Input
              attributes={{
                name: "college",
                type: "text",
                onChange: (e) => handleChange(e.target.name, e.target.value),
                value: school,
                placeholder: "College Name",
              }}
            />
            <div className="flex gap-2">
              <Dropdown style={"my-2 w-full"} name={"Select Degree"} />
              <Dropdown style={"my-2 w-full"} name={"Select Branch"} />
            </div>
            <Dropdown style={"w-full"} name={"Select Year"} />
          </Accordion>
        </div>
        <div className="w-1/2">
          <Accordion
            title={
              <p className="flex ms-2 gap-3 items-center justify-between">
                <span>Post Graduation</span>
                <AiOutlinePlusCircle />
              </p>
            }
          >
            <Input
              attributes={{
                name: "college",
                type: "text",
                onChange: (e) => handleChange(e.target.name, e.target.value),
                value: school,
                placeholder: "College Name",
              }}
            />
            <div className="flex gap-2">
              <Dropdown style={"my-2 w-full"} name={"Select Degree"} />
              <Dropdown style={"my-2 w-full"} name={"Select Branch"} />
            </div>
            <Dropdown up={true} style={"w-full"} name={"Select Year"} />
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default PersonalAccount;
