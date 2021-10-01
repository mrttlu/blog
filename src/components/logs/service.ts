import db from '../../db';
import Log from './interfaces';

const logsService = {
  createNewEntry: (
    url: string,
    method: string,
    createdBy: number,
    type: string,
    message: string,
  ) => {
    const id = db.logs.length + 1;
    const log: Log = {
      id,
      endpoint: url,
      method,
      user: createdBy,
      date: new Date().toISOString(),
      type,
      message,
    };
    db.logs.push(log);
  },
  getAllEvents: () => {
    const events = db.logs;
    return events;
  },
};

export default logsService;
