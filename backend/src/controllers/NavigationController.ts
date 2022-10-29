import {Request, Response} from "express";
import NavigationService from "../service/Navigation";

class NavigationController {
	async getAll(req: Request, res: Response) {
		try {
			const navigation = await NavigationService.getAll()
			res.json(navigation);
		} catch (error) {
			console.log(error);
			res.status(500).json({
				message: "Failed to receive navigation",
			});
		}
	};

}


export default new NavigationController();