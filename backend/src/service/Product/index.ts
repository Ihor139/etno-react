import {Product} from "../../models/types";
import {ProductModel} from "../../models";

class ProductService {
	async getAll() {
		const products = await ProductModel.aggregate([
			{
				$group: {
					_id: "$prodId",
					items: {
						$push: "$$ROOT"
					}
				}
			}
		])
		return products;
	};

	async getNew() {
		const products = await ProductModel.aggregate([
			{
				$group: {
					_id: "$prodId",
					items: {
						$push: "$$ROOT"
					}
				}
			}
		]).sort({_id: -1}).limit(4);

		return products.map(product => {
			let prodSizes: { [x: number]: string; }[] = []
			product.items.forEach((item: any) => {
				const key = item.size;
				const size = {
					[key]: item._id
				}
				prodSizes.push(size)
			})

			return {
				...product.items[0],
				sizes: prodSizes
			}
		})
	};

	async getOne(id: string) {
		if (!id) {
			throw new Error('ID is not specified')
		}

		return await ProductModel.findOne({
			_id: id,
		});
	};

	async update(product: Product) {
		if (!product._id) {
			throw new Error('ID is not specified')
		}
		return await ProductModel.findByIdAndUpdate(product._id, product, {new: true});
	}

	async delete(id: string) {
		if (!id) {
			throw new Error('ID is not specified')
		}
		return await ProductModel.findByIdAndDelete(id);
	}
}

export default new ProductService();