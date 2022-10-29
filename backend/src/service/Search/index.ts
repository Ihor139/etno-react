import {ProductModel} from "../../models";
import {Product} from "../../models/types";


class SearchService {
	async getResult(key: string) {
		const result: Product[] = await ProductModel.find({
			$or: [
				{title: {$regex: key, $options: "i"}},
				{category: {$elemMatch: {$regex: key, $options: "i"}}},

				// TO DO search by color

				// {
				//   "options.colors": {
				//     $elemMatch: { $in: { $regex: key, $options: "i" } },
				//   },
				// },
			],
		});
		return result;
	};
}

export default new SearchService();