// Update with your config settings.
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME
    }
  }
};