const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api/tasks', (req, res) => {
  res.json([{ id: 1, title: "Sample Task" }]);
});

// Vercel requires module.exports
module.exports = app;