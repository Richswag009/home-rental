import React from "react";
import Navbar from "./Navbar";
import hero1 from "../../assets/img/hero2.png";
import hero2 from "../../assets/img/house.png";

const Header = () => {
  return (
    <div
      className=" sm:px-32 py-5  bg-gradient-to-r from-[#0001] to-[#fff5] h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${hero1})` }}
    >
      <Navbar />
      <hr />

      <section className=" md:flex my-20 space-x-40">
        <h1 className="pr-5 text-white my-28 text-5xl ">
          The most affortable place to stay in the san franciso bay area
        </h1>
        <img src={hero2} alt="" />
      </section>
    </div>
  );
};

export default Header;
