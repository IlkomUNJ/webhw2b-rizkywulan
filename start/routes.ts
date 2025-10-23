/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from "@adonisjs/core/services/router"
import AuthController from "#controllers/Http/AuthController"
import SellerController from "#controllers/Http/SellerController"
import WishlistController from "#controllers/Http/WishlistController"

router.get('/', async ({ view }) => {
    return view.render('pages/beranda')
}).as('beranda.public')

router.get('/menuresto', async ({ view }) => {
    return view.render('pages/menuresto')
}).as('menu')

router.get('/tentangkami', async ({ view }) => {
    return view.render('pages/aboutresto')
}).as('about')

router.get('/masuk', async ({ view }) => {
    return view.render('auth/login')
}).as('masuk')

router.get('/register', async ({ view }) => {
    return view.render('auth/register')
}).as('daftar')

router.get('/suka', async ({ view }) => {
    return view.render('user/wishlist')
}).as('wishlist')

router.get('/login', [AuthController, 'login']).as('login.show')
router.post('/login', [AuthController, 'login']).as('login.post')
router.post('/logout', [AuthController, 'logout']).as('logout')

router.get('/beranda', async ({ view, session, response }) => {
    const user = session.get('user')
    if (!user) {
        return response.redirect().toRoute('login.show')
    }

    return view.render('user/berandauser', { user })
}).as('beranda')

router.get('/menuuser', async ({ view, session, response }) => {
    const user = session.get('user')
    if (!user) {
        return response.redirect().toRoute('login.show')
    }

    return view.render('user/menubuyer', { user })
}).as('menuUser')

router.get('/aboutuser', async ({ view, session, response }) => {
    const user = session.get('user')
    if (!user) {
        return response.redirect().toRoute('login.show')
    }
 
    return view.render('user/aboutuser', { user })
}).as('aboutUser')

router.get('/wishlist', async ({ view, session, response }) => {
    const user = session.get('user')
    if (!user) {
        return response.redirect().toRoute('login.show')
    }

    return view.render('user/wishlist', { user })
})

router.get('/liked', [WishlistController, 'index']).as('wishlist.index')
router.post('liked/toggle/:id', [WishlistController, 'toggle']).as('wishlist.toggle')

router.get('/seller', [SellerController, 'index']).as('seller.page')