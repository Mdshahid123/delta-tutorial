//understanig a routs or routing
//https://chatgpt.com/share/caf99819-f8db-4aea-acc0-f8f836288930

const express = require('express');
const app = express();

// Define a route for GET requests to the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for GET requests to the '/about' URL
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Define a route for POST requests to the '/submit' URL
app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});

// Define a route for PUT requests to the '/update' URL
app.put('/update', (req, res) => {
  res.send('Update Successful');
});

// Define a route for DELETE requests to the '/delete' URL
app.delete('/delete', (req, res) => {
  res.send('Delete Successful');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
