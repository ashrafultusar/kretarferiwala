import { model, models, Schema } from "mongoose";

const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    note: { type: String },
    deliveryCharge: { type: Number, required: true },
    orderNumber: { type: String, required: true, unique: true },
    products: [
      {
        id: String,
        name: String,
        image: String,
        discountPrice: Number,
        quantity: Number,
      },
    ],
    subTotal: Number,
    totalAmount: Number,
    paymentMethod: { type: String, default: "Cash on Delivery" },
    // ✅ New Field for Order Status
    status: { type: String, default: "Active" },
  },
  { timestamps: true }
);

export default models.Order || model("Order", orderSchema);
