const neo4j = require("neo4j-driver").v1;
const termData = require("./devData/terms");
const driver = neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "flashcube")
);

// Will need to add users and topics to the json data

function seedDB(termData) {
  const session = driver.session();
  const queries = termData.map(card => {
    return session.run(
      `CREATE (flashcard:Term {term: $term, definition: $definition}) RETURN flashcard`,
      {
        term: card.term,
        definition: card.definition
      }
    );
  });
  return Promise.all(queries).then(result => {
    session.close();
    console.log(result[1].records[0]._fields);
    driver.close();
  });
}

seedDB(termData).catch(console.log);
