var Listings = require('../../server/resources/Listing');
var axios = require('axios');
// var db = require('../../server/db/index.js');

// var mongoTester = (num) => {
//     console.time('finished');
//     var count = 0;
//     for (var i = 0; i < num; i++) {
//         var randomId = Math.floor(Math.random() * 10000000);
//         Listings.find({_id:randomId}, (err, results) => {
//             count++;
//             if (count === num) {
//                 console.timeEnd('finished');
//             } 
//         })
//     }
// }

// mongoTester(10000);

var client = require('../../newVersion/sqldb/index.js')

var pgTester = (num) => {
    console.time('finished');
    var count = 0;
    for (var i = 0; i < num; i++) {
        var randomId = Math.floor(Math.random() * 10000000);
        var query = {
            name: 'fetch-listing' + randomId,
            text: 'SELECT * FROM listingtable WHERE id = $1',
            values: [randomId]
          }
          client.query(query)
            .then(response => {
                count++
                if (count === num) {
                    console.timeEnd('finished')
                    console.log(response.rows)
                }
            })
            .catch(e => console.error(e.stack))
    }
}

pgTester(10000);