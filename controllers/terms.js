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

exports.getAllTerms = (req, res, next) => {
  const session = driver.session();
  const getAllTermsPromise = session.run(
    "MATCH (allTerms:Term) RETURN allTerms",
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

exports.getTermsByTopic = (req, res, next) => {
  const session = driver.session();
  const getTermsByTopicPromise = session.run(
    "MATCH (term:Term)-[:BELONGS_TO]->(topic:Topic{title:$topicTitle}) RETURN term",
    {
      topicTitle: req.params.topicTitle
    }
  );
  getTermsByTopicPromise
    .then(result => {
      session.close();
      console.log(result);
      res.send({ result });
      driver.close();
    })
    .catch(next);
};

exports.getUserTerms = (req, res, next) => {
  const session = driver.session();
  const getUserTermsPromise = session.run(
    "MATCH (user:User{uid:$uid})-[:IS_STUDYING]->(term:Term) RETURN term",
    {
      uid: req.params.uid
    }
  );
  getUserTermsPromise
    .then(result => {
      session.close();
      console.log(result);
      res.send({ result });
      driver.close();
    })
    .catch(next);
};
