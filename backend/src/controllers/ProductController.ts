import { Request, Response } from "express";
import ProductModel from "../models/Product";
import NewProductModel from "../models/NewProduct";
import { Product } from "../models/types";

/**
 * получаем список всех продуктов
 */
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products: Product[] = await ProductModel.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to receive products",
    });
  }
};

/**
 * получаем список новых продуктов
 */
export const getNewProducts = async (req: Request, res: Response) => {
  try {
    const products: Product[] = await NewProductModel.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to receive products",
    });
  }
};

/**
 * получаем один продукт
 */
export const getOneProducts = async (req: Request, res: Response) => {
  try {
    const productId: String = req.params.id;
    const product = await ProductModel.findOne({
      _id: productId,
    });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to receive product",
    });
  }
};
