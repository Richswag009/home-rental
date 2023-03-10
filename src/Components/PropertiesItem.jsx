import React from "react";
import bed from "../assets/img/Bed.svg";
import shower from "../assets/img/Shower.svg";
import size from "../assets/img/Size.svg";

const PropertiesItem = ({ item }) => {
  return (
    <div className=" w-10/12 shadow-md rounded-2xl">
      <img
        src={item.image}
        alt=""
        className="w-full transition-all transform delay-150 ease-in-out duration-300 hover:scale-90 "
      />
      <div className="mx-4">
        <h2 className="font-bold text-xl tracking-tighter capitalize">
          {item.location}
        </h2>
        <div className="my-2">
          <p className=" text-[#818181] font-normal leading-6">{item.type}</p>
          <p className="text-orange font-semibold text-2xl">{item.price}</p>
        </div>
      </div>
      <div className="grid border-t-2 mt-4 grid-cols-3 justify-items-center ">
        <span className="p-3  font-bold  inline-flex items-center">
          <img src={bed} alt="" className="px-1" />
          {item.bedrooms}{" "}
        </span>
        <span className="p-3  font-bold  inline-flex items-center">
          <img src={shower} alt="" className="px-1" />

          {item.bathrooms}
        </span>
        <span className="p-3  font-bold  inline-flex items-center">
          <img src={size} alt="" className="px-1" />
          {item.showers}{" "}
        </span>
      </div>
    </div>
  );
};

export default PropertiesItem;
