import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import { usersService } from '../../Services/UsersService';
import ICreateUser from '../../interfaces/CreateUser';

export default class UsersController {
  public async index() {
    return usersService.index();
  }

  public async find(ctx: HttpContextContract) {
    const id = ctx.request.params().id;

    return usersService.find(id);
  }

  public async store(ctx: HttpContextContract) {
    var payload = await ctx.request.validate(CreateUserValidator);

    const data: ICreateUser = {
      name: payload.name,
      email: payload.email,
      active: payload.active,
      password: payload.password,
      phone: payload.phone,
      document: payload.document,
    };

    return usersService.store(data);
  }
}
