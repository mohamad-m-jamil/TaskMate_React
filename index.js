import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/hi", (req, res) => {
  res.send("hi");
});

app.get("/name", (req, res) => {
    res.send("may name  is jamil");
});

app.listen(3000, () => {
  console.log("I am listening in  prot 3000!");
});
