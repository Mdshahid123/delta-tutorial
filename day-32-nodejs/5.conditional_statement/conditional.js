const express = require("express");
const path = require("path");
const app = express();
const port = 7000;

// Set EJS as the view engine and specify the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route handler for /diceroll
app.get("/diceroll", (req, res) => {
    // Generate a random dice value between 1 and 6
    let diceValue = Math.floor(Math.random() * 6) + 1;
    
    // Render the 'dice' template and pass the diceValue as data
    res.render("dice", { diceValue });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
