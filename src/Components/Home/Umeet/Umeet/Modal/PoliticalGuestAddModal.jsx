import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import AddPeopleModal from "./AddPeopleModal";
import { BiRightArrowAlt } from "react-icons/bi";
import PoliticalAddBy from "./PoliticalAddBy";
import { useSelector } from "react-redux";
import { getCountryList } from "../../../../../redux/actionCreators/authActionCreator";
import { useDispatch } from "react-redux";
import {
  searchByCountryInUmeet,
  searchByStateInUmeet,
} from "../../../../../redux/actionCreators/umeetActionCreator";

const CountryList = [
  "India",
  "United States",
  "South Africa",
  "Panama",
  "Japan",
  "Pakistan",
  "India",
  "United States",
  "South Africa",
  "Panama",
  "Japan",
  "Pakistan",
];

const StateList = [
  "Tamilnadu",
  "Punjab",
  "South Africa",
  "Panama",
  "Japan",
  "Pakistan",
  "India",
  "United States",
  "South Africa",
  "Panama",
  "Japan",
  "Pakistan",
];

const LoksabhaList = [
  "Loksabha",
  "United States",
  "South Africa",
  "Panama",
  "Japan",
  "Pakistan",
  "India",
  "United States",
  "South Africa",
  "Panama",
  "Japan",
  "Pakistan",
];

const AssemblyList = [
  "Assembly",
  "United States",
  "South Africa",
  "Panama",
  "Japan",
  "Pakistan",
  "India",
  "United States",
  "South Africa",
  "Panama",
  "Japan",
  "Pakistan",
];

const AddDataList = ["State", "Loksabha", "Assembly"];

const PoliticalGuestAddModal = ({ onClose }) => {
  const [showAddPeopleModal, setShowAddPeopleModal] = useState(false);
  const [selectCountry, setSelectCountry] = useState(false);
  const [country, setCountry] = useState("");
  const [whichBy, setWhichBy] = useState("");
  const [selectBy, setSelectBy] = useState([]);
  const [isSelectedBy, setIsSelectedBy] = useState(false);
  const { countryList } = useSelector((state) => state.authReducer);
  const { guestByStateList } = useSelector((state) => state.umeetReducer);
  const handleShowAddPeopleModal = () => {
    setShowAddPeopleModal(true);
  };
  console.log("guestByStateList", guestByStateList);
  const handleOptionChange = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  const handleAddBy = (data) => {
    setIsSelectedBy(true);
    console.log(data);
    if (data.toLowerCase() == "state") {
      setWhichBy("State");
      setSelectBy(guestByStateList?.data);
    } else if (data.toLowerCase() == "loksabha") {
      setWhichBy("Loksabha");
      setSelectBy(LoksabhaList);
    } else if (data.toLowerCase() == "assembly") {
      setWhichBy("Assembly");
      setSelectBy(AssemblyList);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryList());
  }, []);
  const onHandleCountrySelection = async () => {
    const countryList = await dispatch(searchByCountryInUmeet(country));
    console.log("countryList", countryList);
    if (countryList?.status) {
      console.log("countryList.data.code", countryList?.data);

      for (let index = 0; index < countryList?.data?.length; index++) {
        dispatch(searchByStateInUmeet(countryList?.data[index]?.code));
        setSelectCountry(true);
      }
    }
  };
  return (
    <div
      className="absolut fixed top-8 left-0 h-full w-full flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <div className="w-[96%] md:w-[60%] lg:w-[40%] xl:w-[30%] h-[80%] bg-white rounded-xl p-3">
        <div className="flex justify-between py-1 text-gray-600">
          <div className="text-[18px] flex justify-center font-bold text-gray-700 text-gray-800 w-11/12">
            Add Guests
          </div>
          <span className="w-1/12">
            <AiOutlineCloseCircle
              onClick={onClose}
              className="w-8 cursor-pointer hover:text-red-500 h-7"
            />
          </span>
        </div>
        {/* selecting country, place */}
        <section className="w-full h-full">
          {selectCountry ? (
            <div className="py-2 font-semibold text-center rounded-lg bg-white text-[#519d8b] border border-[#519d8b] w-full my-2 cursor-pointer font-bold">
              {country}
            </div>
          ) : (
            <>
              <div className="py-2 font-semibold text-center rounded-lg bg-white text-[#519d8b] border border-[#519d8b] w-full my-2 cursor-pointer">
                Select Country
              </div>
              <input
                type="search"
                className="outline-none border-b border-[#519d8b] text-[#519d8b] w-full my-2"
                placeholder="Search Country.."
              />
              <div className="h-[63%] lg:h-[68%] overflow-y-scroll">
                {countryList?.map((data, i) => (
                  <div key={i} className="flex items-center my-2.5">
                    <input
                      onChange={handleOptionChange}
                      checked={country === data?.country}
                      value={data?.country}
                      type="radio"
                      id={data?.country}
                      className="w-5 h-5"
                    />
                    <label
                      htmlFor={data?.country}
                      className="ml-5 text-[17px] text-gray-700"
                    >
                      {data?.country}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex justify-end text-[#519d8b] text-xl">
                <span
                  onClick={onHandleCountrySelection}
                  className="flex items-center cursor-pointer font-bold"
                >
                  Next
                  <BiRightArrowAlt className="w-7 h-7" />
                </span>
              </div>
            </>
          )}

          {/* select by loksabha, state, Assembly */}
          {isSelectedBy ? (
            <PoliticalAddBy
              selectBy={selectBy}
              whichBy={whichBy}
              onClose={() => setIsSelectedBy(false)}
            />
          ) : (
            <>
              {selectCountry ? (
                country.toLowerCase() == "india" ? (
                  <section className="flex flex-col justify-center w-full">
                    {AddDataList.map((data) => (
                      <div
                        key={data}
                        onClick={() => handleAddBy(data)}
                        className="flex items-center justify-center py-2 rounded-lg cursor-pointer my-2 text-center bg-[#519d8b] text-white py-2 font-bold"
                      >
                        Add By {data}
                        <BiRightArrowAlt className="w-7 h-7" />
                      </div>
                    ))}
                  </section>
                ) : (
                  <div
                    onClick={() => handleAddBy("State")}
                    className="flex items-center justify-center py-2 rounded-lg cursor-pointer my-2 text-center bg-[#519d8b] text-white py-2 font-bold"
                  >
                    Add By State
                    <BiRightArrowAlt className="w-7 h-7" />
                  </div>
                )
              ) : null}
            </>
          )}
        </section>
      </div>
      {showAddPeopleModal && (
        <AddPeopleModal onClose={() => setShowAddPeopleModal(false)} />
      )}
    </div>
  );
};

export default PoliticalGuestAddModal;
