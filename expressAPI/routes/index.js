'use strict'; 
const { Router } = require('express');
const router = Router();

router.use(require('./movies'));
router.use(require('./directors'));

module.exports = router;