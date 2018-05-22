const express = require("express");
const neo4j = require("neo4j-driver").v1;
// const driver = neo4j.driver(
//   "bolt://localhost",
//   neo4j.auth.basic("neo4j", "flashcube")
// );
const {
  GRAPHENEDB_BOLT_PASSWORD,
  GRAPHENEDB_BOLT_URL,
  GRAPHENEDB_BOLT_USER,
  GRAPHENEDB_URL
} = process.env.GRAPHENEDB_URL ? process.env : require("./config/");

const driver = neo4j.driver(
  GRAPHENEDB_BOLT_URL,
  neo4j.auth.basic(GRAPHENEDB_BOLT_USER, GRAPHENEDB_BOLT_PASSWORD)
);

exports.getAllTopics = (req, res, next) => {
  const session = driver.session();
  const getAllTopicsPromise = session.run(
    "MATCH (allTopics:Topic) RETURN DISTINCT allTopics",
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
      title: req.params.title
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

exports.getUserTopics = (req, res, next) => {
  const session = driver.session();
  const getUserTopicsPromise = session.run(
    "MATCH (user:User{uid:$uid}-[:IS_STUDYING]->(topic:Topic) RETURN user, topic",
    {
      uid: req.params.uid
    }
  );
  getUserTopicsPromise
    .then(result => {
      session.close();
      console.log(result);
      res.send({ result });
      driver.close();
    })
    .catch(next);
};

exports.addUserStudyingTopic = (req, res, next) => {
  const session = driver.session();
  const addUserStudyingTopicPromise = session.run(
    "MATCH (user:User{uid:$uid}), (topic:Topic{title:$topicTitle}) CREATE (user)-[rel:IS_STUDYING]->(topic) RETURN user, rel, topic",
    {
      uid: req.params.uid,
      topicTitle: req.params.topicTitle
    }
  );
  addUserStudyingTopicPromise
    .then(result => {
      session.close();
      console.log(result);
      res.send({ result });
      driver.close();
    })
    .catch(next);
};
