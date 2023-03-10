import React from "react";

const Pagination = ({
  postPerPage,
  totalPost,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="  flex justify-center w-[324px] items-center  border border-[#F5F5F5] rounded-lg bg-white">
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={` py-6 px-5 text-[#F4511E] border font-medium hover:bg-[#f4511e] hover:text-white  hover:bg-opacity-20  opac border-[#f5f5f5] ${
              page === currentPage
                ? "active:bg-[#F4511E] bg-[#f4511e] text-white active:text-white"
                : ""
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
