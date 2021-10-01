import Log from './components/logs/interfaces';
import { Post } from './components/posts/interfaces';

interface Db {
  posts: Post[];
  logs: Log[];
}

const db: Db = {
  posts: [
    {
      id: 1,
      title: 'Esimene postitus',
      content: 'Suur ja asjalik postitus',
      createdBy: 1,
      date: '2021-10-01T07:46:45.822Z',
    },
    {
      id: 2,
      title: 'Teine postitus',
      content: 'Suur ja asjalik postitus',
      createdBy: 1,
      date: '2021-10-01T07:46:45.822Z',
    },
  ],
  logs: [],
};

export default db;
