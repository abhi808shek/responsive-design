import React, { useState } from "react";
import Input from "../../Login/Content/InputBox/Input";
import { useNavigate } from "react-router-dom";

const CreateUnion = () => {
  const [createUnion, setCreateUnion] = useState("");
  const navigate = useNavigate();
  const onCreateUnion = () => {
    navigate("/unions-searchlist");
  };

  const onHandleChange = (event) => {
    setCreateUnion(event.target.value);
  };
  return (
    <div className="w-[40%] bg-[#E4E7EC] mx-auto flex flex-col items-center gap-2 px-4 h-[89%] mt-1 pt-3">

    <div className="w-full flex flex-col items-center gap-5 px-4">
      <h1 className="font-bold">Create Union</h1>
      <Input
        title="Enter Your Union Name.."
        inputValue={createUnion}
        onHandleChange={onHandleChange}
      />
      <button
        className="w-[35%] bg-gray-800 text-white font-bold py-1 text-xs rounded-lg"
        onClick={onCreateUnion}
        style={{ backgroundColor: createUnion?.length ? "#7991BD" : "#707070" }}
        disabled={!createUnion?.length}
      >
        Create
      </button>
    </div>
    </div>
  );
};

export default CreateUnion;
