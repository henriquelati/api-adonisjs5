import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FriendsController {
  public async index(ctx: HttpContextContract) {
    return {
      title: 'baldeco',
    }
  }
}
