const express = require("express");
const neo4j = require("neo4j-driver").v1;

const {
  GRAPHENEDB_BOLT_PASSWORD,
  GRAPHENEDB_BOLT_URL,
  GRAPHENEDB_BOLT_USER,
  GRAPHENEDB_URL
} = process.env.GRAPHENEDB_URL ? process.env : require("../config/");

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
      res.status(200).send({ result });
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
      res.status(200).send({ result });
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
      res.status(200).send({ result });
      driver.close();
    })
    .catch(next);
};

exports.addUserStudyingTerm = (req, res, next) => {
  const session = driver.session();
  const addUserStudyingTermPromise = session.run(
    "MATCH (user:User{uid:$uid}), (term:Term{definition:$termDefinition}) CREATE (user)-[rel:IS_STUDYING]->(term) RETURN user, rel, term",
    {
      uid: req.params.uid,
      termDefinition: req.params.termDefinition
    }
  );
  addUserStudyingTermPromise
    .then(result => {
      session.close();
      console.log(result);
      res.status(200).send({ result });
      driver.close();
    })
    .catch(next);
};

exports.getOneTerm = (req, res, next) => {
  const session = driver.session();
  const getOneTermPromise = session.run(
    "MATCH (term:Term{termDefinition:$termDefinition}) RETURN term",
    {
      termDefinition: req.params.termDefinition
    }
  );
  getOneTermPromise
    .then(result => {
      session.close();
      console.log(result);
      res.status(200).send({ result });
      driver.close();
    })
    .catch(next);
};

exports.addTerm = (req, res, next) => {
  const session = driver.session();
  const addTermPromise = session.run(
    "MATCH (topic:Topic{title:$belongs_to}) CREATE (term:Term{term:$term, definition:$definition, belongs_to:$belongs_to})-[rel:BELONGS_TO]->(topic)",
    {
      term: req.body.term,
      definition: req.body.definition,
      belongs_to: req.body.belongs_to
    }
  );
  addTermPromise
    .then(result => {
      session.close();
      console.log(result);
      res
        .status(201)
        .send({ result, msg: "201: term added to specified topic" });
      driver.close();
    })
    .catch(next);
};
