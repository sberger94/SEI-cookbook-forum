const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

router.get('/', recipesController.index);
router.get('/new', recipesController.new);
router.get('/:id', recipesController.show);
router.post('/', recipesController.create);

module.exports = router;