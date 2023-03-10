import React from "react";
import Navbar from "./Navbar";
import hero1 from "../../assets/img/hero2.png";
import hero2 from "../../assets/img/properties6.png";
import {motion , useScroll} from 'framer-motion'

const Header = () => {
  const {scrollProgress}=useScroll()
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mx-auto px-10 md:px-32 py-5 object-cover bg-opacity-50  bg-gradient-to-r from-[#000000e8] to-[#030303a9] h-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: ` url(${hero1})`,
        scaleX: scrollProgress,
      }}
    >
      <Navbar />

      <section className=" my-12 grid grid-cols-1 md:grid-cols-2 mx-auto lg:my-32 lg:text-left text-center  lg:mb-0">
        <h1 className="pr-5 capitalize text-white font-bold my-5 lg:my-24 text-6xl md:text-5xl ">
          The most affortable place to stay in the san franciso bay area
        </h1>
        {/* <img src={hero2} alt="" className="w-full" /> */}

        <div className="gmap_canvas">
          <iframe
            className=" w-full rounded-lg"
            height="350"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=albany,%20san%20francisco&t=&z=11&ie=UTF8&iwloc=&output=embed"
          ></iframe>
          <a
            className="relative text-right"
            href="https://123movies-to.org"
          ></a>
          <br />
          <a
            className="overflow-hidden bg-none "
            href="https://www.embedgooglemap.net"
          ></a>
        </div>

        {/* <Select /> */}
      </section>
    </motion.header>
  );
};

export default Header;
