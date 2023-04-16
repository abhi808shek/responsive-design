import React from "react";

const MenuModal = ({data,showModal,closeModel}) => {
const onHandleClick = (option)=>{
  if (option === "Report") {
    showModal(true)
  }

  else if (option === "Report") {
    showModal(true)
  }
  closeModel(false)
}
  return (
    <div className="w-[20%] absolute top-[40px] border-2 border-gray-600 bg-white right-[388px]">
      {data?.map((elem,index) => (
        <div  key={index} className="flex gap-2 border-b-2 border-gray-600 items-center mx-2 py-2 cursor-pointer" onClick={()=>onHandleClick(elem.name                                 )}>
          <img src={elem.icon} alt="" className="w-[25px] "/>
          <span className="text-[12px] text-gray-600 font-semibold">{elem.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuModal;
