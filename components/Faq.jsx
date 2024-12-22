import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { TiPlus } from "react-icons/ti";
const Faq = () => {
  return (
    <div className="w-full max-w-7xl h-screen flex flex-col justify-center px-5 sm:px-10 xl:px-0 mx-auto mt-10 mb-20 font-bricolage_gratesque ">
      <h2 className="text-2xl font-bold text-center mb-10">FAQ</h2>

      <Accordion.Root className="h-fit w-full sm:w-[90%] md:w-[80%] max-w-[800px] flex flex-col gap-5 items-center justify-center mx-auto transition-all ">
        <Accordion.Item
          value="item-1"
          className="bg-bg_tertiary overflow-hidden rounded-lg w-full min-h-6 text-base font-medium "
        >
          <Accordion.Trigger className="bg-bg_tertiary w-full h-12 text-left px-5 flex justify-between items-center">
            What is Cropica?
            <TiPlus />
          </Accordion.Trigger>
          <Accordion.Content className="bg-bg_tertiary p-5 text-base font-normal ">
            Cropica is a modern platform that allows users to track crop prices
            in real-time. It provides up-to-date information on various crop
            prices to help farmers, traders, and consumers make informed
            decisions.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-2"
          className="bg-bg_tertiary overflow-hidden rounded-lg w-full min-h-6 text-base font-medium"
        >
          <Accordion.Trigger className="bg-bg_tertiary w-full h-12 text-left px-5 flex justify-between items-center">
            How do I use Cropica?
            <TiPlus />
          </Accordion.Trigger>
          <Accordion.Content className="bg-bg_tertiary p-5 text-base font-normal">
            To use Cropica, simply visit our website and navigate to the crop
            prices section. You can search for specific crops or browse through
            the list to find the latest prices.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-3"
          className="bg-bg_tertiary overflow-hidden rounded-lg w-full min-h-6 text-base font-medium"
        >
          <Accordion.Trigger className="bg-bg_tertiary w-full h-12 text-left px-5 flex justify-between items-center">
            Is Cropica free to use?
            <TiPlus />
          </Accordion.Trigger>
          <Accordion.Content className="bg-bg_tertiary p-5 text-base font-normal">
            Yes, Cropica is free to use. We aim to provide valuable information
            to our users without any cost.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-4"
          className="bg-bg_tertiary overflow-hidden rounded-lg w-full min-h-6 text-base font-medium"
        >
          <Accordion.Trigger className="bg-bg_tertiary w-full h-12 text-left px-5 flex justify-between items-center">
            Who can benefit from using Cropica?
            <TiPlus />
          </Accordion.Trigger>
          <Accordion.Content className="bg-bg_tertiary p-5 text-base font-normal">
            Farmers, traders, consumers, and anyone interested in crop prices
            can benefit from using Cropica. It helps users make informed
            decisions based on the latest market trends.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="item-5"
          className="bg-bg_tertiary overflow-hidden rounded-lg w-full min-h-6 text-base font-medium"
        >
          <Accordion.Trigger className="bg-bg_tertiary w-full h-12 text-left px-5 flex justify-between items-center">
            Can I contribute data to Cropica??
            <TiPlus />
          </Accordion.Trigger>
          <Accordion.Content className="bg-bg_tertiary p-5 text-base font-normal">
            Currently, Cropica does not accept user-contributed data. All data
            is sourced from reliable and verified sources to maintain accuracy
            and reliability.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default Faq;
