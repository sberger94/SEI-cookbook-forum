const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

router.get('/', recipesController.index);
router.get('/new', isLoggedIn,recipesController.new);
router.get('/:id', recipesController.show);
router.post('/', recipesController.create);
router.delete('/:id', isLoggedIn, recipesController.delete);

module.exports = router;