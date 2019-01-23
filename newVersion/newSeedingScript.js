var {words} = require('./newResources/data.js');
var exec = require('child_process').exec;
var createCsvWriter = require('csv-writer').createObjectCsvWriter;

var csvWriter = createCsvWriter({
    path: './records.csv',
    header: [
        {id: '_id', title: '_id'},
        {id: 'id', title: 'id'},
        {id: 'name', title: 'name'},
        {id: 'capacity', title: 'capacity'},
        {id: 'cleaningFee', title: 'cleaningFee'},
        {id: 'numReviews', title: 'numReviews'},
        {id: 'price', title: 'price'},
        {id: 'availability', title: 'availability'}
    ]
});

var insertAllData = (total, part) => {
    console.time('create');
    var count = 0;
    var batch = (batchsize) => {
        var dataArray = [];
        for (var i = 0; i < batchsize; i++) {
            var newListing = {};
            newListing.id = i + count;
            newListing._id = i + count;
            var index1 = Math.floor(Math.random() * 100);
            var index2 = Math.floor(Math.random() * 100);
            var index3 = Math.floor(Math.random() * 100);
            newListing.name = words[index1] + ' ' + words[index2] + ' ' + words[index3];
            newListing.capacity = Math.ceil(Math.random() * 20);
            newListing.cleaningFee = 50 + Math.floor(Math.random() * 151);
            newListing.numReviews = 5 + Math.floor(Math.random() * 196);
            newListing.price = Math.ceil(Math.random() * 5000);
            var availabilityString = '';
            for (var j = 0; j < Math.random() * 40; j++) {
                availabilityString += (45 + Math.ceil(Math.random() * 90));
                availabilityString += '-';
            }
            newListing.availability = availabilityString;
            dataArray.push(newListing);
        }
        count += batchsize;
        return dataArray;
    }

    var adder = (amount) => {
        var records = batch(amount);
        csvWriter.writeRecords(records)
            .then(() => {
            if (count < total) {
                adder(amount)
            } else {
                console.timeEnd('create');
                console.time('uploaded');
                // adding a possible way to upload from seeding file too
                var command = 'mongoimport -d listings -c listing --type csv --file records.csv --headerline'
                exec(command, {maxBuffer: 1024 * 1024 * 500}, (err, stdout, stderr) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.timeEnd('uploaded');
                    }
                })
            }
        });
    }

    adder(part);
}

insertAllData(10000000, 100000);