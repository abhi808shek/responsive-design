import React, { useMemo, useState } from "react";
import CommentMenuModal from "../Modal/CommentMenuModal/CommentMenuModal";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import UnfriendModal from "../Modal/UnfriendModal/UnfriendModal";
import Portals from "../../Portals/Portals";
import ChangeRelationshipModal from "../Modal/ChangeRelationshipModal/ChangeRelationshipModal";
import BlockModal from "../Modal/BlockModal/BlockModal";
import MenuDropdown from "../../common/MenuDropdown";
import { useDispatch } from "react-redux";
import { getMyUnion } from "../../../redux/actionCreators/unionActionCreator";
import { cancelFriendRequest, updateRelation } from "../../../redux/actionCreators/friendsAction";
import { toast } from "react-toastify";

const FriendList = ({ icon, desc, handleMenuClick, data = {} }) => {
  const dispatch = useDispatch()
  const { fname, lname, profileid, profiletype = "Personal"} = data;
  const name = fname + lname;
  const action = [
    { name: "Un-Friend" },
    { name: "Change Relationship" },
    { name: "Block" },
  ];

  const options = useMemo(() => {
    // dispatch(getMyUnion(profileid))
    const forPersonalAcc = [
      { name: "Friends", key: "friend", checked: true, disable: true },
      { name: "Relative", key: "relative", checked: false },
      { name: "Classmate", key: "classmate", checked: false },
      { name: "Officemate", key: "officemate", checked: false },
    ];
    const forOrgAcc = [
      { name: "Friend", key: "friend", checked: true, disable: true },
    ];
    return {
      relation: profiletype === "Personal" ? forPersonalAcc : forOrgAcc,
    };
  }, []);

  const { relation } = options;

  const [ state, setState ] = useState({})
  const { relationOption = relation, selectedItem} = state;

    const handleRelation = (e) => {
      const name = e.target.name;
      const value = e.target.checked;
      const selected = relationOption.map((item) => {
        return item?.name === name ? { ...item, checked: value } : item;
      });
      setState({ ...state, relationOption: selected });
    };
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
      });
    } else if (optionName === "Change Relationship") {
      setModalType({
        ...modalType,
        changeRelationship: true,
      });
    } else {
      setModalType({
        ...modalType,
        block: true,
      });
    }
  };

  const closeModalOption = () => {
    setModalType({
      ...modalType,
      unFriend: false,
      changeRelationship: false,
      block: false,
    });
  };

  const handleUnfriend = () => {
    // console.log(data, selectedItem);

    const payload = {
      profileid: data?.id,
      friendprofileid: selectedItem?.id
    };
    dispatch(cancelFriendRequest(payload)).then((res) => {
      if(res?.status){
        toast.success(res?.message);
      }else{
        toast.error(res.message);
      }
    })
  }

  const handleUpdateRelation = () => {
        const relation = relationOption?.find((item) => item?.checked && !item.disable);
    const payload = {
      user1: data?.id,
      user2: selectedItem?.id,
      relation: relation?.name
    }
    dispatch(updateRelation(payload)).then((res) =>{
      if(res?.status){
        toast.success(res?.message)
      }else{
        toast.error(res?.message)
      }
    })
  }

  const handleBlock = () => {
    // dispatch()
  }

  return (
    <>
      <div className="flex h-[50px] px-4 items-center py- relative">
        {/* {openMenuModal && <CommentMenuModal data={data} leftPosition={50} topPosition={34}/>} */}

        <div className="">
          <img
            src="./images/events.jpg"
            alt=""
            className="w-[45px] h-[45px] rounded-full"
          />
        </div>
        <Link
          to={`/profile/${profileid}`}
          className=" flex flex-1 flex-col justify-center ml-4"
        >
          <span className="font-medium">
            {name ? `${fname} ${lname}` : "User"}
          </span>
          {desc && (
            <p className="text-[10px] font-bold text-gray-500">
              {/* Hi Joe.........will plan this week */}
            </p>
          )}
        </Link>
        {icon ? (
          <div>
            <MenuDropdown
              button={
                <div onClick={() => setState({...state, selectedItem: data})} className="flex gap-2 items-center cursor-pointer">
                  <BsThreeDotsVertical className="" size={18} />
                </div>
              }
              options={[
                { name: "Un-Friend" },
                { name: "Change Relationship" },
                { name: "Block" },
              ]}
              handleOption={openModalOption}
            />
          </div>
        ) : null}
      </div>

      {/* (
        <PopOver
          options={action}
          button=
          openModalOption={openModalOption}
        ></PopOver>
      )  */}

      {modalType.unFriend && (
        <Portals>
          <UnfriendModal handleUnfriend={handleUnfriend} closeModalOption={closeModalOption} />
        </Portals>
      )}
      {modalType.changeRelationship && (
        <Portals>
          <ChangeRelationshipModal
            title="Change Relationship"
            button="Update"
            closeModalOption={closeModalOption}
            relationOption={relationOption}
            handleRelation={handleRelation}
            handleSendRequest={handleUpdateRelation}
          />
        </Portals>
      )}
      {modalType.block && (
        <Portals>
          <BlockModal handleBlock={handleBlock} closeModalOption={closeModalOption} />
        </Portals>
      )}
    </>
  );
};

export default FriendList;
