import { Request, Response, NextFunction } from 'express';

const updateTitle = (req: Request, res: Response, next: NextFunction) => {
  const { title } = req.body;
  const uppercaseTitle = title.toUpperCase();
  req.body.title = uppercaseTitle;
  next();
};

export default updateTitle;
