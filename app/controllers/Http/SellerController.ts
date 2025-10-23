//import type { HttpContext } from '@adonisjs/core/http'
//import Wishlist from '#models/wishlist'

// export default class SellerController {
//   public async index({ session, view, response }: HttpContext) {
//     const seller = session.get('user')

//     if (!seller) {
//       // belum login → redirect ke login
//       return response.redirect('/login')
//     }

//     const wishlists = await Wishlist.query()
//       .where('seller_id', seller.id)
//       .orderBy('created_at', 'desc')

//     return view.render('seller/seller', { seller, wishlists })
//   }

// }

import { HttpContext } from '@adonisjs/core/http'
import { users, products } from '../../data/fakeDB.js'

export default class SellerController {
  public async index({ session, view, response }: HttpContext) {
    const user = session.get('user')

    if (!user || user.role !== 'seller') {
      return response.redirect().toRoute('login.show')
    }

    // Ambil semua produk milik seller ini
    const sellerProducts = products.filter(p => p.sellerId === user.id)

    // Cari semua wishlist dari pengguna lain yang berisi produk milik seller ini
    const sellerWishlists = []

    for (const buyer of users.filter(u => u.role === 'user')) {
      if (!buyer.wishlist) continue

      for (const productId of buyer.wishlist) {
        const product = products.find(p => p.id === productId && p.sellerId === user.id)
        if (product) {
          sellerWishlists.push({
            buyerName: buyer.username,
            productName: product.name,
            productImage: product.img,
            price: product.price,
          })
        }
      }
    }

    return view.render('seller/seller', {
      seller: user,
      products: sellerProducts,
      wishlists: sellerWishlists,
    })
  }
}