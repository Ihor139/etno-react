import { Request, Response } from "express";
import ProductModel from "../models/Product";
import { Product } from "../models/types";
/**
 * получаем список всех продуктов
 */
export const searchProduct = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const result: Product[] = await ProductModel.find({
      $or: [
        { title: { $regex: req.params.key, $options: "i" } },
        { category: { $elemMatch: { $regex: req.params.key, $options: "i" } } },

        // TO DO search by color

        // {
        //   "options.colors": {
        //     $elemMatch: { $in: { $regex: req.params.key, $options: "i" } },
        //   },
        // },
      ],
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Not found",
    });
  }
};