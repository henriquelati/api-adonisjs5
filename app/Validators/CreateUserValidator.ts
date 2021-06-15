import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    email: schema.string(),
    password: schema.string(),
    active: schema.boolean(),
    enable_url: schema.boolean(),
    document: schema.string(),
    phone: schema.number(),
  })

  public messages = {}
}
