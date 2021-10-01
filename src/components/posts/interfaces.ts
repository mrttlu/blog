interface Post {
  id: number;
  title: string;
  content: string;
  createdBy: number;
  date: string;
}

interface Posts {
  posts: Post[]
}

export { Post, Posts };
