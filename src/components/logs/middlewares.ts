import { Request, Response, NextFunction } from 'express';
import logsService from './service';

const logger = (req: Request, res: Response, next: NextFunction) => {
  const { url, method } = req;
  const { user } = res.locals;
  const createdBy = user.id;
  const logType = 'Regular';
  const message = 'Message';
  logsService.createNewEntry(url, method, createdBy, logType, message);
  next();
};

export default logger;
