import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import Wishlist from '#models/wishlist'

export default class WishlistController {
  async index({ auth, view }: HttpContext) {
    const user = auth.user!
    const wishlist = await Wishlist.query()
      .where('user_id', user.id)
      .preload('product')

    return view.render('user/wishlist', { wishlist })
  }

  async toggle({ auth, params, response }: HttpContext) {
    const user = auth.user!
    const product = await Product.findOrFail(params.id)

    // Cek apakah produk sudah diwishlist
    const exists = await user.related('wishlist').query().where('product_id', product.id).first()

    if (exists) {
      await user.related('wishlist').detach([product.id])
    } else {
      await user.related('wishlist').attach([product.id])
    }

    return response.redirect('back')
  }
}