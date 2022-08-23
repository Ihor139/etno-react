import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    category: {
      type: Array,
      default: [],
      required: true
    },
    price: {
      nested: {
        nested: {
          $numberDecimal: {
            type: Number,
            required: true
          },
        },
        currency: String
      },
    },
    options: {
      nested: {
        size: Object
      }
    },
    features: Array,
    colors: Array,
    images: Array,
    title: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("Product", ProductSchema);
