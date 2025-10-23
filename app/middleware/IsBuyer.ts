import { HttpContext } from '@adonisjs/core/http'

export default class IsBuyer {
    public async handle({ session, response }: HttpContext, next: () =>
        Promise<void>) {
            const role = session.get('role')

            if (!role || role !== 'user') {
                return response.redirect('/masuk')
            }

            await next()
        }
}