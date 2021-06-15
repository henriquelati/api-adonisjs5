import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Auth {
  public async handle ({ request, response }: HttpContextContract, next: () => Promise<void>) {
    const token = request.headers().token;

    if (token !== 'teste') {
      response.unauthorized({ error: 'Must be logged in' })
      return
    }

    await next()
  }
}
