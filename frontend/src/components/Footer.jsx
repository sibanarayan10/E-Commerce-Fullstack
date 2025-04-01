import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_2fr] gap-14 my-10 mt-40 text-sm  ">
        <div className="flex items-center justify-center gap-4">
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Our journey began with a simple idea: to provide a platform where
            customers can easily discover, explore, and purchase a wide range of
            products from the comfort of their homes.
          </p>
        </div>
        <div className="flex-row flex justify-center max-[635px]:gap-20  gap-10">
          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+1-212-456-7890</li>
              <li>contact@stylo.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@stylo.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
