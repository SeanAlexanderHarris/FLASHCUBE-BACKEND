const express = require("express");
const neo4j = require("neo4j-driver").v1;
const driver = neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "flashcube")
);
const session = driver.session();

exports.getAllTerms = (req, res, next) => {
  const session = driver.session();
  const getAllTermsPromise = session.run(
    "MATCH (term:Term) RETURN term AS AllTerms",
    {}
  );
  getAllTermsPromise
    .then(result => {
      session.close();
      console.log(result);
      res.send({ result });
      driver.close();
    })
    .catch(next);
};
