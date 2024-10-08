const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Route to add a new category
router.post('/add', categoryController.addCategory);

// Route to get all categories for a specific user
router.get('/:userId', categoryController.getCategories);

module.exports = router;
