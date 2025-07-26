// 1 - require express
const express = require("express");



const { createUser } = require("../controllers/user");
const { userValidation, validation } = require("../midlleware/validation");




// 2 - const router
const router = express.Router();


// route user
router.post("/users", userValidation(), validation, createUser);



// 3 - export
module.exports = router;
