const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Route to save selected text
router.post('/saveText', contentController.saveText);

// Route to get content by category
router.get('/:category', contentController.getContentByCategory);

module.exports = router;
