import mongoose from "mongoose";
import { ProductSchema } from "./Product";
import { Product } from "./types";

const NewProductSchema = new mongoose.Schema({
  ...ProductSchema.obj,
});

export default mongoose.model<Product & mongoose.Document>(
  "newproduct",
  NewProductSchema
);
