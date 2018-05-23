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
      res.status(200).send({ result });
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
      res.status(200).send({ result });
      driver.close();
    })
    .catch(next);
};

exports.getUserTopics = (req, res, next) => {
  const session = driver.session();
  const getUserTopicsPromise = session.run(
    "MATCH (user:User{uid:$uid})-[:IS_STUDYING]->(topic:Topic) RETURN user, topic",
    {
      uid: req.params.uid
    }
  );
  getUserTopicsPromise
    .then(result => {
      session.close();
      console.log(result);
      res.status(200).send({ result });
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
      res.status(201).send({
        result,
        msg:
          "201: IS_STUDYING relationship added between specified user and topic"
      });
      driver.close();
    })
    .catch(next);
};

exports.addUserFavouriteTopic = (req, res, next) => {
  const session = driver.session();
  const addUserFavouriteTopicPromise = session.run(
    "MATCH (user:User{uid:$uid})-[rel:IS_STUDYING]->(topic:Topic{title:$topicTitle}) SET rel.fave = true RETURN user, rel.fave, topic",
    {
      uid: req.params.uid,
      topicTitle: req.params.topicTitle
    }
  );
  addUserFavouriteTopicPromise
    .then(result => {
      session.close();
      console.log(result);
      res.status(201).send({
        result,
        msg:
          "201: fave=true property added to IS_STUDYING relationship between specified user and topic"
      });
      driver.close();
    })
    .catch(next);
};

exports.delUserFavouriteTopic = (req, res, next) => {
  const session = driver.session();
  const delUserFavouriteTopicPromise = session.run(
    "MATCH (user:User{uid:$uid})-[rel:IS_STUDYING]->(topic:Topic{title:$topicTitle}) REMOVE rel.fave RETURN user, rel.fave, topic",
    {
      uid: req.params.uid,
      topicTitle: req.params.topicTitle
    }
  );
  delUserFavouriteTopicPromise
    .then(result => {
      session.close();
      console.log(result);
      res.status(204).send({
        result,
        msg:
          "204: fave=true property deleted from IS_STUDYING relationship between specified user and topic"
      });
      driver.close();
    })
    .catch(next);
};

exports.addTopic = (req, res, next) => {
  const session = driver.session();
  const addTopicPromise = session.run(
    "MATCH (user:User{uid:$uid}) CREATE (topic:Topic{title:$title, language:$language, topicImageUrl:$topicImageUrl}), (topic)-[rel:CREATED_BY{type:'made'}]->(user)  RETURN topic, rel.type, user",
    {
      uid: req.body.uid,
      title: req.body.title,
      language: req.body.language,
      topicImageUrl: req.body.topicImageUrl
    }
  );
  addTopicPromise
    .then(result => {
      session.close();
      console.log(result);
      res.status(201).send({
        result,
        msg:
          "201: topic added with CREATED_BY relationship between user and topic"
      });
      driver.close();
    })
    .catch(next);
};
