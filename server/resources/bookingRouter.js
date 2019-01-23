var bookingRouter = require('express').Router();
var bookingController = require('./bookingController');



bookingRouter.route('/api/booking/:id')
    .get(bookingController.retrieveBooking)

module.exports = bookingRouter;
