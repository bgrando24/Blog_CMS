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
    origin: 'http://localhost:3000',    // Will need to change when in production
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

// testing post
app.post('/test-post', async (req, res) => {
    try {

        const {title, example} = req.body;  // destructuring to extract object properties
        console.log(`POST received: Title: ${title}, Example: ${example}`);
        res.json({status: "ok"});

    } catch (e) {
        console.error(e.message);
    }
    
});










// #######################################################################
                   // blog_posts TABLE ROUTES SECTION //
// #######################################################################

// display all posts
app.get("/blog-posts", async (req, res) => {
    try {

        const allPosts = await pool.query(`SELECT * FROM blog_posts`);
        res.json(allPosts.rows);
        console.log("All posts queried");

    } catch (e) {
        console.error(e.message);
    }
});


// Post a new article to the database
app.post('/new-article', async (req, res) => {
    try {

        const {title, content, snippet, author, publish_date} = req.body;  // destructuring to extract object properties
        //console.log(`${title}, ${content}, ${snippet}, ${author}, ${publish_date}`);

        const newArticle = await pool.query(`INSERT INTO blog_posts (title, content, snippet, author, publish_date) VALUES ('${title}', '${content}', '${snippet}', '${author}', '${publish_date}')`);

        res.json({status: "ok"});

    } catch (e) {
        console.error(e.message);
    }
    
});


// get's an article by it's ID
app.post('/article/:id', async (req, res) => {
    try {

        const articleQuery = await pool.query(`SELECT * FROM blog_posts WHERE id = '${req.params.id}'`);
        res.json(articleQuery.rows[0]); //send the result back

    } catch (e) {
        console.error(e.message);
    }
});



// launching the server -> apparently 5000 is in use by MacOS Monterey now
app.listen(5001, () => {
    console.log("Server running on port 5001");
});