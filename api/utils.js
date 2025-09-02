require('dotenv').config()

const knex = require('knex')( require('./knexfile')[process.env.NODE_ENV])

function getter(table) {
  return knex(table)
  .select()
  .from(table)
}

module.exports = {
  getter: getter
}