import React, { useEffect, useState } from "react";
import ChooseFreindsModal from "../Modal/ChooseFreindsModal/ChooseFreindsModal";
import Portals from "../../Portals/Portals";
import ChangeRelationshipModal from "../Modal/ChangeRelationshipModal/ChangeRelationshipModal";
import { useNavigate } from "react-router";
import { debounce, isEmpty, toasterFunction } from "../../Utility/utility";
import { useDispatch, useSelector } from "react-redux";
import { acceptFriendRequest, addFriend, cancelFriendRequest, getRequestList, getUserByMail, getUsers } from "../../../redux/actionCreators/friendsAction";
import EmptyComponent from "../../empty component/EmptyComponent";
import Loader from "../../common/Loader";
import moment from "moment/moment";
import { useMemo } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../common/ConfirmationModal";

const SearchFriendsPage = ({ isFriend }) => {
  const isPersonal = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reducerData = useSelector((state) => {
    return {
      userList: state.friendReducer.usersList,
      profile: state.profileReducer.profile,
      requestList: state.friendReducer.requestList
    };
  });
  const { userList, profile, requestList } = reducerData;
console.log("userDataLisss",userList);
    const options = useMemo(() => {
    const forPersonalAcc = [
      { name: "Friends", key: "friend", checked: true, disable: true },
      { name: "Relative", key: "relative", checked: false},
      { name: "Classmate", key: "classmate", checked: false},
      { name: "Officemate", key: "officemate", checked: false },
    ];
    const forOrgAcc = [
      {name: 'Friend', key: "friend", checked: true, disable: true},
    ]
    return {
      relationOption: isPersonal ? forPersonalAcc : forOrgAcc
    }
  }, [])

  const { relationOption } = options

  const [sendRequest, setSendRequest] = useState(false);
  const [state, setState] = useState({usersList: userList });
  const [searchQuery, setSearchQuery] = useState()
  const { acceptRequest, onAcceptRequest, requestModal, usersList, activeProfile,
  loading, relationType, relationOptions = relationOption,  cancelModal} = state;

  useEffect(() => {
    if(isFriend){
      dispatch(getRequestList(profile?.id));
    }
    dispatch(getUsers("s"))
  }, []);
  const onSendRequest = () => {
    setSendRequest(true);
  };

  const onHandleCloseModal = () => {
    // setSendRequest(false);
    setState({ ...state, requestModal: false });
  };

  // const onAcceptRequest = ()=>{
  //   setAcceptRequest(true)
  // }

  // const onCLoseModal = ()=>{
  //   setAcceptRequest(false)
  // }
  function showProfileDetail(id) {
    navigate(`/profile/${id}`);
  }
  const handleSendRequest = () => {
    const { id, fname, lname} = profile || {};
    let payload = {
      id: profile?.id,
      fname: fname,
      lname: lname,
      friendprofileid: activeProfile?.id,
      friendtype: "friend",
      profileid: id,
      requesttype: "send",
      isFriend: 'true',    
      reqdatetime: moment(new Date()).format('YYYY-MM-DD'),
    };
    dispatch(addFriend(payload)).then((res) => {
      if(res.status){
        toast.success(res?.message)
      }else{
        toast.error(res?.message)
      }
    });
  };

  function searchUser(value) {
    // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const isEmail = value.match(validRegex);
   const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    if(isEmail){
      dispatch(getUserByMail(value)).then((res)=> {
        setState({...state, loading: false, usersList: res.data})
      });
    } else {
      dispatch(getUsers(value)).then((res) => {
        setState({...state, usersList: res.data, loading: false})
      });
    }
  }
  const processChange = debounce((e) => searchUser(e));
  const handleSearch = (e) => {
    const value = e.target.value;
    const name = e.target.name
    setState({ ...state, loading: true });
    setSearchQuery(value)
    searchUser(value)
    // processChange(value);
  };

  const sendFriendRequest = (id) => {
    console.log(id);
  }

  const handleRelation = (e) => {
    const name = e.target.name;
    const value = e.target.checked;
    // console.log(name, value);
    const selected = relationOptions.map((item) => {
     return item?.name === name ? {...item, checked: value} : item
    })
    setState({...state, relationOptions: selected})
  }

  const onCLoseModal = () => {
    setState({...state, acceptRequest: false, activeProfile: {}})

  }
  const handleConfirmationModal = (item) => {
    setState({ ...state, cancelModal: true, activeProfile: item });
  }
  const handleCancelRequest = () => {
    const payload = {
      profileid: profile?.id,
      // friendprofileid: activeProfile?.id
      friendprofileid: "64467a007c2c17757005a469",
    };
    dispatch(cancelFriendRequest(payload)).then((res) => {
      if(res?.status){
        toast.success(res?.message)
        onHandleCloseModal(false)
      }else {
        toast.error(res?.message)
      }
    })
  }
  const handleAcceptRequest = () => {
    const {fname, lname, id} = activeProfile
    const payload = {
      id: "600bc283b42f9c4b2eb0cdce",
      fname: fname,
      lname: lname,
      friendprofileid: activeProfile?.id,
      friendtype: 'friend',
      profileid: profile.id,
      requesttype: "recived",
      getIsFriend: false,
      reqdatetime: moment().format('YYYY-MM-DD HH:mm:ms'),
    };  
    dispatch(acceptFriendRequest(payload)).then((res) => {
      if(res?.status){
        toast.success(res.message)
      }else{
        toast.error(res.message)
      }
    })
  }
  console.log(relationOptions, '____________PPPPPPPPPPPPPPPPPPPP');
// console.log(isFriend,isPersonal, "{{{{{{{{{{{{{{{{}}}}}}}}}}}}")
  return (
    <>
      <div className="w-[100%] mt-2 flex-1 bg-[#E4E7EC] flex justify-center py-2 ">
        <div className="flex w-[95%] sm:w-[50%] lg:w-[40%] relative bg-white rounded-md flex-col items-center bg-red-400">
          {/* Search Section */}
          <section className=" w-[95%] flex rounded-md justify-between items-center bg-[#E4E7EC] my-2">
            <input
              name="searchQuery"
              value={searchQuery}
              onChange={handleSearch}
              type="text"
              placeholder="Search ..."
              className="w-[94%] rounded-md pl-3 py-1.5 bg-[#E4E7EC] outline-none"
            />
            {/* search icon size reduced */}
            <span className="pr-3">
              <img src="./images/Search.png" alt="" className="w-[19px]" />
            </span>
          </section>

          {/* Unknown Friends List Section */}
          <section className=" w-[95%] flex rounded-md flex-col mt-2 overflow-y-scroll">
            {loading && <Loader />}
            {(isFriend ? requestList : usersList)?.map((item) => {
              console.log(item, "___________ITTTTTTT");
              const { fname = "", lname = "", id, profiletype } = item || {};
              {
                /* console.log(usersList, item, '{{{') */
              }
              const isOrganization = profiletype === "Organization";
              return (
                <>
                  <div
                    className="cursor-pointer flex w-full pb-1 flex-col"
                    key={id}
                  >
                    <div className="bg-gray-500 w-full h-[1px] mb-1"></div>
                    <div className="flex items-center py-1 pr-[8px]">
                      <div
                        className="flex items-center gap-2 flex-1"
                        onClick={() => showProfileDetail(id)}
                      >
                        <img
                          src={item?.pimage}
                          alt=""
                          className="w-[45px] h-[45px] rounded-full"
                        />
                        <span className="font-semibold text-[14px]">
                          {`${fname} ${lname}`}
                        </span>
                      </div>
                      {!isOrganization && (
                        <div className="flex gap-2">
                          <img src="" alt="" />
                          {isFriend ? (
                            <img
                              src="./images/acceptFriendRequest.png"
                              alt=""
                              className="w-[30px] h-[30px] cursor-pointer"
                              onClick={() =>
                                setState({
                                  ...state,
                                  acceptRequest: true,
                                  activeProfile: item,
                                })
                              }
                              // onClick={onAcceptRequest}
                            />
                          ) : (
                            <img
                              src="./images/SendFriendRequest.png"
                              alt=""
                              className="w-[30px] h-[30px] cursor-pointer"
                              onClick={() =>
                                setState({
                                  ...state,
                                  requestModal: true,
                                  activeProfile: item,
                                })
                              }
                            />
                          )}
                          {isFriend && (
                            <img
                              src="./images/cancelRequest.png"
                              alt=""
                              className="w-[30px] h-[30px] cursor-pointer"
                              onClick={() =>handleConfirmationModal(item)}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <hr className="border border-gray-50" />
                </>
              );
            })}
          </section>
        </div>
      </div>

      {requestModal && (
        <Portals>
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

      {isFriend && acceptRequest && (
        <Portals>
          <ChangeRelationshipModal
            relationOption={relationOptions}
            handleRelation={handleRelation}
            handleSendRequest={handleAcceptRequest}
            button="Accept Request"
            title="Confirm Friend Request"
            closeModalOption={onCLoseModal}
          />
        </Portals>
      )}
      {cancelModal &&
        <Portals>
          <ConfirmationModal title={'Are  you sure?'}
            button={'Yes'}
            closeModal={() => setState({...state, cancelModal: false})}
            handleAccept={handleCancelRequest}
          />
        </Portals>
      }
    </>
  );
};

export default SearchFriendsPage;
