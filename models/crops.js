import mongoose from "mongoose";

const dailyCropsRecordsSchema = new mongoose.Schema(
  {
    message: String,
    status: String,
    total: Number,
    count: Number,
    date: String,
    records: [
      {
        state: String,
        district: String,
        market: String,
        commodity: String,
        variety: String,
        grade: String,
        arrival_date: String,
        min_price: String,
        max_price: String,
        modal_price: String,
      },
    ],
  },
  { timestamps: true }
);

const Crop =
  mongoose.models.Crop || mongoose.model("Crop", dailyCropsRecordsSchema);

export default Crop;
