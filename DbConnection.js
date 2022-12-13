const Pool = require('pg').Pool;
const pool = new Pool({
    user: "db_admin",
    password: "adminpassword24",
    host: "portfolio-db.cpmngpjcp6jf.us-west-2.rds.amazonaws.com",
    port: 5432,
    database: "initial_portfolio_db"
});

module.exports = pool;



/*
    table name: blog_posts
        id SERIAL,
        title TEXT,
        content TEXT,
        snippet VARCHAR(200),
        author VARCHAR(200),
        publish_date DATE
*/