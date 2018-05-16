const neo4j = require("neo4j-driver").v1;
const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "flashcube")
);
// change password on the administration tab on the neo4j section and
const session = driver.session();
const personName = "Sean";
const resultPromise = session.run("CREATE (a:Person {name: $name}) RETURN a", {
  name: personName
});
resultPromise
  .then(result => {
    session.close();
    const singleRecord = result.records[0];
    const node = singleRecord.get(0);
    console.log(node.properties.name);
    driver.close();
  })
  .catch(console.log);
