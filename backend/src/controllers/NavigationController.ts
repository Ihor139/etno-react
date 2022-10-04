import { Request, Response } from "express";
import NavigationModel from "../models/NavigationModel";

/**
 * получаем один продукт
 */
export const getNavigation = async (req: Request, res: Response) => {
  try {
    const navigation = await NavigationModel.find();

    res.json(navigation);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to receive navigation",
    });
  }
};
