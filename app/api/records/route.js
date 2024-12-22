import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongoose";
import Resources from "../../../models/crops";



























































// export async function GET(request) {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Get the search params from the URL
//     const { searchParams } = new URL(request.url);
//     const limit = parseInt(searchParams.get("limit"), 10) || 100;
//     const state = searchParams.get("state");
//     const district = searchParams.get("district");
//     const commodity = searchParams.get("commodity");


//     console.log(limint , state , district , commodity , " hello world")
//     // Validate required parameters
//     if (!state) {
//       return NextResponse.json(
//         { success: false, message: "State is required" },
//         { status: 400 }
//       );
//     }



//     // Build the query
//     let query = await { "records.state": state };
//     console.log(query)
//     if (district) query["records.district"] = district;
//     if (commodity) query["records.commodity"] = commodity;



//     // Fetch the latest resources with filters
//     const resources = await Resources.findMany(query)
//       .sort({ createdAt: -1 })
//       .select({
//         records: 1,
//         date: 1,
//         count: 1,
//         _id: 0,
//       });

//     // Filter records manually for nested arrays
//     const filteredRecords =
//       resources?.records.filter((record) => {
//         const matchesState = record.state === state;
//         const matchesDistrict = district ? record.district === district : true;
//         const matchesCommodity = commodity
//           ? record.commodity === commodity
//           : true;
//         return matchesState && matchesDistrict && matchesCommodity;
//       }) || [];

//     // If no data found
//     if (filteredRecords.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "No data found for the given criteria",
//         },
//         { status: 404 }
//       );
//     }

//     // Return filtered data
//     return NextResponse.json({
//       success: true,
//       date: resources.date,
//       count: filteredRecords.length,
//       records: filteredRecords.slice(0, limit), // Apply limit
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Internal server error",
//       },
//       { status: 500 }
//     );
//   }
// }


// GET()



// // export async function GET() {
// //   await dbConnect();

// //   const resources = await Resources.find();
// //   return NextResponse.json(resources);
// // }