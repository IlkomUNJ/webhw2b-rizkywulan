import type { HttpContext } from '@adonisjs/core/http'

export default class IsRoleSessionMiddleware {
  public async handle(
    { auth, response }: HttpContext,
    next: () => Promise<void>,
    roles: string[]
  ) {
    const user = auth.user

    // Jika belum login atau role tidak cocok → redirect login
    if (!user || !roles.includes(user.role)) {
      return response.redirect('/login')
    }

    await next()
  }
}