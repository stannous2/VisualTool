// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
const app = express();

// sets an initial port for server to listen on
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Set public folder as root
// app.use(express.static('public'));
app.use(express.static(__dirname + "public"));

// Allow front-end access to node_modules folder
// const router = require('./public/scripts/scripts.js')
// app.use('/', router)
// app.use('/scripts', express.static(`${__dirname}/node_modules/`));

app.use(express.static(__dirname + '/public'))
//setup routes
// require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listen for HTTP requests on port 8080
app.listen(PORT, function (err) {
    if (err) throw err;
    console.log(`You're now running a server on port ${PORT}`)
})