import React, { useState } from "react";
// import { Pagination } from "swiper";
import Pagination from "../Utils/Pagination";
// import images1 from "./../assets/img/properties1.png";
import PropertiesData from "../Properties.json";
import PropertiesItem from "./PropertiesItem";

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = PropertiesData.slice(firstPostIndex, lastPostIndex);

  const allProperties = currentPost.map((item) => {
    return <PropertiesItem item={item} key={item.id} />;
  });
  // console.log(PropertiesData.length);

  return (
    <section className="container bg-[#F5F5F5] md:px-32 items-center px-10 py-10 mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="leading-7 text-2xl lg:text-4xl py-2 font-extrabold text-[#18191f]">
            List Of Properties
          </h1>
          <hr className=" border-orange-600 w-50 mr-60 border-t-0 border-b-2" />
        </div>
        <button className="text-sm md:text-base px-3 py-[10px] text-white bg-orange rounded-md border-orange border-2 hover:bg-white hover:text-orange">
          {" "}
          View All Properties
        </button>
      </div>

      {/* properties */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-8 my-10  ">
        {allProperties}
      </div>
      <div className="grid place-content-center">
        <Pagination
          setCurrentPage={setCurrentPage}
          totalPost={PropertiesData.length}
          postPerPage={postPerPage}
          setPostPerPage={setPostPerPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default Properties;
