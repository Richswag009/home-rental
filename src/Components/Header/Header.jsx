import React from "react";
import Navbar from "./Navbar";
import hero1 from "../../assets/img/hero2.png";
import hero2 from "../../assets/img/properties6.png";

const Header = () => {
  return (
    <header
      className="container mx-auto px-10 md:px-32 py-5  object-cover  bg-gradient-to-r from-[#0000008f] to-[#0000]  h-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${hero1})` }}
    >
      <Navbar />
      <hr />

      <section className=" my-16 flex flex-col mx-auto lg:my-32 lg:text-left text-center space-y-10 lg:flex-row lg:mb-0">
        <h1 className="pr-5 capitalize text-white lg:my-28 text-4xl lg:text-5xl ">
          The most affortable place to stay in the san franciso bay area
        </h1>
        <img src={hero2} alt="" className="w-full" />
      </section>
    </header>
  );
};

export default Header;
