import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full min-h-80 max-fit bg-bg_tertiary py-8">
      <div className="w-full max-w-7xl h-full flex justify-between items-center flex-wrap px-5 sm:px-10 xl:px-0 mx-auto font-bricolage_gratesque ">
        <div className="w-60 md:w-1/3 min-h-60 max-h-fit px-5 py-5 ">
          <div className="cursor-pointer w-fit flex items-center justify-center  ">
            <Image
              src={"/leaf.png"}
              width={36}
              height={36}
              alt="logo"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
            <span className="text-text_primary font-bold text-3xl sm:text-4xl ">
              Cropica
            </span>
          </div>
          <p className="text-left text-text_secondary w-[90%] sm:w-[80%] px-1 mt-8">
            We'd love to hear from you! Whether you have questions, feedback, or
            need assistance, our team is here to help.
          </p>
        </div>
        <div className="w-60 md:w-1/3 h-60 px-5 pt-5 ">
          <h2 className="text-xl pb-8 font-medium  text-text_primary">
            Important Links
          </h2>
          <ul className="list-none text-left text-text_secondary w-[90%]">
            <li className="pb-1 cursor-pointer">About</li>
            <li className="pb-1 cursor-pointer">Contact</li>
            <li className="pb-1 cursor-pointer">Services</li>
            <li className="pb-1 cursor-pointer"> Search data</li>
          </ul>
        </div>
        <div className="w-60 md:w-1/3 h-60 px-5 pt-5 ">
          <h2 className="text-xl pb-8 font-medium  text-text_primary">
            Social media
          </h2>
          <ul className="list-none text-left text-text_secondary w-[90%] flex gap-2">
            <Link href={"/"} className="w-6 h-6 text-text_primary">
              <AiFillInstagram className="w-full h-full" />
            </Link>
            <Link href={"/"} className="w-6 h-6 text-text_primary">
              <RiTwitterXFill className="w-full h-full" />
            </Link>
            <Link href={"/"} className="w-6 h-6 text-text_primary">
              <AiFillLinkedin className="w-full h-full" />
            </Link>
            <Link href={"/"} className="w-6 h-6 text-text_primary">
              <RiFacebookCircleFill className="w-full h-full" />
            </Link>
            <Link href={"/"} className="w-6 h-6 text-text_primary">
              <RiGithubFill className="w-full h-full" />
            </Link>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-7xl h-full flex justify-between items-center px-5 sm:px-10 py-1 xl:px-0 mx-auto font-bricolage_gratesque text-sm text-text_secondary">
        &copy; 2024 Cropica. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
