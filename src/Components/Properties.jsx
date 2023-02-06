import React from "react";
import images1 from "./../assets/img/properties1.png";

const Properties = () => {
  return (
    <section className="container md:px-32 px-10 mx-auto">
      <div className="flex justify-between">
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

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-10">
        <div className="border shadow-md">
          <img src={images1} alt="" className="w-full" />
          <div className="mx-4">
            <h2 className="font-bold text-xl tracking-tighter capitalize">
              2578 Folsom street, san francisco, CA, 94110
            </h2>
            <div className="my-2">
              <p className=" text-[#818181] font-normal leading-6">
                Private Room
              </p>
              <p className="text-[#f4511e] font-semibold text-2xl">
                $1200/Month
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4"></div>
      </section>
    </section>
  );
};

export default Properties;
