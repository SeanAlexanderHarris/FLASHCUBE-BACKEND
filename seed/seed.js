const neo4j = require("neo4j-driver").v1;
const devData = require("./seedDevDataString");
const {
  GRAPHENEDB_BOLT_PASSWORD,
  GRAPHENEDB_BOLT_URL,
  GRAPHENEDB_BOLT_USER
} = require("../config/index");

const driver = neo4j.driver(
  GRAPHENEDB_BOLT_URL,
  neo4j.auth.basic(GRAPHENEDB_BOLT_USER, GRAPHENEDB_BOLT_PASSWORD)
);

function seedDB() {
  const session = driver.session();
  return session
    .run(devData)
    .then(result => {
      session.close();
      console.log(result);
      driver.close();
    })
    .catch(err => console.log);
}

seedDB().catch(console.log);
