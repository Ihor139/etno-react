import {GuestModel} from "../../models";

class CartService {
	async getAll(userToken: string) {
		return await GuestModel
			.findOne({token: userToken})
			.populate({path: 'products.product'})
			.exec(function (err: any, products: any) {
				return products;
			});
	};

	async add(userToken: string, product: { product: string, amount: number; size: string; sizes: { [p: string]: any }[] }) {
		const guest = await GuestModel.findOneAndUpdate({
			token: userToken
		}, {
			$push: {products: product}
		});

		return guest.products
	}

	async remove(userToken: string, id: string) {
		return await GuestModel.updateOne(
			{token: userToken},
			{
				"$pull": {
					"products": {
						_id: id,
					}
				}
			}
		)
	}

	async update(userToken: string, id: string, amount: string) {
		return await GuestModel.findOneAndUpdate({
			token: userToken,
			"products._id": id
		}, {
			$set: {
				"products.$.amount": amount
			},
		}, {
			returnDocument: 'after'
		})
	}
}

export default new CartService();