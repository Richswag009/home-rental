import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { HiMenu } from "react-icons/hi";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Landlords", link: "/" },
    { name: "Tenants", link: "/" },
    { name: "Contact us", link: "/" },
  ];

  const [mobileNavbar, setMobileNavbar] = useState(false);
  return (
    <nav className="relative container mx-auto">
      <div className=" flex justify-between lg:space-x-52 space-y-4 items-baseline">
        {/* logo container */}
        <img src={logo} alt="" />

        <ul className="space-y-3 hidden  md:space-y-0 lg:flex lg:items-center lg:space-x-12 lg:justify-between text-white ">
          {links.map((link, i) => {
            return (
              <li
                key={i}
                className=" cursor-pointer hover:border-b-4 md:pb-[20px]"
              >
                {link.name}
              </li>
            );
          })}
        </ul>
        {/* mobile nav functionality */}
        {!mobileNavbar && (
          <HiMenu
            onClick={() => setMobileNavbar(true)}
            className="cursor-pointer text-3xl lg:hidden"
          />
        )}
        {mobileNavbar && <MobileNavbar setMobileNavbar={setMobileNavbar} />}
      </div>
      <hr className="hidden lg:flex " />
    </nav>
  );
};

export default Navbar;
