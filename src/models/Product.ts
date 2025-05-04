import { Schema, model, models } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      
    },
    description: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
     
    },
    discountPrice: {
      type: Number,
     
    },
    images: {
      type: [String], 
      required: true,
    },
  },
  { timestamps: true } 
);

const Product = models.Product || model('Product', productSchema);

export default Product;
 