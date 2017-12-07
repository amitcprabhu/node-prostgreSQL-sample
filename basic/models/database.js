const { Pool, Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: 'test123',
  port: 5432,
})
client.connect()

// client.query('SELECT * from products', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// promise
const text = 'INSERT INTO public.products(  product_no, name, price)VALUES ($1, $2, $3);'
const values = [3, 'mobile',100]
client.query(text, values)
.then(res => {
  console.log(res.rows[0])
  // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
})
.catch(e => console.error(e.stack));

const query = {
  // give the query a unique name
  name: 'fetch-user',
  text: 'SELECT * FROM products',
  values: ''
}

// callback
client.query(query, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
  }
})

// promise
client.query(query)
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))