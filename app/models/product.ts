// app/models/product.ts
import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare price: number

  @column()
  declare image: string

  @column({ columnName: 'seller_id' })
  declare sellerId: number

  @belongsTo(() => User, {
    foreignKey: 'sellerId',
  })
  declare seller: BelongsTo<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'wishlists',
    pivotForeignKey: 'product_id',
    pivotRelatedForeignKey: 'user_id',
  })
  declare wishlistedBy: ManyToMany<typeof User>
}