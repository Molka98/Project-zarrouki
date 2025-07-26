const { check, validationResult } = require("express-validator");

exports.userValidation = () => [
    check("name", "Name is required !!").not().isEmpty(),
    check("email", "Enter a valid email !!").isEmail(),
    check("request", "request is required !!").not().isEmpty(),
]


exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    next();
};