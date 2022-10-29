import {Request, Response} from "express";
import {GuestService, TokenService} from "../service";

class GuestController {
	async add(req: Request, res: Response) {
		try {
			const cookieToken = req.cookies.userToken;
			const dbToken = await GuestService.findToken(cookieToken);

			if (cookieToken && dbToken) {
				res.status(200);
				res.send({
					message: dbToken
				});
				return
			}

			const token = TokenService.generateRandom();
			const guest = await GuestService.add(token);

			res.cookie("userToken", token);
			res.json(guest)
		} catch (error) {
			res.status(500).json({
				message: "Failed to register guest",
			});
		}
	}

	async delete(req: Request, res: Response) {
		try {
			res.json({})
		} catch (error) {
			res.status(500).json({
				message: "Failed to login guest",
			});
		}
	}

}

export default new GuestController();