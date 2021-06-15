import Database from '@ioc:Adonis/Lucid/Database';
import ICreateUser from '../interfaces/CreateUser';

class UsersRepository {
  public async index() {
    return Database.from('users')
      .select({
        id: 'usr_id',
        uuid: 'usr_uuid',
        name: 'usr_name',
        email: 'usr_email',
        active: 'usr_active',
        phone: 'usr_phone',
        document: 'usr_document',
        enable_url: 'usr_enable_url',
        created_at: 'usr_created_at',
        updated_at: 'usr_updated_at'
      })
      .orderBy('usr_id', 'asc');
  }

  public async find(id: number) {
    return Database.from('users')
        .select({
          id: 'usr_id',
          uuid: 'usr_uuid',
          name: 'usr_name',
          email: 'usr_email',
          active: 'usr_active',
          phone: 'usr_phone',
          document: 'usr_document',
          enable_url: 'usr_enable_url',
          created_at: 'usr_created_at',
          updated_at: 'usr_updated_at'
        })
        .where('usr_id', id)
  }

  public async store(data: ICreateUser) {
    await Database.table('users')
      .insert({
        usr_name: data.name,
        usr_email: data.email,
        usr_active: Number(data.active),
        usr_phone: Number(data.phone),
        usr_document: String(data.document),
        usr_password: data.password
      });

    return {
      message: 'user successfully added'
    };
  }
}

export const usersRepository = new UsersRepository();
