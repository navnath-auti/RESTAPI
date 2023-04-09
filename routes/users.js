const express = require("express"); // 1

const router = express.Router(); // 2

const users = [
  {
    Firsname: "John",
    Lastname: "Doe",
    age: 25,
  },
  { Firsname: "John", Lastname: "Doe", age: 24 },
];

router.get("/", (req, res) => {
  // console.log(users);
  res.send(users);
});

// browser can make only get request thats why we need software like postman to test our API

router.post("/", (req, res) => {
  // when we are working on post request we req.body, this req.body contain clients request body
  // console.log(req.body);
  const user = req.body;
  users.push(user);

  res.send(`User with the name ${user.Firsname} added to the database!`);
});

module.exports = router; // 3
