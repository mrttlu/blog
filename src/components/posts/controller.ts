import { Request, Response } from 'express';
import postsService from './service';

const postsController = {
  getAllPosts: (req: Request, res: Response) => {
    const posts = postsService.getAllPosts();
    res.status(200).json({
      posts,
    });
  },
  createPost: (req: Request, res: Response) => {
    const { title, content } = req.body;
    const userId = res.locals.user.id;
    const id = postsService.createPost(userId, title, content);
    res.status(201).json({
      id,
    });
  },
};

export default postsController;
