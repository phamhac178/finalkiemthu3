const express = require('express');
const tieusuRouter = require('./tieusu.router')
const siteRouter = require('./site.router')

function route(app) {

    app.use('/tieusu', tieusuRouter);
    app.use('/', siteRouter);
   
}

module.exports = route;