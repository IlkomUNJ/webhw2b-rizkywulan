import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.float('price')
      table.string('image')
      table.integer('seller_id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}