const neo4j = require("neo4j-driver").v1;
// const termData = require("./devData/terms");
// const topicData = require("./devData/topics");
// const userData = require("./devData/users");
// const driver = neo4j.driver(
//   "bolt://localhost",
//   neo4j.auth.basic("neo4j", "flashcube")
// );

const {
  GRAPHENEDB_BOLT_PASSWORD,
  GRAPHENEDB_BOLT_URL,
  GRAPHENEDB_BOLT_USER
} = require("../config");

const graphenedbURL = process.env.GRAPHENEDB_BOLT_URL;
const graphenedbUser = process.env.GRAPHENEDB_BOLT_USER;
const graphenedbPass = process.env.GRAPHENEDB_BOLT_PASSWORD;

const driver = neo4j.driver(
  graphenedbURL,
  neo4j.auth.basic(graphenedbUser, graphenedbPass)
);

function seedDB() {
  const session = driver.session();
  return session
    .run("CREATE (seano:User{name:'Seano', profile:'a url'}) RETURN seano")
    .then(result => {
      session.close();
      console.log(result);
      driver.close();
    })
    .catch(err => console.log);
}

seedDB().catch(console.log);
