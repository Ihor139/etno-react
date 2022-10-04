import { Request, Response } from "express";
import ProductModel from "../models/Product";
import { Product } from "../models/types";



export const getProducts = async (req: Request, res: Response) => {
  // try {
  //   const products: Product[] = await CartModel.find();
  //   res.json(products);
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({
  //     message: "Failed to receive products",
  //   });
  // }
};
