// app/models/stock.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our stock model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Stocks', {
    stockList : [ {name: String } ]
});