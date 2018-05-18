const express = require("express");
const neo4j = require("neo4j-driver").v1;
const driver = neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "flashcube")
);
const session = driver.session();

exports.getAllTopics = (req, res, next) => {
  const session = driver.session();
  const getAllUsersPromise = session.run(
    "MATCH (topic:Topic) RETURN topic AS AllTopics",
    {}
  );
  getAllTopicsPromise
    .then(result => {
      session.close();
      console.log(result);
      res.send({ result });
      driver.close();
    })
    .catch(next);
};

exports.getTopic = (req, res, next) => {
  const session = driver.session();
  const getTopicPromise = session.run(
    "MATCH (topic:Topic{title:$title}) RETURN topic",
    {
      firebaseId: req.params.title
    }
  );
  getTopicPromise
    .then(result => {
      session.close();
      console.log(result);
      res.send({ result });
      driver.close();
    })
    .catch(next);
};
