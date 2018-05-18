const express = require("express");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");
const neo4j = require("neo4j-driver").v1;
const {
  GRAPHENEDB_BOLT_PASSWORD,
  GRAPHENEDB_BOLT_URL,
  GRAPHENEDB_BOLT_USER,
  DB_URL
} = require("./config/");
const driver = neo4j.driver(
  GRAPHENEDB_BOLT_URL,
  neo4j.auth.basic(GRAPHENEDB_BOLT_USER, GRAPHENEDB_BOLT_PASSWORD)
);
const app = express();
consolelog("1");
const session = driver.session();
consolelog("2");
app.use(bodyParser.json());
consolelog("3");
app.use("/api", apiRouter);

// Error Handling
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send({ msg: "development - only error handle" });
  }
});

module.exports = app;
