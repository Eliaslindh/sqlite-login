const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './database.db'
    }
    , useNullAsDefault: true
})

exports.db = knex
