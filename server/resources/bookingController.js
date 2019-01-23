var listing = require('./Listing.js');
var axios = require('axios');
var db = require('../db/index.js').db('listings'); 

exports.retrieveBooking = (req, res) => {
    db.collection('listing').findOne({_id:req.params.id}, (err, results) => {
        res.send(results);
    })
};

