// app/routes.js

// grab the nerd model we just created
var Stock = require('./models/stock');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.post('/api/stocks', function(req,res) {
        var stock = new Stock();
        stock.name = req.body.name;

        stock.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Stock created succesfully'})
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