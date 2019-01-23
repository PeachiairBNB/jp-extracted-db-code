var {Client, Pool} = require('pg');

const pgClient = new Client({
    user: '',
    host: 'localhost',
    database: 'listings',
    password: '',
    port: 5432,
  })

// var connectionString = process.env.POSTGRES = 'postgres://userName:/password:/localhost:5432/listings';

pgClient.connect();

pgClient.insert = (params) => {
    var queryStr =
      "INSERT INTO listingTable(id, name, capacity, cleaningFee, numReviews, price, availability, _id) VALUES($1, $2, $3, $4, $5, $6, $7, $8)";
      pgClient.query(queryStr, params)
      .then(res => {
        
        // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
      })
      .catch(e => console.error(e.stack))
};

module.exports = pgClient;