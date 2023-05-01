import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import UnfriendModal from "./../Home/Modal/UnfriendModal/UnfriendModal";
import BlockModal from "./../Home/Modal/BlockModal/BlockModal";
import ChangeRelationshipModal from "./../Home/Modal/ChangeRelationshipModal/ChangeRelationshipModal";
import { useState } from "react";
import Portals from "../Portals/Portals";

function PopOver({ button, options }) {
  const [modalType, setModalType] = useState({
    unFriend: false,
    changeRelationship: false,
    block: false,
  });
  const openModalOption = (optionName) => {
    if (optionName === "Un-Friend") {
      setModalType({
        ...modalType,
        unFriend: true,
        changeRelationship: false,
        block: false,
      });
    } else if (optionName === "Change Relationship") {
      setModalType({
        ...modalType,
        unFriend: false,
        changeRelationship: true,
        block: false,
      });
    } else {
      setModalType({
        ...modalType,
        unFriend: false,
        changeRelationship: false,
        block: true,
      });
    }
  };

  const closeModalOption = (optionName) => {
   
      setModalType({
        ...modalType,
        unFriend: false,
        changeRelationship: false,
        block: false,
      });
  }
  return (
    <>
      <Popover className="relative">
        <Popover.Button className={"outline-0"}>{button}</Popover.Button>

        <Popover.Panel className="absolute z-10 w-max right-0 bg-white py-2 px-3 border rounded-md">
          <div className="flex flex-col">
            {/* <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a> */}
            {options.map((item) => {
              return (
                <Link
                  to=""
                  key={item?.name}
                  className="cursor-pointer w-full flex flex-col gap-1"
                  onClick={() => openModalOption(item?.name)}
                >
                  <span>{item?.icon}</span> {item?.name}
                  <div className="w-[98%] h-[1px] bg-gray-500"></div>
                </Link>
              );
            })}
          </div>

          <img src="/solutions.jpg" alt="" />
        </Popover.Panel>
      </Popover>
      {modalType.unFriend && (
        <Portals>
          <UnfriendModal closeModalOption={closeModalOption}/>
        </Portals>
      )}
      {modalType.changeRelationship && (
        <Portals>
          <ChangeRelationshipModal closeModalOption={closeModalOption}/>
        </Portals>
      )}
      {modalType.block && (
        <Portals>
          <BlockModal closeModalOption={closeModalOption}/>
        </Portals>
      )}
    </>
  );
}

export default PopOver;
