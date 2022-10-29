import {Request, Response} from "express";
import PostService from "../service/Post";

class PostController {
	async getAll(req: Request, res: Response) {
		try {
			/** получаем список постов*/
			const posts = await PostService.getAll()
			res.json(posts);
		} catch (error) {
			res.status(500).json({
				message: "Не удалось получить статьи",
			});
		}
	};

	async getOne(req: Request, res: Response) {
		try {
			const post = PostService.getOne(req.params.id);
			res.json(post);
		} catch (error) {
			res.status(500).json({
				message: "Failed to receive post",
			});
		}
	};

}

export default new PostController();