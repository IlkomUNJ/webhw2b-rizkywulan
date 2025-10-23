interface User {
    id: number
    username: string
    password: string
    role: 'user' | 'seller'
    wishlist?: number[]
    products?: number[]
}

export const users: User[] = [
    { id: 1,
        username: 'user123',
        password: '123',
        role: 'user',
        wishlist: [14, 15]
    },
    { id: 2,
        username: 'seller456',
        password: '456',
        role: 'seller',
        products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        wishlist: []
     },
]

export const products = [
    {id: 1, name: 'Nasi Uduk', sellerId: 2, price: 8000, img: '/image/nuduk.jpg'},
    {id: 2, name: 'Nasi Ulam', sellerId: 2, price: 8000, img: '/image/nulam.jpg'}, 
    {id: 3, name: 'Nasi Kuning', sellerId: 2, price: 8000, img: '/image/nakun.jpg'},
    {id: 4, name: 'Tempe Orek', sellerId: 2, price: 2000, img: '/image/orekm.jpg'},
    {id: 5, name: 'Tempe Orek Pedas', sellerId: 2, price: 2000, img: '/image/orekp.jpg'},
    {id: 6, name: 'Bihun', sellerId: 2, price: 2000, img: '/image/bihun.jpg'},
    {id: 7, name: 'Mie', sellerId: 2, price: 2000, img: '/image/mie.jpg'},
    {id: 8, name: 'Perkedel', sellerId: 2, price: 5000, img: '/image/perkedel.jpg'},
    {id: 9, name: 'Ikan Pindang Balado', sellerId: 2, price: 6000, img: '/image/pindang.jpg'},
    {id: 10, name: 'Telur Bulat Balado', sellerId: 2, price: 5000, img: '/image/telurb.jpg'},
    {id: 11, name: 'Telur Ceplok Balado', sellerId: 2, price: 5000, img: '/image/ceploksambal.jpg'},
    {id: 12, name: 'Telur Semur', sellerId: 2, price: 5000, img: '/image/telurs.jpg'},
    {id: 13, name: 'Telur Dadar', sellerId: 2, price: 5000, img: '/image/dadar.jpg'},
    {id: 14, name: 'Kentang Balado', sellerId: 2, price: 4000, img: '/image/kentang.jpg'},
    {id: 15, name: 'Usus Tumis', sellerId: 2, price: 4000, img: '/image/usus.jpg'},
    {id: 16, name: 'Kikil Tumis', sellerId: 2, price: 4000, img: '/image/kikil.jpg'},
    {id: 17, name: 'Tahu Semur', sellerId: 2, price: 4000, img: '/image/tahus.jpg'},
    {id: 18, name: 'Bakwan', sellerId: 2, price: 4000, img: '/image/bakwan.jpg'},
    {id: 19, name: 'Tahu Isi', sellerId: 2, price: 4000, img: '/image/tahuisi.jpg'},
    {id: 20, name: 'Tempe Goreng', sellerId: 2, price: 4000, img: '/image/tgoreng.jpg'},
]