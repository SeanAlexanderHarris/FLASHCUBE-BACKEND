const neo4j = require("neo4j-driver").v1;
const delData = require("../seed/deleteTestDataString");
// const seedData = require("./seedDevDataString");
const updatedSeedString = require("./seedStringInProgress");
const {
  GRAPHENEDB_BOLT_PASSWORD,
  GRAPHENEDB_BOLT_URL,
  GRAPHENEDB_BOLT_USER
} = require("../config/index");

const dropDriver = neo4j.driver(
  GRAPHENEDB_BOLT_URL,
  neo4j.auth.basic(GRAPHENEDB_BOLT_USER, GRAPHENEDB_BOLT_PASSWORD)
);

function dropDB() {
  const session = dropDriver.session();
  const dropDBPromise = session.run(delData, {});
  dropDBPromise
    .then(blankDB => {
      session.close();
      dropDriver.close();
    })
    .catch(err => console.log);
}

dropDB();

const seedDriver = neo4j.driver(
  GRAPHENEDB_BOLT_URL,
  neo4j.auth.basic(GRAPHENEDB_BOLT_USER, GRAPHENEDB_BOLT_PASSWORD)
);

function seedDB() {
  const session = seedDriver.session();
  const seedPromise = session.run(updatedSeedString, {});
  seedPromise
    .then(result => {
      session.close();
      seedDriver.close();
    })
    .catch(err => console.log);
}

seedDB();

module.exports = { dropDB, seedDB };
