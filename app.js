const express = require("express");
const app = express();
const path = require("path");

const PORT =
  process.env.PORT ||
  (3000, () => console.log("levantando servidor con express"));

app.listen(PORT);

app.use(express.static(path.join(__dirname, "public")));

//localhost:3000/
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
