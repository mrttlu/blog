import db from '../../db';
import { Post } from './interfaces';

const postsService = {
  getAllPosts: () => {
    const { posts } = db;
    return posts;
  },
  createPost: (userId: number, title: string, content: string): number => {
    const id: number = db.posts.length + 1;
    const post: Post = {
      id,
      title,
      content,
      createdBy: userId,
      date: new Date().toISOString(),
    };

    db.posts.push(post);
    return id;
  },
};

export default postsService;
