import React from "react";
import User from "../../../../Assets/Images/user.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Portals from "../../../Portals/Portals";
import ChangeRelationshipModal from "../ChangeRelationshipModal/ChangeRelationshipModal";
// import { startFollowing } from "../../../redux/actionCreators/profileAction";
import {addFriend} from '../../../../redux/actionCreators/friendsAction'
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import { toast } from "react-toastify";
import { useMemo } from "react";
import { startFollowing } from "../../../../redux/actionCreators/profileAction";

const LikedProfile = ({ data }) => {
  const dispatch = useDispatch()
  const { profile: myprofile } = useSelector((state) => state.profileReducer);
  const { myUnionList } = useSelector((state)  => state.unionReducer)
  const { friendsIds } = useSelector((state) => state.friendReducer)
  const { profile, id } = data || {};
  const [state, setState] = useState({})
  const { requestModal, relationOptions} = state
  const handleAddFriend = () => {
    setState({...state, requestModal: true})
  }
  const handleSendRequest = () => {
    const payloads = {
        myprofileid: myprofile?.id,
        followerprofileid: profile?.id,
        datetimes: moment().format("YYYY-MM-DDTHH:mm:ss"),
      };
      dispatch(startFollowing(payloads));
      const { id, fname, lname } = myprofile || {};
      const data = relationOptions.flatMap((item) =>
        item.checked ? item.key : false
      );
      const userCredential = JSON.parse(localStorage.getItem('userCredential'));
      console.log(data.some((item) => item?.key === 'classmate'), data);
      const group = data?.filter((item) => item.union)
      let payload = {
        id: profile?.id,
        fname: fname,
        lname: lname,
        friendprofileid: profile?.id,
        friendtype: "Friend",
        profileid: id,
        requesttype: "Send",
        isFriend: "true",
  
        isFriend: true,
        party: "",
        groupsUpdate:[],
        userid: userCredential.id,
        reqdatetime: new Date().getTime(),
      };
      dispatch(addFriend(payload)).then((res) => {
        if (res.status) {
          toast.success(res?.message);
          setState({ ...state, requestModal: false });
        } else {
          toast.error(res?.message);
        }
      });
    };

    const handleRelation = (e) => {
      const name = e.target.name;
      const value = e.target.checked;
      // console.log(name, value);
      const selected = relationOptions.map((item) => {
        return item?.name === name ? { ...item, checked: value } : item;
      });
      setState({ ...state, relationOptions: selected });
    };

    const options = useMemo(async () => {
      const union = myUnionList.map((item) => ({
        name: item.groupName,
        key: item.groupId,
        union: true
      }));
  
      const forPersonalAcc = [
        { name: "Friends", key: "friend", checked: true, disable: true },
        { name: "Relative", key: "relative", checked: false },
        { name: "Classmate", key: "classmate", checked: false },
        { name: "Officemate", key: "officemate", checked: false },
        ...union,
      ];
      const forOrgAcc = [
        { name: "Friend", key: "friend", checked: true, disable: true },
        ...union,
      ];
      setState({...state, relationOptions: myprofile?.profiletype === 'Personal' ? forPersonalAcc: forOrgAcc})
    }, [myUnionList]);

    const onHandleCloseModal = () => setState({...state, requestModal: false})
  
  return (
    <div className="w-full h-[55px] flex items-center ">
      <Link
        to={`/profile/${id}`}
        className=" h-[50px] flex flex-1 items-center gap-2"
      >
        <img
          src={profile?.pimage || User}
          alt=""
          className="w-[45px] h-[45px] rounded-full bg-yello-500"
        />

        <span className="font-bold text-gray-600 text-sm">{`${profile?.fname} ${profile?.lname}`}</span>
      </Link>

      <div className=" h-[50px] flex items-center cursor-pointer">
      {
        [...friendsIds, myprofile.id].includes(profile.id) ? ""
        :
        <button onClick={handleAddFriend} className="px-5 text-blue-400 bg-white border-[1px] border-blue-400 font-bold py-1 text-xs rounded-lg">
          Add friend
        </button>

      }
      </div>
      {requestModal && (
      <Portals closeModal={onHandleCloseModal}>
        <ChangeRelationshipModal
          button="Send Request"
          title="Wanna Send Friend Request"
          relationOption={relationOptions}
          handleSendRequest={handleSendRequest}
          handleRelation={handleRelation}
          closeModalOption={onHandleCloseModal}
        />
      </Portals>
    )}
    </div>
  );
};

export default LikedProfile;
