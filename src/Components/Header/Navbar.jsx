import React from "react";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  return (
    <nav className=" container z-10 lg:flex lg:space-x-52  space-y-4 md:items-baseline ">
      <img src={logo} alt="" />
      <div>
        <ul className="space-y-2 hidden  md:space-y-0 md:flex md:space-x-12 lg:justify-between text-white">
          <li className="border-b-3 md:pb-[28px]">Home</li>
          <li>Landlords</li>
          <li>Tenants</li>
          <li className="border-b-2 md:pb-[20px]">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
