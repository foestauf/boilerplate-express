
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false})


/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.use(function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next()
});

// app.get("/", function(req, res) {
//    res.sendFile(__dirname + '/views/index.html');
// });

// app.use(express.static(__dirname + "/public"));

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */
app.get("/json", (req, res) => {
    res.json({
        message: response()
    });
});

/** 6) Use the .env file to configure the app */
const response = () => {
    let resp = " "
    if (process.env.MESSAGE_STYLE === "uppercase") {
        return resp = "Hello json".toUpperCase();
    } else {
        return resp = "Hello json";
    }
}



/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
},
    (req, res) => {
        res.send({
            time: req.time
        });
    }
);

/** 9)  Get input from client - Route parameters */
app.get("/:word/echo", (req, res) => {
    res.json({
        echo: req.params.word,
    })
})

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.route("/name").get((req, res) => {
    var first = req.query.first;
    var last = req.query.last;
    var jsonObj = { name: first + " " + last };
    res.json(jsonObj);
}).post(urlencodedParser, (req, res) => {
    res.json({ "name": req.body.first + ' ' + req.body.last });
});


/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
