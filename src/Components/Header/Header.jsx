import React from "react";
import Navbar from "./Navbar";
import hero1 from "../../assets/img/hero2.png";
import hero2 from "../../assets/img/house.png";

const Header = () => {
  return (
    <header
      className=" px-10 md:px-32 py-5  object-cover  bg-gradient-to-r from-[#0001] to-[#fff5] h-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${hero1})` }}
    >
      <Navbar />
      <hr />

      <section className="container my-16 flex flex-col mx-auto lg:my-32 lg:text-left text-center space-y-6 lg:flex-row lg:mb-0">
        <h1 className="pr-5 capitalize text-white lg:my-28 text-5xl lg:text-6xl ">
          The most affortable place to stay in the san franciso bay area
        </h1>
        <img src={hero2} alt="" className="" />
      </section>
    </header>
  );
};

export default Header;
