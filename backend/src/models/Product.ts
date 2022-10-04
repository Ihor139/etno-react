import mongoose from "mongoose";
import { Product } from "./types";

export const ProductSchema = new mongoose.Schema(
  {
    category: {
      type: Array,
      default: [],
      required: true,
    },
    price: {
      nested: {
        nested: {
          type: Number,
          required: true,
        },
        currency: String,
      },
    },
    options: {
      sizes: {
        type: Array,
        nested: {
          title: String,
          amount: Number,
        },
      },
      features: Array,
      colors: Array,
      images: Array,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Product & mongoose.Document>("Product", ProductSchema);
