const mongoose = require('mongoose');

const selectedTextSchema = new mongoose.Schema({
    text: String,
    category: String,
    timestamp: { type: Date, default: Date.now },
    url: String,
    screenshot: String,
    summary: { type: String, default: '' },
    tags: { type: [String], default: [] }
});

const SelectedText = mongoose.model('SelectedText', selectedTextSchema);

module.exports = SelectedText;
