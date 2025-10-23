import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import db from '@adonisjs/lucid/services/db'
import hash from '@adonisjs/core/services/hash'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // Hapus semua user lama
    await db.from('users').delete()

    // Tambahkan user baru
    await User.createMany([
      {
        username: 'fikri',
        password: await hash.make('password123'), // ✅ gunakan hash.make
        role: 'buyer',
      },
      {
        username: 'seller1',
        password: await hash.make('password123'),
        role: 'seller',
      },
    ])
  }
}