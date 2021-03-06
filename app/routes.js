// app/routes.js

// grab the stock model we just created
var Stocks = require('./models/stocks');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.get('/api/stocks', function(req,res) {
        Stocks.find(function(err,stocks) {
            if (err)
                res.send(err);

            res.json(stocks);
        });
    });

    app.post('/api/stocks', function(req,res) {
        var stocks =  new Stocks({stockList : req.body});
        stocks.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Stock created succesfully'});
        });
    });

    app.delete('/api/stocks', function(req,res) {
        Stocks.find().remove(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Stock deleted succesfully'});
        });
    });

    app.put('/api/stocks', function(req,res) {
        Stocks.find().update({stockList :req.body},function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Stock updated succesfully'})
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};