const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  ssl: { rejectUnauthorized: false }
})

module.exports = knex;