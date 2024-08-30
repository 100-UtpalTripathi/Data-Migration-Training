const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// API to get name from the JSON file
app.get('/api/name', (req, res) => {
  fs.readFile(path.join(__dirname, 'database.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }
    const nameData = JSON.parse(data);
    res.json({ message: `Hello, ${nameData.name}` });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
