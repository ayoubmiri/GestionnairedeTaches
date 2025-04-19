const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes existantes...
app.get('/api', (req, res) => res.json({ message: "API Works!" }));

module.exports = app; // Important pour Vercel