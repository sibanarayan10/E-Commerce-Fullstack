import { Schema } from "mongoose";

const addressSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    Email: {
      type: String,
    },
    Street: {
      type: String,
    },
    City: {
      type: String,
    },
    State: {
      type: String,
    },
    Zip: {
      type: String,
    },
    Country: {
      type: String,
    },
    Phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default addressModel = mongoose.model("address", addressSchema);
