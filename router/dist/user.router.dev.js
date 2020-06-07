"use strict";

var express = require('express');

var controller = require('../controllers/user.controller');

var router = express.Router();
router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/create', controller.postCreate);
router.get('/:id', controller.get);
router.get('/search', controller.search);
module.exports = router;