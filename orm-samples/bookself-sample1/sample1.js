var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'localhost',
    user     : 'postgres',
    password : 'test123',
    database : 'testdb',
    port     : 5432
  }
});

var bookshelf = require('bookshelf')(knex);

var products = bookshelf.Model.extend({
  tableName: 'products'
});

products.fetchAll().then(function (product) {
  console.log(product.toJSON());
})