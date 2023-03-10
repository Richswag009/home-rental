import React from "react";
import services1 from "../assets/img/services1.png";
import services2 from "../assets/img/services2.png";
import services3 from "../assets/img/services3.png";
import services4 from "../assets/img/services4.png";
const Services = () => {
  return (
    <section className="container py-14 md:max-w-11/12 grid grid-cols-1 lg:grid-cols-2  md:space-x-5 space-y-20 lg:justify-items-center mx-auto lg:px-32 px-10">
      <div className="border-2 grid w-11/12 grid-cols-2 lg:w-1/2 gap-x-6 gap-y-5 mx-3 text-center relative">
        <div>
          <img src={services1} alt="" className="w-full" />
          <p></p>
        </div>
        <div>
          <img src={services2} alt="" className="w-full " />
        </div>
        <div>
          <img src={services3} alt="" className="w-full" />
        </div>
        <div>
          <img src={services4} alt="" className="w-full" />
        </div>
      </div>
      {/* content */}
      <div className="mb-10">
        <h3 className=" text-[#18191F] capitalize font-extrabold text-4xl leading-10">
          Flexibility and options to suit your lifestyle.
        </h3>
        <p className="leading-5 font-normal mt-4 tracking-wide text-lg ">
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </p>
        <button className=" mt-10 outline-none rounded-lg bg-orange p-2 text-white text-sm font-semibold">
          {" "}
          Search Rooms
        </button>
      </div>
    </section>
  );
};
export default Services;
