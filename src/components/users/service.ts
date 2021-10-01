import db from '../../db';
import User from './interfaces';

const usersService = {
  findUserBySecret: (secret: string | undefined): User | undefined => {
    const user = db.users.find((element) => element.secret === secret);
    return user;
  },
};

export default usersService;
