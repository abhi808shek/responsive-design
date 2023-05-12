import React, { useMemo, useState } from "react";
import Input from "../../input/input";
import Dropdown from "../../Login/Content/Modal/Dropdown";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Accordion from "../../Accordion/Accordion";
import Dropdown2 from "../../Login/Content/Modal/Dropdown2";
import { useSelector } from "react-redux";
import AutocompletePlace from "../../googlemap/AutocompletePlace";

const PersonalAccount = ({
  states = {},
  education = {},
  handleEducation,
  country,
  handleCountry,
  handleChange,
}) => {
  const { state, district, assembly, loksabha } = states;
  const {
    pgadress,
    pgbranch,
    pgdegree,
    pgpassyear,
    schooladdress,
    schoolname,
    schoolpass,
    collegenameug,
    ugaddress,
    ugbranch,
    ugdegree,
    ugpassyear,
    graduationDegree,
    collegenamepg,
    graduationBranch,
    graduationYear,
    PGbranch,
    PGdegree,
    PGyear,
    schoolYear,
  } = education;
  const reducerData = useSelector((state) => {
    return {
      countryList: state.authReducer.countryList,
      stateList: state.authReducer.stateList,
      districtList: state.authReducer.districtList,
      loksabhaList: state.authReducer.loksabhaList,
      assemblyList: state.authReducer.assemblyList,
      ugdegreeList: state.profileReducer.ugdegreeList,
      pgdegreeList: state.profileReducer.pgdegreeList,
    };
  });
  const {
    countryList,
    stateList,
    districtList,
    loksabhaList,
    assemblyList,
    ugdegreeList,
    pgdegreeList,
  } = reducerData;

  const year = [
    { year: "2025" },
    { year: "2024" },
    { year: "2023" },
    { year: "2022" },
    { year: "2021" },
    { year: "2020" },
    { year: "2019" },
    { year: "2018" },
    { year: "2016" },
    { year: "2015" },
    { year: "2014" },
    { year: "2013" },
    { year: "2012" },
    { year: "2011" },
    { year: "2010" },
    { year: "2009" },
    { year: "2008" },
    { year: "2007" },
  ];
  console.log(states, education, "Staeeeeeee");
  const getGraduation = () => {

  }
  return (
    <>
      <Dropdown2
        style={'w-full'}
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
        selectedValue={state}
        keyName={"state"}
        handleChange={(value) => handleChange("state", value)}
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
        {/* <AutocompletePlace /> */}
        <Input
          attributes={{
            name: "school",
            placeholder: "School Name",
            type: "text",
            onChange: (e) => handleEducation(e.target.name, e.target.value),
            value: `${schoolname || ""} ${schooladdress || ""}`,
          }}
        />
        <Dropdown
          name={"Choose Year"}
          style={"w-full"}
          options={year}
          keyName={"year"}
          handleChange={(value) => handleEducation("schoolpass", value.year)}
          selectedValue={schoolpass}
        />
      </div>
      <div className="flex gap-3">
        <div className="w-1/2">
          <Accordion
            handleClick={getGraduation}
            title={
              <p className="flex gap-3 items-center justify-between">
                <span>Graduation</span>
                <AiOutlinePlusCircle />
              </p>
            }
          >
            <Input
              attributes={{
                name: "collegenameug",
                type: "text",
                onChange: (e) => handleEducation(e.target.name, e.target.value),
                value: collegenameug,
                placeholder: "College Name",
              }}
            />
            <div className="">
              <Dropdown
                up={true}
                style={"my-2 w-full"}
                options={ugdegreeList}
                keyName={'degree'}
                name={"Select Degree"}
                handleChange={(value) => handleEducation("ugdegree", value.degree)}
                selectedValue={ugdegree}
              />
              <Dropdown
                up={true}
                style={" w-full"}
                options={ugdegreeList}
                keyName='branch'
                name={"Select Branch"}
                handleChange={(value) => handleEducation("ugbranch", value.branch)}
                selectedValue={ugbranch}
              />
            </div>
            <Dropdown
              up={true}
              style={"my-2 w-full"}
              options={year}
              keyName='year'
              name={"Select Year"}
              handleChange={(value) => handleEducation("ugpassyear", value.year)}
              selectedValue={ugpassyear}
            />
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
                name: "collegenamepg",
                type: "text",
                onChange: (e) => handleEducation(e.target.name, e.target.value),
                value: collegenamepg,
                placeholder: "College Name",
              }}
            />
            <div className="">
              <Dropdown
                up={true}
                style={"my-2 w-full"}
                name={"Select Degree"}
                keyName={'degree'}
                options={pgdegreeList}
                handleChange={(value) => handleEducation("pgdegree", value.degree)}
                selectedValue={pgdegree}
              />
              <Dropdown
                up={true}
                style={" w-full"}
                options={pgdegreeList}
                keyName='branch'
                name={"Select Branch"}
                handleChange={(value) => handleEducation("pgbranch", value.branch)}
                selectedValue={pgbranch}
              />
            </div>
            <Dropdown
              up={true}
              style={"my-2 w-full"}
              name={"Select Year"}
              options={year}
              keyName='year'
              handleChange={(value) => handleEducation("pgpassyear", value.year)}
              selectedValue={pgpassyear}
            />
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default PersonalAccount;
