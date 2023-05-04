import React, { useEffect, useState } from "react";
import ChooseFreindsModal from "../Modal/ChooseFreindsModal/ChooseFreindsModal";
import Portals from "../../Portals/Portals";
import ChangeRelationshipModal from "../Modal/ChangeRelationshipModal/ChangeRelationshipModal";

const SearchFriendsPage = ({ isFriend }) => {
  const [sendRequest, setSendRequest] = useState(false);
  const [state, setState] = useState({})
  // const 
  useEffect(() => {

  }, [])
  const onSendRequest = () => {
    setSendRequest(true);
  };

  const onHandleCloseModal = () => {
    setSendRequest(false);
  };

  const onAcceptRequest = ()=>{
    setAcceptRequest(true)
  }

  const onCLoseModal = ()=>{
    setAcceptRequest(false)
  }
  return (
    <>
      <div className="w-[100%] flex-1 mt-16 bg-[#E4E7EC] flex justify-center py-2 mt-1">
        <div className="flex w-[40%] bg-white rounded-md flex-col items-center">
          {/* Search Section */}
          <section className=" w-[95%] flex rounded-md justify-between items-center bg-[#E4E7EC] my-2">
            <input
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

          }
            {[1, 3, 3, 4, 3, 2, 2, 3, 4, 5, 2, 8, 9, 7, 8, 9, 0].map(() => (
              <>
                <div className="flex w-full pb-1 flex-col">
                  <div className="bg-gray-500 w-full h-[1px] mb-1"></div>
                  <div className="flex items-center py-1 pr-[8px]">
                    <div className="flex items-center gap-2 flex-1">
                      <img
                        src="./images/events.jpg"
                        alt=""
                        className="w-[45px] h-[45px] rounded-full"
                      />
                      <span className="font-semibold text-[14px]">
                        Time Hector
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
                          onClick={onSendRequest}
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
            ))}
          </section>
        </div>
      </div>

      {sendRequest && (
        <Portals>
          <ChangeRelationshipModal
            button="Send Request"
            title="Wanna Send Friend Request"
            closeModalOption={onHandleCloseModal}
          />
        </Portals>
      )}

      {isFriend && acceptRequest  && (
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
