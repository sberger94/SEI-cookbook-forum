const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');

router.post('/recipes/:id/reviews', reviewsController.create);

module.exports = router;