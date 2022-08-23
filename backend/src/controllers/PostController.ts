import {Request, Response} from "express";
import PostModel from "../models/Post";

/** 7.3 получение всех статтей */
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    /** получаем список постов*/
    const posts = await PostModel.find()
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить статьи",
    });
  }
};

/** 7.4 получение одной статьи */
export const getOnePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndUpdate({
      _id: postId,
    }, {
      $inc: {viewsCount: 1},
    }, {
      returnDocument: 'after'
    }, (err, doc) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Failed to receive post",
        });
      }
      if (!doc) {
        return res.status(404).json({
          message: "Article not found",
        })
      }
      res.json(doc);
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to receive post",
    });
  }
};
