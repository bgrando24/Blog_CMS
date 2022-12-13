const express = require("express");
const app = express();  // express initialisation
const cors = require("cors");
const pool = require("./DbConnection");


// authenitcation with passport -> https://www.youtube.com/watch?v=IUw_TgRhTBE
const cookieParser = require('cookie-parser'); //For parsing cookies we use for session
const bcrypt = require('bcryptjs'); //hashes the user passwords
const expressSession = require('express-session'); //sessions for persistant login
const bodyParser = require('body-parser');

// Anytime we're building fullstack, we need to get data from client side
    // To get this data, we use the req.body object
    app.use(express.json());    //this gives us access to req.body and the json data




// #######################################################################
                        // MIDDLEWARE SECTION //
// #######################################################################
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "PUT", "POST", "DELETE", "HEAD", "OPTIONS"],
    credentials: true
}));

// middleware specific to passport auth
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const tenSec = 1000 * 10;
const fiveMin = 1000 * 60 * 5;

// session
app.use(expressSession({
    secret: "secretcode",   //TEMPORARY
    resave: false,
    saveUninitialized: true,
    cookie: {httpOnly: true, secure: false, maxAge: fiveMin}
}));

app.use(cookieParser("secretcode"));    //note same 'secret' value found in express session



// USING EXPRESS SESSION ARTICLE
// https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/




// #######################################################################
                        // TESTING ROUTES SECTION //
// #######################################################################

 // tracking server requests
app.use((req, res, next) => {
    console.log("Server pinged");
    next();
});   

app.get('/', (req, res) => {
    res.json({status: "ok", message: "Hello world!"});
});

app.get('/home-test', (req, res) => {
    res.json({ status: "ok", message: "Server connected"});
});





// launching the server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});