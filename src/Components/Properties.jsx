import React from "react";
// import images1 from "./../assets/img/properties1.png";
import PropertiesData from "../Properties.json";
import PropertiesItem from "./PropertiesItem";

const Properties = () => {
  const propertiesData = PropertiesData.map((item) => {
    return <PropertiesItem item={item} key={item.id} />;
  });
  return (
    <section className="container bg-[#F5F5F5] md:px-32 px-10 mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="leading-7 text-2xl lg:text-4xl py-2 font-extrabold text-[#18191f]">
            List Of Properties
          </h1>
          <hr className=" border-orange-600 w-50 mr-60 border-t-0 border-b-2" />
        </div>
        <button className="text-sm md:text-base px-3 py-[10px] text-white bg-[#F4511E] rounded-md border-[#F4511E] border-2 hover:bg-white hover:text-[#F4511E]">
          {" "}
          View All Properties
        </button>
      </div>

      {/* properties */}

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center  gap-8 my-10  ">
        {propertiesData}
      </div>
    </section>
  );
};

export default Properties;
