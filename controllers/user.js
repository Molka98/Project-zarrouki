const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    // req.body =>newUser
    const { name, email, request } = req.body;
    const foundUser = await User.findOne({email});
    if (foundUser) {
      return res.status(400).send({ msg: "Email should be unique try again"});
    }


    // const user
    const newUser = newUser({ name,email, request });
    //save
    await newUser.save();
    res.status(201).send({ message: 'create user SUCC', user: newUser });
  } catch (error) {
    res.status(500).send({ error: 'Error create user', error });
  }
};
