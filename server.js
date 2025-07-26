// 1 - require express
const express = require ("express");

// 2 - create instance
const app = express();

// 5 - require dotenv
require("dotenv").config();

// 6 - connectDB
const connectDB = require("./config/connectDB");
connectDB();

// 7 - Routing
// middlewear global
app.use(express.json());

// middlewear routes
app.use("/api/user", require("./routes/user"));



// 3 - create PORT
const PORT = process.env.PORT;

// 4 - create server
app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`Server running on port ${PORT} ..`)
);