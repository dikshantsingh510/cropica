"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { STATES, CROPS } from "../utils/constants";
import { Select } from "@radix-ui/themes";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [state, setState] = useState("Uttar Pradesh");
  const [district, setDistrict] = useState("Bijnor");
  // const [market, setMarket] = useState("Agra");
  const [commodity, setCommodity] = useState("Wheat");
  const navigate = useRouter()

  const handleStateSelect = (value) => {
    let data = value.split(" ").join("%20");

    setState(data);
  };
  const handleCommoditySelect = (value) => {
    let data = value.split(" ").join("%20");

    setCommodity(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate.push(`/stats`)
  };

  return (
    <div
      className="w-full max-w-7xl min-h-fit max-h-fit flex justify-center px-5 sm:px-10 xl:px-0 mx-auto font-bricolage_gratesque "
      style={{
        backgroundImage: "url('/hero_bg.png')",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className=" w-full sm:w-[560px] md:w-[1000px] mt-20 md:mt-5 mb-20">
        <h1 className="leading-[55px] sm:leading-[80px] md:leading-[120px] font-bold text-5xl sm:text-6xl md:text-8xl sm:mt-10 text-text_primary text-center">
          A Modern{" "}
          <span className=" inline-block w-24 sm:w-28 md:w-40 h-9  sm:h-12 md:h-20 rounded-[100px] overflow-hidden ">
            <Image
              className="object-fill"
              src="/hero_text_img.png"
              alt="Description of the image"
              width={400}
              height={160}
              style={{ objectFit: "cover" }}
              priority
            />
          </span>{" "}
          Way To{" "}
          <span className="bg-bg_secondary py-0.5 px-2 sm:px-5 rounded-full">
            Track
          </span>{" "}
          Crop Prices in Real-Time
        </h1>

        {/* Call to action */}
        <form
          onSubmit={handleSubmit}
          className="mt-16 w-[95%] lg:w-[800px] shadow-xl p-4 md:p-8 rounded-md flex flex-col sm:flex-row justify-evenly items-center gap-5 sm:gap-1 mx-auto bg-white"
        >
          {/* State select */}
          <div className="w-fit">
            <Select.Root
              size="3"
              className="w-full border"
              defaultValue="Uttar Pradesh"
              id="state"
              onValueChange={(value) => handleStateSelect(value)}
            >
              <Select.Trigger variant="ghost" />
              <Select.Content color="lime">
                <Select.Group>
                  <Select.Label>States</Select.Label>
                  {STATES.map((state) => (
                    <Select.Item key={`state-${state}`} value={state}>
                      {state}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
          {/* District select */}
          {/* Commodity select */}
          <div className="w-fit">
            <Select.Root
              size="3"
              defaultValue="Wheat"
              className="w-full"
              id="commodity"
              onValueChange={(value) => handleCommoditySelect(value)}
            >
              <Select.Trigger variant="ghost" />
              <Select.Content color="lime">
                <Select.Group>
                  <Select.Label>Commodities</Select.Label>
                  {CROPS.map((crop) => (
                    <Select.Item key={`crop-${crop.name}`} value={crop.name}>
                      {crop.name}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>

          <button
            type="submit"
            className="w-[126] h-[48] rounded-3xl flex justify-center items-center bg-text_primary text-bg_primary cursor-pointer ml-5"
          >
            <IoSearch className="mr-2" />
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
