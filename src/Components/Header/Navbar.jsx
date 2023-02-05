import React from "react";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  return (
    <div className="flex space-x-52  items-baseline border-b-1 ">
      <img src={logo} alt="" />
      <div>
        <ul className="flex space-x-12 justify-between text-white">
          <li className="border-b-3 pb-[28px]">Home</li>
          <li>Landlords</li>
          <li>Tenants</li>
          <li className="border-b-2 pb-[20px]">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
