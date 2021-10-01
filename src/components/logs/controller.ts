import { Request, Response } from 'express';
import logsService from './service';

const logsController = {
  getAllLogs: (req: Request, res: Response) => {
    const events = logsService.getAllEvents();
    res.status(200).json({
      events,
    });
  },
};

export default logsController;
