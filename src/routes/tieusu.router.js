const express = require('express');
const router = express.Router();
const tieusuController = require('../app/controllers/tieusu.controller')

router.use('/:slug', tieusuController.show)

// Tuyến đường cuối cùng
router.use('/', tieusuController.index)

module.exports = router;