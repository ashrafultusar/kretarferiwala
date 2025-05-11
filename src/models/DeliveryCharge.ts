// models/DeliveryCharge.ts
import mongoose from 'mongoose';

const deliveryChargeSchema = new mongoose.Schema({
  insideDhaka: {
    type: Number,
    required: true,
  },
  outsideDhaka: {
    type: Number,
    required: true,
  },
});

const DeliveryCharge = mongoose.models.DeliveryCharge || mongoose.model('DeliveryCharge', deliveryChargeSchema);

export default DeliveryCharge;
