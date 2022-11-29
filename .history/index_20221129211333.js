const express = require("express");
require("dotenv").config()
const session = require("express-session");
const morgan = require("morgan");
const cookie = require("cookie");
const path = require("path");
const app = express();
const port = 3000;
const route = require("./src/routes");
const db = require("./src/config/db");

// connect to db
db.connect();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'))

//Teamplate engine
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "resources", "views"));
app.set("view engine", "ejs");

//session
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    })
);

//chạy routes
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
