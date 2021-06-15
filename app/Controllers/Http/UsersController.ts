import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {
  public async index(ctx: HttpContextContract) {
    return Database.from('users').select('*').orderBy('usr_id', 'asc');
  }

  public async find(ctx: HttpContextContract) {
    const id = ctx.request.params().id;
    return Database.from('users').select('*').where('usr_id', id);
  }

  public async store(ctx: HttpContextContract) {
    var payload = await ctx.request.validate(CreateUserValidator);
    Object.keys(payload).map(function (key) {
      payload[`usr_${key}`] = payload[key];
      delete payload[key];
    });

    const id = await Database.table('users').insert(payload).returning('usr_id');
    return {
      id,
      message: 'user successfully added'
    };
  }
}
