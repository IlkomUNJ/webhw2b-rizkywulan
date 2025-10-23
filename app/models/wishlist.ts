import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Product from './product.js'
export default class Wishlist extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare buyer_id: number

  @column()
  declare product_id: number

  @column()
  declare seller_id: number

  @belongsTo(() => User, { foreignKey: 'buyer_id' })
  declare buyer: BelongsTo<typeof User>

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>
}