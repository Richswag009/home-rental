import React from "react";
import testimonial from "../assets/img/testimonial.png";
import Slider from "./Slider";
import quotes from "../assets/img/“.svg";

const Testimonial = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2  my-16 px-10 md:px-32 ">
      {/* slider */}
      <div className=" relative bg-[#f4501e2c] px-10  py-12 ">
        <img src={quotes} alt="" className="absolute top-8 left-2 opacity-40" />

        <Slider />
      </div>

      {/* testimonial images */}
      <div className="">
        <iframe
          className="h-[50vh]  w-full  md:w-full md:h-full"
          src="https://www.youtube.com/embed/yXWw0_UfSFg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      {/* <div className="mt-32 bg-lightOrange">
        <img
          className="absolute mt-4 md:mt-10 md:ml-7 p-8"
          src={Curly}
          alt=""
        />
        <div className="flex flex-col md:flex-row gap-8 mx-auto relative">
          <Slider />
        </div>
      </div> */}
    </section>
  );
};

export default Testimonial;
