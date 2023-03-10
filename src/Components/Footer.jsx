import React from "react";
import phone from "../assets/img/Path.svg";
import location from "../assets/img/Shape.svg";
import landLine from "../assets/img/Shape (1).svg";
import facebook from "../assets/img/Facebook.svg";
import twitter from "../assets/img/Twitter.svg";
import linkedin from "../assets/img/Twitter.svg";
import youtube from "../assets/img/Youtube.svg";
import instagram from "../assets/img/Instagram.svg";
import google from "../assets/img/GooglePlus.svg";
import pininterest from "../assets/img/Pinterest.svg";
import rss from "../assets/img/RSS.svg";

const Footer = () => {
  return (
    <footer className="md:px-32 items-center px-10 py-10 mx-auto">
      <div className=" lg:flex  justify-evenly items-center   pt-20 border-t-2 border-orange my-5 lg:my-20">
        <h1 className="font-bold text-6xl leading-10 tracking-tighter">Logo</h1>
        {/* contact */}
        <div className=" text-[#0A142F] mt-10">
          {/* address */}
          <p className="font-normal text-[#0a142f] leading-5 text-sm flex items center">
            <img src={location} alt="" className="pr-3" />
            345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          </p>
          <div className="lg:flex text-sm lg:justify-between space-y-2">
            <span className="flex items-center">
              <img src={phone} alt="" className="pr-3" />
              [123]346-7890
            </span>
            <span className="flex items-center">
              <img src={landLine} alt="" className="pr-3" />
              [123]346-7890
            </span>
          </div>

          {/* social media  */}
          <div className="flex space-x-5 mt-5 lg:mt-10">
            <p className="text-[#0A142F] text-sm leading-5">Social Media</p>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={google} alt="" />
            <img src={pininterest} alt="" />
            <img src={rss} alt="" />
          </div>
        </div>
      </div>

      {/* links and copyright */}
      <div className="lg:flex justify-evenly lg:items-center ">
        <ul className=" flex font-normal my-2   text-sm text-[#0a142f] uppercase space-x-2">
          <li>About-us</li>
          <li>Contact-us</li>
          <li>Help</li>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
        </ul>

        <p className="text-[#0a142f]">
          Copyright &copy; 2023 Minimuimlivingcost. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
