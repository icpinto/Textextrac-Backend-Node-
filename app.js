const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./config/db'); // DB Connection
const categoryRoutes = require('./routes/categoryRoutes');
const contentRoutes = require('./routes/contentRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/content', contentRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
