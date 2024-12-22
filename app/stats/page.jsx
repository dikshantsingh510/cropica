"use client";

import React, { useEffect, useState } from "react";
import { Table, Select } from "@radix-ui/themes";
import { IoSearch } from "react-icons/io5";
import { STATES, DISTRICTS, CROPS } from "../../utils/constants";
// console.log(STATES);

const Stats = () => {
  const [cropData, setCropData] = useState([]);
  const [state, setState] = useState("Uttar Pradesh");
  const [district, setDistrict] = useState("Bijnor");
  // const [market, setMarket] = useState("Agra");
  const [commodity, setCommodity] = useState("Wheat");

  const getData = async () => {
    const response = await fetch(
      `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019a97db67f95a4e016f5d62f5a73661a1&format=json&limit=100&filters%5Bstate.keyword%5D=${state}&filters%5Bcommodity%5D=${commodity}`
    );
    const data = await response.json();
    console.log(data);

    setCropData(data.records);
  };

  useEffect(() => {
    getData();
  }, []);

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
    console.log(state, commodity);

    getData();
  };

  return (
    <div className="w-screen max-w-7xl min-h-screen flex flex-col items-center mx-auto font-bricolage_gratesque">
      <h1 className="h2">Get Stats</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-6 w-[95%] lg:w-[800px] shadow-xl p-4 rounded-md flex justify-evenly items-center"
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
        {/* <div className="w-fit">
          <Select.Root
            size="3"
            defaultValue="Bijnor"
            className="w-full"
            id="district"
            onValueChange={(e) => handleDistrictSelect(e)}
          >
            <Select.Trigger variant="ghost" />
            <Select.Content color="lime">
              <Select.Group>
                <Select.Label>Districts</Select.Label>
                {DISTRICTS.map((district) => (
                  <Select.Item key={`district-${district}`} value={district}>
                    {district}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div> */}
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

      {/* Table */}
      <div className="mt-10 w-full md:w-[1200px]">
        <Table.Root className="border rounded-lg shadow-xl">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>State</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>District</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Market</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Commodity</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Max. price/Q</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Min. price/Q</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cropData.map((crop, index) => (
              <Table.Row key={`crop-row-${crop.market}-${index}`}>
                <Table.RowHeaderCell>{crop.state}</Table.RowHeaderCell>
                <Table.Cell>{crop.district}</Table.Cell>
                <Table.Cell>{crop.market}</Table.Cell>
                <Table.Cell>{crop.commodity}</Table.Cell>
                <Table.Cell>{crop.max_price}</Table.Cell>
                <Table.Cell>{crop.min_price}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default Stats;
