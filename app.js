// Load the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
