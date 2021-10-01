import { Request, Response, NextFunction } from 'express';
import User from './interfaces';
import usersService from './service';
import logsService from '../logs/service';

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  const { secret } = req.query;
  const { url, method } = req;
  if (!secret) {
    logsService.createNewEntry(url, method, 0, 'error', 'User did not provide secret');
    return res.status(401).json({
      message: 'You have to provide secret!',
    });
  }
  const user: User | undefined = usersService.findUserBySecret(secret?.toString());

  if (!user) {
    const modifiedUrl = url.replace(secret.toString(), '*****');
    req.url = modifiedUrl;
    logsService.createNewEntry(url, method, 0, 'error', 'No such user');
    return res.status(401).json({
      message: 'User not found!',
    });
  }
  if (user.status === 'Blocked') {
    const modifiedUrl = url.replace(user.secret, '*****');
    req.url = modifiedUrl;
    logsService.createNewEntry(url, method, user.id, 'error', 'Blocked user');
    return res.status(401).json({
      message: 'User blocked!',
    });
  }
  res.locals.user = user;
  return next();
};

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { url, method } = req;
  const { user } = res.locals;
  if (user.role !== 'Admin') {
    const modifiedUrl = url.replace(user.secret, '*****');
    req.url = modifiedUrl;
    logsService.createNewEntry(url, method, user.id, 'error', 'No admin rights');
    return res.status(401).json({
      message: 'You have to be admin!',
    });
  }
  return next();
};

export { isLoggedIn, isAdmin };
