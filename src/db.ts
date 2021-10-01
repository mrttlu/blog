import Log from './components/logs/interfaces';
import { Post } from './components/posts/interfaces';
import User from './components/users/interfaces';

interface Db {
  posts: Post[];
  logs: Log[];
  users: User[];
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
  users: [
    {
      id: 1,
      username: 'mrt',
      role: 'Admin',
      status: 'Active',
      secret: 'parool',
    },
    {
      id: 2,
      username: 'kalle',
      role: 'User',
      status: 'Active',
      secret: 'pass',
    },
    {
      id: 3,
      username: 'toomas',
      role: 'User',
      status: 'Blocked',
      secret: 'password',
    },
  ],
};

export default db;
