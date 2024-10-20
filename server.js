// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to receive location data from frontend
app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received location: Latitude = ${latitude}, Longitude = ${longitude}`);
    // Send a response back to the frontend
    res.json({ message: 'Location received', latitude, longitude });
});

// Start the server on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
