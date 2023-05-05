import React, { useState } from "react";
import ExitUnionModal from "./ExitUnionModal";
import Portals from "./../../Portals/Portals";
import PopOver from "../../popover/Popover";
import UnionUpdateModal from "./UnionUpdateModal";

const MyUnion = ({
  isValid,
  onSingleUnionPage,
  showModal,
  onHandleModal,
  onCloseModal,
}) => {
  // const data = [{ name: "Edit Union" }, { name: "Delete Union" }];
  const [modalType, setModalType] = useState({
    editPost: false,
    deletePost: false,
  });
  const openModalOption = (optionName) => {
    if (optionName === "Edit Union") {
      console.log("lllllllllll", optionName);
      setModalType({
        ...modalType,
        editPost: true,
      });
    } else {
      console.log("lllllllllll", optionName);
      setModalType({
        ...modalType,
        deletePost: true,
      });
    }
  };

  const closeModalOption = () => {
    setModalType({
      ...modalType,
      editPost: false,
      deletePost: false,
    });
  };
  return (
    <>
      <div
        className="w-full  h-[100%] overflow-y-scroll flex flex-col gap-2 cursor-pointer"
        onClick={onSingleUnionPage}
      >
        {[1, 2, 3, 4, 5, 3, 4, 5, 6, 4, 33, 3, 3, 3, , 2, 2, 2, 2, 2, 23]?.map(
          (elem) => (
            <div
              className="flex gap-2 w-full h-[80px] py-2 mb-2"
              //   onClick={onSingleUnionPage}
            >
              <img
                src="./images/events.jpg"
                alt=""
                className="w-[30px] h-[30px]"
              />
              <div className="flex-col flex flex-1">
                <h1 className="text-xs font-bold">Janasena Party</h1>
                <p className="text-gray-500 text-[10px]">0 Joined</p>
              </div>
              {isValid ? (
                <PopOver
                  options={[{ name: "Edit Union" }, { name: "Delete Union" }]}
                  button={
                    <img
                      src="./images/groups.png"
                      alt=""
                      className="w-[30px] h-[30px] cursor-pointer"
                      openModalOption={openModalOption}
                    />
                  }
                ></PopOver>
              ) : (
                <button
                  className={`w-[10%] border-2  border-[#979797] text-[#7991BD] font-bold text-xs rounded-lg`}
                  onClick={onHandleModal}
                >
                  Exit
                </button>
              )}
            </div>
          )
        )}
      </div>
      {showModal?.partOfUnion && (
        <Portals>
          <ExitUnionModal onCloseModal={onCloseModal} />
        </Portals>
      )}

      {modalType?.editPost && (
        <Portals>
          <UnionUpdateModal onCloseModal={closeModalOption} />
        </Portals>
      )}

      {modalType?.deletePost && (
        <Portals>
          <ExitUnionModal onCloseModal={closeModalOption} />
        </Portals>
      )}
    </>
  );
};

export default MyUnion;
