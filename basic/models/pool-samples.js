const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: 'test123',
  port: 5432,
});

pool.connect()
.then(client => {
  return client.query('SELECT * FROM products', [])
    .then(res => {
      client.release()
      console.log(res.rows)
    })
    .catch(e => {
      client.release()
      console.log(err.stack)
    })
})

(async () => {
  
    const { rows } = await pool.query('SELECT * FROM products', [])
    console.log('products:', rows[1])
  
  })().catch(e => setImmediate(() => { throw e }))