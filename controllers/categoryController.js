const Category = require('../models/Category');

// Add a new category
exports.addCategory = async (req, res) => {
    const { userId, newCategory } = req.body;
    try {
        const newCategoryInput = new Category({ userId, category: newCategory });
        await newCategoryInput.save();
        res.status(200).json({ message: 'Category added successfully', category: newCategory });
    } catch (error) {
        res.status(500).json({ error: 'Error saving category' });
    }
};

// Get categories for a user
exports.getCategories = async (req, res) => {
    const { userId } = req.params;
    try {
        const categories = await Category.find({ userId });
        console.log('Fetched Categories:', categories);
        if (categories.length > 0) {
            res.status(200).json({ categories });
        } else {
            res.status(404).json({ message: 'No categories found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving categories' });
    }
};
