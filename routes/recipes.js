const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

router.get('/', recipesController.index)



module.exports = router