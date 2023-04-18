import React from "react";

const SearchFriendsPage = ({ isFriend }) => {
  return (
    <div className="w-[100%] bg-[#E4E7EC] flex items-center justify-center py-2 mt-1">
      <div className="flex w-[40%] bg-white rounded-md flex-col items-center">
        {/* Search Section */}
        <section className=" w-[95%] flex rounded-md justify-between items-center bg-[#E4E7EC] my-2">
          <input
            type="text"
            placeholder="Search ..."
            className="w-[94%] rounded-md pl-3 py-2 bg-[#E4E7EC] outline-none"
          />
          <span className="pr-3">
            <img src="./images/Search.png" alt="" className="w-[25px]" />
          </span>
        </section>

        {/* Unknown Friends List Section */}
        <section className=" w-[95%] flex rounded-md flex-col justify-between items-center mt-2 h-[480px] overflow-y-scroll">
          {[1, 3, 3, 4, 3, 2, 2, 3, 4, 5, 2].map(() => (
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
                    <span className="font-bold text-sm">Time Hector</span>
                  </div>
                  <div className="flex gap-2">
                    <img src="" alt="" />
                    <img
                      src="./images/acceptFriendRequest.png"
                      alt=""
                      className="w-[30px] h-[30px]"
                    />
                    {isFriend && (
                      <img
                        src="./images/SendFriendRequest.png"
                        alt=""
                        className="w-[30px] h-[30px]"
                      />
                    )}
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SearchFriendsPage;
