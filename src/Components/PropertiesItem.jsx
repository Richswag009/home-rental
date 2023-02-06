import React from "react";

const PropertiesItem = ({ item }) => {
  return (
    <div className=" w-10/12 shadow-md rounded-2xl">
      <img src={item.image} alt="" className="w-full" />
      <div className="mx-4">
        <h2 className="font-bold text-xl tracking-tighter capitalize">
          {item.location}
        </h2>
        <div className="my-2">
          <p className=" text-[#818181] font-normal leading-6">{item.type}</p>
          <p className="text-[#f4511e] font-semibold text-2xl">{item.price}</p>
        </div>
      </div>
      <div className="grid border-t-2 mt-4 grid-cols-3 justify-items-center ">
        <span className="p-3">{item.bedrooms} </span>
        <span className="p-3">{item.bathrooms}</span>
        <span className="p-3">{item.showers} </span>
      </div>
    </div>
  );
};

export default PropertiesItem;
