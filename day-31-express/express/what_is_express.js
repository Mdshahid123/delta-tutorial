//What is Express?

// Express is a web application framework for Node.js, designed for building web applications and APIs.
// It is lightweight and provides numerous HTTP utility methods and middleware.

//2. Setting Up an Express Application

//Installation:
//npm install express


//Basic Setup:
//javascript code
const express = require('express');
const app=express();
//console.log(typeof express.application)
//console.log('Type of express:', typeof express); // should print 'function'
//console.log('Type of express():', typeof app); // should print 'function'
 const port = 3000;

 app.get('/', (req, res) => {
 res.send('Hello World!');
 });

 app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
 });