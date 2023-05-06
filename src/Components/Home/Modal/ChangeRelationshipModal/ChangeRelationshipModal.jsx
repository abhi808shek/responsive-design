import React from "react";
import dataList from "./data";
import { useMemo } from "react";

const ChangeRelationshipModal = ({
  closeModalOption,
  title,
  button,
  handleSendRequest,
  handleRelation,
  relationOption,
}) => {
  const isPersonal = true;

  console.log(relationOption, "+++++++++++++++++++++");
  return (
    <div className="w-[25%] bg-white flex flex-col rounded-lg">
      <h1 className="text-center my-2 font-bold text-sm">{title}</h1>

      {dataList?.map((elem, index) => (
        <React.Fragment key={index}>
          <hr />
          <div className="flex gap-2 py-4 px-4">
            <input
              name={elem.name}
              onChange={handleRelation}
              type="checkbox"
              className=""
              checked={elem.checked}
              disabled={elem.disable}
            />
            <span className="text-xs font-semibold">{elem.name}</span>
          </div>
          <hr />
        </React.Fragment>
      ))}
      <div className="flex gap-2 py-4 px-4">
        <input
          onChange={handleRelation}
          type="checkbox"
          className=""
          checked={true}
        />
        <span className="text-xs font-semibold">ABC Union</span>
      </div>
      <div className="border-2 text-gray-500 w-full flex justify-center rounded-b-lg">
        <button
          className="bg-[#7991BD] text-white border-[1px] border-gray-500 w-[50%] rounded-bl-lg text-sm font-semibold py-1"
          onClick={handleSendRequest}
        >
          {button}
        </button>
        <button
          className="text-[#7991BD] border-[1px] border-gray-500  w-[50%] rounded-br-lg text-sm font-semibold py-1"
          onClick={closeModalOption}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ChangeRelationshipModal;
