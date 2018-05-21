const express = require("express");
const neo4j = require("neo4j-driver").v1;
// const driver = neo4j.driver(
//   "bolt://localhost",
//   neo4j.auth.basic("neo4j", "flashcube")
// );
// const { driver } = require("../app");
const { session } = require("../app");
// = driver.session();

exports.getAllUsers = (req, res, next) => {
  // const session = driver.session();
  const getAllUsersPromise = session.run(
    "MATCH (user:User) RETURN user AS AllUsers",
    {}
  );
  getAllUsersPromise
    .then(result => {
      session.close();
      console.log(result);
      res.send({ result });
      driver.close();
    })
    .catch(next);
};

exports.getUser = (req, res, next) => {
  const session = driver.session();
  const getUserPromise = session.run(
    "MATCH (user:User{firebaseId:$firebaseId}) RETURN user",
    {
      firebaseId: req.params.id
    }
  );
  getUserPromise
    .then(result => {
      session.close();
      console.log(result);
      res.send({ result });
      driver.close();
    })
    .catch(next);
};
