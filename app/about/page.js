import React from "react";

const page = () => {
  return (
    <div className="w-full max-w-7xl min-h-screen max-h-fit flex justify-center flex-col px-5 sm:px-10 xl:px-0 mx-auto font-bricolage_gratesque ">
      <div className="w-full sm:w-[85%] md:w-[700px] text-center font-light text-3xl md:text-4xl mx-auto">

      <h1 className="text-5xl font-bold mb-10 text-center">About us</h1>
      <p className=" text-2xl text-text_primary">
        Welcome to Cropica, your trusted partner in tracking crop prices in
        real-time. Our mission is to empower farmers, traders, and consumers
        with accurate and up-to-date market information, helping them make
        informed decisions and stay ahead of market trends.
      </p>
      </div>
    </div>
  );
};

export default page;
