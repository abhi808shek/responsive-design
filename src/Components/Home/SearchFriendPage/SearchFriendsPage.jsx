import React, { useEffect, useState } from "react";
import ChooseFreindsModal from "../Modal/ChooseFreindsModal/ChooseFreindsModal";
import Portals from "../../Portals/Portals";
import ChangeRelationshipModal from "../Modal/ChangeRelationshipModal/ChangeRelationshipModal";
import { useNavigate } from "react-router";
import { debounce, isEmpty } from "../../Utility/utility";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actionCreators/friendsAction";
import EmptyComponent from "../../empty component/EmptyComponent";
import Loader from "../../common/Loader";

const SearchFriendsPage = ({ isFriend }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reducerData = useSelector((state) => {
    return {
      userList: state.friendReducer.usersList,
    };
  });
  const { userList } = reducerData;

  const [sendRequest, setSendRequest] = useState(false);
  const [state, setState] = useState({usersList: userList });
  const { acceptRequest, onAcceptRequest, requestModal, searchQuery, usersList,
  loading } = state;

  useEffect(() => {}, []);
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
  const handleSendRequest = () => {};

  function searchUser(value) {
    dispatch(getUsers(value)).then((res) => {
      setState({...state, usersList: res.data, loading: false, searchQuery: value})
    });
  }
  const processChange = debounce((e) => searchUser(e));
  const handleSearch = (e) => {
    const value = e.target.value;
    const name = e.target.name
    setState({ ...state, [name]: value, loading: true });
    processChange(value);
  };
  console.log(state,userList,searchQuery, "LISTTTTTT");

  return (
    <>
      <div className="w-[100%] mt-2 flex-1 bg-[#E4E7EC] flex justify-center py-2 ">
        <div className="flex w-[40%] relative bg-white rounded-md flex-col items-center">
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
            {
              loading && <Loader/>
            }
            {isEmpty(usersList) && searchQuery ?
            <div>User not found for this search</div>
            : !searchQuery ?
             (
              <EmptyComponent message={'Search friend'} />
            ) : (
              usersList.map((item) => {
                const { fname = "", lname = "", id} = item
                return (
                  <>
                    <div className="cursor-pointer flex w-full pb-1 flex-col" key={id}>
                      <div className="bg-gray-500 w-full h-[1px] mb-1"></div>
                      <div className="flex items-center py-1 pr-[8px]">
                        <div
                          className="flex items-center gap-2 flex-1"
                          onClick={() => showProfileDetail(id)}
                        >
                          <img
                            src="./images/events.jpg"
                            alt=""
                            className="w-[45px] h-[45px] rounded-full"
                          />
                          <span className="font-semibold text-[14px]">
                            {`${fname} ${lname}`}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <img src="" alt="" />
                          {isFriend ? (
                            <img
                              src="./images/acceptFriendRequest.png"
                              alt=""
                              className="w-[30px] h-[30px] cursor-pointer"
                              onClick={onAcceptRequest}
                            />
                          ) : (
                            <img
                              src="./images/SendFriendRequest.png"
                              alt=""
                              className="w-[30px] h-[30px] cursor-pointer"
                              onClick={() =>
                                setState({ ...state, requestModal: true })
                              }
                            />
                          )}
                          {isFriend && (
                            <img
                              src="./images/cancelRequest.png"
                              alt=""
                              className="w-[30px] h-[30px] cursor-pointer"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <hr className="border border-gray-50" />
                  </>
                );
              })
            )}
          </section>
        </div>
      </div>

      {requestModal && (
        <Portals>
          <ChangeRelationshipModal
            button="Send Request"
            title="Wanna Send Friend Request"
            handleSendRequest={handleSendRequest}
            closeModalOption={onHandleCloseModal}
          />
        </Portals>
      )}

      {isFriend && acceptRequest && (
        <Portals>
          <ChangeRelationshipModal
            button="Accept Request"
            title="Confirm Friend Request"
            closeModalOption={onCLoseModal}
          />
        </Portals>
      )}
    </>
  );
};

export default SearchFriendsPage;
