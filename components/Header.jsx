import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full max-w-7xl h-[116] flex justify-between items-center px-5 sm:px-10 xl:px-0 mx-auto font-bricolage_gratesque">
        {/* Logo */}
        <div className="cursor-pointer flex items-center justify-center ">
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
        {/* Nav */}
        <nav className="hidden justify-center items-center bg-bg_secondary h-[40] w-[440] rounded-3xl  md:flex">
          <ul className="flex justify-center items-center">
            <Link href={'/'} className="mx-4 text-text_primary cursor-pointer hover:text-black">
              Home
            </Link>
            <Link href={'/about'} className="mx-4 text-text_primary cursor-pointer hover:text-black">
              About
            </Link>
            <Link href={'/#services'} className="mx-4 text-text_primary cursor-pointer hover:text-black">
              Services
            </Link>
            <Link href={'/#contact'} className="mx-4 text-text_primary cursor-pointer hover:text-black">
              Contact
            </Link>
          </ul>
        </nav>
        {/* Nav Button */}
        <div className="w-[96] sm:w-[126] h-[36] sm:h-[46] rounded-3xl flex justify-center items-center uppercase bg-text_primary text-bg_primary cursor-pointer">
          FAQ
        </div>
        {/* Search */}
      </div>
    </>
  );
};

export default Header;
