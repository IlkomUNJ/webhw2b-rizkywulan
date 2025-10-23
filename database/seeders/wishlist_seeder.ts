import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'
import Wishlist from '#models/wishlist'

export default class WishlistSeeder extends BaseSeeder {
  public async run() {
    // Hapus semua data wishlist
    await db.from('wishlists').delete()

    // Tambahkan contoh data
    await Wishlist.createMany([
      { userId: 1, itemName: 'Nasi Uduk' },
      { userId: 1, itemName: 'Usus Tumis' },
    ])
  }
}