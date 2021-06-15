import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    email: schema.string({ escape: true }),
    password: schema.string({ escape: true }),
    active: schema.number(),
    enable_url: schema.number(),
    document: schema.string({ escape: true }),
    phone: schema.string({ escape: true }),
  })

  public messages = {}
}
