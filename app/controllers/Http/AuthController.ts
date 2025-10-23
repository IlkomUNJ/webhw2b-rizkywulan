import { HttpContext } from '@adonisjs/core/http'
import { users } from '../../data/fakeDB.js'

export default class AuthController {
    public async showLogin({ view }: HttpContext) {
        return view.render('auth/login')
    }

    public async login({ request, response, session }: HttpContext) {
        const { username, password } = request.only(['username', 'password'])
        console.log('Login attempt:', username, password

        )
        const user = users.find(s => s.username === username && s.password === password)
        console.log('User found:', user)

        if (!user) {
            session.flash('error', 'Username atau password salah.')
            return response.redirect().toRoute('login.show')
        }

        session.put('user', user)
        console.log('Session set:', session.get('user'))

        if (user.role === 'seller') {
            console.log('Redirecting to seller.page')
            return response.redirect().toRoute('seller.page')
        } 
        
        console.log('Redirecting to beranda')
        return response.redirect().toRoute('beranda')
    }

    public async logout({ session, response }: HttpContext) {
        session.forget('user')
        return response.redirect().toRoute('beranda.public')
    }
}