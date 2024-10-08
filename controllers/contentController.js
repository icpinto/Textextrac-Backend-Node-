const SelectedText = require('../models/SelectedText');
const { sendMessageToQueue } = require('../services/rabbitMQService');

// Save selected text
exports.saveText = async (req, res) => {
    const { text, category, url, screenshot } = req.body;
    const newText = new SelectedText({ text, category, url, screenshot });
    
    try {
        await newText.save();
        sendMessageToQueue('text_processing_queue', { id: newText._id, text });
        res.status(200).send('Text saved successfully');
    } catch (error) {
        res.status(500).send('Error saving text');
    }
};

// Get content by category
exports.getContentByCategory = async (req, res) => {
    const { category } = req.params;
    
    try {
        const content = await SelectedText.find({ category });
        if (content.length > 0) {
            res.status(200).json({ content });
        } else {
            res.status(404).json({ message: 'No content found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving content' });
    }
};
