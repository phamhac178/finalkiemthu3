const express = require('express');
const router = express.Router();
const tieusuController = require('../app/controllers/tieusu.controller');


router.get('/:slug', tieusuController.show);
router.get('/', tieusuController.tieusu);


module.exports = router;