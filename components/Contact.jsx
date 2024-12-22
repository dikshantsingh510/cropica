import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="w-full max-w-7xl h-fit flex flex-col justify-center px-5 sm:px-10 xl:px-0 mx-auto mt-10 mb-20 font-bricolage_gratesque">
      <div
        className="h-80 w-full sm:w-[90%] md:w-[80%] max-w-[800px] flex flex-col gap-5 items-center justify-center mx-auto rounded-3xl bg-bg_tertiary transition-all border"
        style={{
          backgroundImage: "url('/contact_bg.webp')",
          backgroundSize: "fill",
          backgroundPosition: "center",
        }}
      >
        <Image
          src={"/leaf.png"}
          alt="Description of the image"
          width={400}
          height={160}
          style={{ objectFit: "cover" }}
          priority
          className="w-24"
        />
        <h2 className="text-3xl font-medium text-center  text-text_primary">
          Get in Touch with us
        </h2>
        <p className="text-center text-text_secondary w-[90%] sm:w-[80%]">
          We'd love to hear from you! Whether you have questions, feedback, or
          need assistance, our team is here to help.
        </p>
        <div className="px-7 py-2.5 rounded-3xl flex justify-center items-center uppercase bg-text_primary text-bg_primary cursor-pointer">
          Contact us
        </div>
      </div>
    </div>
  );
}

export default Contact;
