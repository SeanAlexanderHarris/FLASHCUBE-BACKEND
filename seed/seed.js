const neo4j = require("neo4j-driver").v1;
const termData = require("./devData/terms");
const topicData = require("./devData/topics");
const userData = require("./devData/users");
const driver = neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "flashcube")
);

function seedDB(termData, topicData, userData) {
  const session = driver.session();

  const termQueries = termData.map(card => {
    return session.run(
      `MERGE (flashcard:Term {term: $term, definition: $definition, belongs_to: $belongs_to}) RETURN flashcard`,
      {
        term: card.term,
        definition: card.definition,
        belongs_to: card.belongs_to
      }
    );
  });

  const topicQueries = topicData.map(topic => {
    return session.run(
      `MERGE (topic:Topic {title: $title, created_by: $created_by, language: $language}) RETURN topic`,
      {
        title: topic.title,
        created_by: topic.created_by,
        language: topic.language
      }
    );
  });

  const userQueries = userData.map(user => {
    return session.run(
      `MERGE (user:User {name: $name, profile_img: $profile_img}) RETURN user`,
      {
        name: user.name,
        profile_img: user.profile_img
      }
    );
  });

  const devQueries = [...termQueries, ...topicQueries, ...userQueries];

  // MERGE QUERY for the HAS_CREATED and BELONGS_TO relationships
  //     console.log(result[1].records[0]._fields);

  return Promise.all(devQueries).then(result => {
    session.close();
    console.log(
      "RESULTS",
      typeof result,
      result.length,
      result[result.length - 1].records[0]._fields
    );
    driver.close();
  });
}

seedDB(termData, topicData, userData).catch(console.log);
