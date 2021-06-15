import { usersRepository } from '../Repositories/UsersRepository';
import ICreateUser from '../interfaces/CreateUser';

class UsersService {
  public async index() {
    return usersRepository.index();
  }

  public async find(id: number) {
    return usersRepository.find(id);
  }

  public async store(data: ICreateUser) {
    return usersRepository.store(data);
  }
}

export const usersService = new UsersService();
