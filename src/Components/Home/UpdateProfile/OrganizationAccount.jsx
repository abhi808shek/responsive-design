import React from 'react'
import Input from '../../input/input'
import Dropdown from '../../Login/Content/Modal/Dropdown'
import { useSelector } from 'react-redux'

const OrganizationAccount = ({ handleOrganization, orgDetail}) => {
  const reducerData = useSelector((state) => {
    return {
      orgCategory: state.userReducer.orgCategory
    }
  })
  const {orgCategory} = reducerData;
  console.log(orgCategory, "++++++++++OOOO");
  return (
    <div>
      <div className="mb-6 text-white ps-4 py-2 mt-6 text-[20px] bg-[#7991bd]">
        Professional Detail:
      </div>
      <Input classes={"flex"} label={"Organization Name"} />
      <Dropdown
      options={orgCategory}
      keyName={'category'}
        label={"Organization Type"}
        name={"Organization Type"}
        style={"w-[74%] my-2"}
        handleChange={(value) => handleOrganization('org', value.category)}
      />
      <Input
        attributes={{
          placeholder: "Website",
        }}
        classes={"flex"}
        label={"Website"}
      />
      <Input
        classes={"flex my-2"}
        attributes={{
          placeholder: "Address",
        }}
        label={"Address"}
      />

      <Input
        classes={"my-2"}
        attributes={{
          type: "textarea",
          placeholder: "Write your intro...",
        }}
      />
    </div>
  );
}

export default OrganizationAccount