import React from "react";
import UnionMembers from "./UnionMembers";
import { useDispatch, useSelector } from "react-redux";
import { unionsMembersTab } from "../../../redux/actionCreators/userActionCreator";

const SingleUnionPage = () => {
  const { unionMembersTab } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const onUnionMembersTabSelected = (option) => {
    dispatch(unionsMembersTab(option));
  };
  const membersTab = ["Members", "Invited Members"];
  return (
    <div className="w-[40%] bg-[#E4E7EC] mx-auto flex flex-col items-center gap-2 px-4 h-[89%] mt-1">
      <div className="flex gap-2 w-full h-[40px] py-2 mb-2">
        <img src="./images/events.jpg" alt="" className="w-[30px] h-[30px]" />
        <div className="flex-col flex flex-1">
          <h1 className="text-xs font-bold">Janasena Party</h1>
          <p className="text-gray-500 text-[10px]">0 Joined</p>
        </div>
        <button
          className="px-5 bg-blue-400 text-white font-bold py-1 text-xs rounded-lg"
          // onClick={onCreateUnion}
        >
          Invite +
        </button>
      </div>

      <div className="w-full flex items-center">
        <div className="">
          <img
            src="./images/events.jpg"
            alt=""
            className="w-[45px] h-[45px] rounded-full"
          />
        </div>
        <div className=" flex flex-1 flex-col justify-center ml-4">
          <span className="font-bold text-sm">Abhi Personal Profile</span>
          <em>
            <p className="text-[10px] font-bold text-green-700">Admin</p>
          </em>
        </div>
      </div>

      <div className="flex justify-center gap-5 w-full">
        {membersTab?.map((elem) => (
          <button
            key={elem}
            className="w-[35%] bg-blue-400 text-white font-bold py-1 text-xs rounded-lg"
            style={{
              backgroundColor: unionMembersTab === elem ? "#7991BD" : "#666567",
            }}
            onClick={() => onUnionMembersTabSelected(elem)}
          >
            {elem}
          </button>
        ))}
      </div>

      <div className="w-full h-full overflow-y-scroll mb-2 flex flex-col gap-3">
        {unionMembersTab === "Members" &&
          [1, 2, 3, 4, 5, 3, 4, 5, 5, 6, 6, 7, 7, 7, 77].map(() => (
            <UnionMembers button="Remove" />
          ))}

        {unionMembersTab === "Invited Members" &&
          [1, 2, 3, 4, 5, 3, 4, 5, 5, 6, 6, 7, 7, 7, 77].map(() => (
            <UnionMembers button="Cancel" />
          ))}
      </div>
    </div>
  );
};

export default SingleUnionPage;
