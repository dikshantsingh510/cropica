import { NextResponse } from "next/server";
import { fetchExternalData } from "../../../lib/fetchExternalData";

export async function GET() {
  const response = await fetchExternalData();

  if (response.success) {
    return NextResponse.json({
      message: "Data fetched and saved to the database successfully",
    });
  } else {
    return NextResponse.json(
      {
        message: "Error fetching data from the API",
      },
      { status: 500 }
    );
  }
}
