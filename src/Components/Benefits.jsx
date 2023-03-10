import React from "react";
import benefitsImg from "../assets/img/benefits.png";
import Data from "../Data.json";
import { motion } from "framer-motion";

const Benefits = () => {
  const benefits = Data.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.image} alt="" className="p-4 my-3 leading-8 shadow-md" />
        <p className="text-md text-left font-semibold w-5/6 md:w-3/4 capitalize lg:text-[1em]">
          {item.text}
        </p>
      </div>
    );
  });
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="container mx-auto my-20 px-10 md:px-32 text-center lg:text-left "
    >
      <h1 className="text-3xl font-extrabold">
        Minimum Living Cost Takes Care of Everything
      </h1>
      <hr className="border-orange-600 hidden lg:block -mt-8 ml-10 md:ml-0 md:-mt-0 w-72 border-t-0 border-b-2" />
      <section className="container mx-auto flex flex-col-reverse my-2 lg:flex-row ">
        <img src={benefitsImg} alt="" />
        <div className="grid grid-cols-3 space-x-2  my-20">{benefits}</div>
      </section>
    </motion.section>
  );
};

export default Benefits;
