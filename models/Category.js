const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    userId: String,
    category: String
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
