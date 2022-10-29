import {Request, Response} from "express";
import SearchService from "../service/Search"

class SearchController {
	getResult = async (
		req: Request,
		res: Response,
		next: Function
	) => {
		try {
			const result = await SearchService.getResult(req.params.key);
			res.json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({
				message: "Not found",
			});
		}
	};
}

export default new SearchController();