import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
    { name: 'Nasi Uduk', price: 8000, image: '/image/nuduk.jpg', seller_id: 2 },
    { name: 'Nasi Ulam', price: 8000, image: '/image/nulam.jpg', seller_id: 2 }, 
    { name: 'Nasi Kuning', price: 8000, image: '/image/nakun.jpg', seller_id: 2 },
    { name: 'Tempe Orek', price: 2000, image: '/image/orekm.jpg', seller_id: 2 },
    { name: 'Tempe Orek Pedas', price: 2000, image: '/image/orekp.jpg', seller_id: 2 },
    { name: 'Bihun', price: 2000, image: '/image/bihun.jpg', seller_id: 2 },
    { name: 'Mie', price: 2000, image: '/image/mie.jpg', seller_id: 2 },
    { name: 'Perkedel', price: 5000, image: '/image/perkedel.jpg', seller_id: 2 },
    { name: 'Ikan Pindang Balado', price: 6000, image: '/image/pindang.jpg', seller_id: 2 },
    { name: 'Telur Bulat Balado', price: 5000, image: '/image/telurb.jpg', seller_id: 2 },
    { name: 'Telur Ceplok Balado', price: 5000, image: '/image/ceploksambal.jpg', seller_id: 2 },
    { name: 'Telur Semur', price: 5000, image: '/image/telurs.jpg', seller_id: 2 },
    { name: 'Telur Dadar', price: 5000, image: '/image/dadar.jpg', seller_id: 2 },
    { name: 'Kentang Balado', price: 4000, image: '/image/kentang.jpg', seller_id: 2 },
    { name: 'Usus Tumis', price: 4000, image: '/image/usus.jpg', seller_id: 2 },
    { name: 'Kikil Tumis', price: 4000, image: '/image/kikil.jpg', seller_id: 2 },
    { name: 'Tahu Semur', price: 4000, image: '/image/tahus.jpg', seller_id: 2 },
    { name: 'Bakwan', price: 4000, image: '/image/bakwan.jpg', seller_id: 2 },
    { name: 'Tahu Isi', price: 4000, image: '/image/tahuisi.jpg', seller_id: 2 },
    { name: 'Tempe Goreng', price: 4000, image: '/image/tgoreng.jpg', seller_id: 2 },
    ])
  }
}