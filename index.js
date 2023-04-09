const express = require("express");
const bodyParser = require("body-parser"); // this allows us to take an incoming post requests body
const routes = require("./routes/users.js"); // importing router from user.js

const app = express(); // whole application lies on 'app' variable
const PORT = 3000;

app.use(bodyParser.json()); // this tells that we are using json format data for whole application

app.use("/users", routes); // setting starting path for all routes that is  '/'

// app.get('/', (req, res) => {
//   res.send("Hello From Homepage");
// });

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
