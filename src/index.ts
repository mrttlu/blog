import express, { Application } from 'express';

import postsController from './components/posts/controller';
import logsController from './components/logs/controller';
import updateTitle from './components/posts/middlewares';
import logger from './components/logs/middlewares';

const app: Application = express();

const port: number = 3000;

app.use(express.json());
app.use(logger);

app.get('/posts', postsController.getAllPosts);

app.post('/posts', updateTitle, postsController.createPost);

app.get('/logs', logsController.getAllLogs);

app.listen(port, () => {
  console.log(`Server is running on port ${3000}`);
});
