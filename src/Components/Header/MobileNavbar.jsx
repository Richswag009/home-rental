import React from "react";
import { IoClose } from "react-icons/io5";

const MobileNavbar = ({ setMobileNavbar }) => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Landlords", link: "/" },
    { name: "Tenants", link: "/" },
    { name: "Contact us", link: "/" },
  ];
  return (
    <nav className="h-[65vh] absolute top-0 z-100  w-full bg-black lg:hidden text-gray-300 ">
      <IoClose
        onClick={() => setMobileNavbar(false)}
        className="absolute right-2 top-2 cursor-pointer text-3xl"
      />
      <ul className="font-secondary h-full flex flex-col items-center justify-center space-y-8 w-full capitalize ">
        {links.map((link, i) => {
          return (
            <li
              className="text-3xl  cursor-pointer hover:border-b-4 hover:border-white "
              key={i}
            >
              {link.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
