import {Request, Response} from "express";

import {CartService, GuestService} from "../service";
import {GuestModel, ProductModel} from "../models";

class CartController {
	async get(req: Request, res: Response) {
		try {
			const cookieToken = req.cookies.userToken;
			const dbToken = await GuestService.findToken(cookieToken);
			if (cookieToken && dbToken) {
				await GuestModel
					.findOne({token: cookieToken})
					.populate({path: 'products.product'})
					.exec(function (err: any, products: any) {
						res.json(products);
					});
			}
		} catch (error) {
			res.status(500).json({
				message: "Failed to add product",
			});
		}
	};

	async add(req: Request, res: Response) {
		try {
			const cookieToken = req.cookies.userToken;
			if (cookieToken) {
				const groupProduct = await ProductModel.find({
					prodId: req.body.prodId,
				});

				const sizeList = await groupProduct.map(product => {
					return {
						[product.size]: product._id
					}
				})

				const item = {
					product: req.body._id,
					size: req.body.size,
					amount: req.body.amount,
					sizes: sizeList
				};

				await CartService.add(cookieToken, item);
				// const prod = await CartService.getAll(cookieToken) // not working

				await GuestModel
					.findOne({token: cookieToken})
					.populate({path: 'products.product'})
					.exec(function (err: any, products: any) {
						res.json(products);
					});
			}
		} catch (error) {
			res.status(500).json({
				message: "Failed to add product",
			});
		}
	}

	async remove(req: Request, res: Response) {
		try {
			const cookieToken = req.cookies.userToken;
			const dbToken = await GuestService.findToken(cookieToken);

			if (cookieToken && dbToken) {
				await CartService.remove(cookieToken, req.body._id);
				await GuestModel
					.findOne({token: cookieToken})
					.populate({path: 'products.product'})
					.exec(function (err: any, products: any) {
						res.json(products);
					});
			}
		} catch (error) {
			res.status(500).json({
				message: "Failed to remove product",
			});
		}
	}

	async update(req: Request, res: Response) {
		try {
			const cookieToken = req.cookies.userToken;
			const dbToken = await GuestService.findToken(cookieToken);

			if (cookieToken && dbToken) {
				await CartService.update(cookieToken, req.body._id, req.body.amount);

				await GuestModel
					.findOne({token: cookieToken})
					.populate({path: 'products.product'})
					.exec(function (err: any, products: any) {
						res.json(products);
					});
			}
		} catch (error) {
			res.status(500).json({
				message: "Failed to update product",
			});
		}
	}
}

export default new CartController();