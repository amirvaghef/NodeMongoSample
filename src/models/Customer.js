import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    family: { type: String, required: true },
    nationalCode: { type: Number }, // required: true },
    IdNo: { type: Number }, // required: true },
    childs: [
      {
        name: String,
        age: Number,
      },
    ],
  },
  { timestamps: true }
);
const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
