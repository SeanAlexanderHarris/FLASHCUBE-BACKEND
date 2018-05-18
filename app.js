const express = require("express");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");
// not sure if the neo4j driver needs to be at this level
const neo4j = require("neo4j-driver").v1;
const driver = neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "flashcube")
);

const app = express();
const session = driver.session();

console.log("APP.JS CALLED");

app.use(bodyParser.json());

app.use("/api", apiRouter);

// Error Handling
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send({ msg: "development - only error handle" });
  }
});

module.exports = app;
