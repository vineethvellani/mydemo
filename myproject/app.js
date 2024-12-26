// Import express
const express = require('express');

// Create an Express app
const app = express();

// Define a route to respond to requests
app.get('/', (req, res) => {
  res.send('<h1>Happy New Year! 🎉 Wishing you a prosperous and successful year ahead!</h1>');
});

// Set the port the server will listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

