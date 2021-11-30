const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();
const port = 3000;
const route = require('./routes')


//HTTP logger
app.use(morgan('combined'))

//Teamplate engine
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', 'ejs');


//chạy routes
route(app)




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})