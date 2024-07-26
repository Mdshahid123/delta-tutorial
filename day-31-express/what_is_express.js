//What is Express?

// Express is a web application framework for Node.js, designed for building web applications and APIs.
// It is lightweight and provides numerous HTTP utility methods and middleware.

//2. Setting Up an Express Application

//Installation:
//npm install express


//Basic Setup:
//javascript code
const express = require('express');
console.log(express);
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});