import mongoose from "mongoose";
import shortid from "shortid";

const schema = mongoose.Schema(
  {
    _id: { type: String, default: shortid.generate, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    availableSizes: { type: [String], required: true },
  },
  { collection: "Products" }
);
export default mongoose.model("Products", schema);
