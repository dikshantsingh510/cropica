import axios from "axios";
import Resources from "../models/crops";
import connectDB from "./mongoose";

export async function fetchExternalData() {
  try {
    const isConnected = await connectDB();
    if (!isConnected) {
      throw new Error("Database connection failed");
    }


    const govUrl = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019a97db67f95a4e016f5d62f5a73661a1&format=json&limit=5000`;

    const { data } = await axios.get(govUrl);
    // console.log(data);

    const cropDataToFetch = {
      message: data.message,
      status: data.status,
      total: data.total,
      count: data.count,
      date: new Date().toLocaleDateString(),
      records: data.records,
    };

    // Store data in the database

    const cropsData = new Resources(cropDataToFetch);
    await cropsData.save();

    
    console.log("Data fetched and saved to the database successfully");
    return {
      message: "Data fetched and saved to the database successfully",
      success: true,
    };
  } catch (error) {
    console.error("Error fetching data from the API", error);
    return {
      message: "Error fetching data from the API",
      success: false,
    };
  }
}
