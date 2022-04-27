
/*
  falta ANON_KEY e HOST do banco de dados para usar o supabase
*/

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'db.quggvbapbzbfzguffpqt.supabase.co',
      port : 6543,
      user : 'postgres',
      password : 'equipe7provihack',
      database : 'postgres'
    }
  });


module.exports = knex