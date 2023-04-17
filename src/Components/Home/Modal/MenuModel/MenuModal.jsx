import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuModalTabSelect } from "../../../../redux/actionCreators/userActionCreator";

const MenuModal = ({data,showModal,closeModel}) => {
  const {menuModalTab} = useSelector((state)=>state.userReducer)
  const dispatch = useDispatch()
  const onHandleClick = (option)=>{
    dispatch(menuModalTabSelect(option))
  // if (option === "Report") {
  //   showModal(true)
  // }

  // else if (option === "Report") {
  //   showModal(true)
  // }
  // closeModel(false)
}
  return (
    <div className="w-[20%] absolute  border-2 border-gray-600 bg-white lg:right-[32.8%] xl:right-[32.2%] mt-8 z-2">
      {data?.map((elem) => (
        <div  key={elem.name} className="flex gap-2 border-b-2 border-gray-600 items-center mx-2 py-2 cursor-pointer" style={{backgroundColor:menuModalTab === elem.name ? "#7991BD" : "white"}} onClick={()=>onHandleClick(elem.name)}>
          <img src={elem.icon} alt="" className="w-[25px] "/>
          <span className="text-[12px] text-gray-600 font-semibold">{elem.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuModal;
