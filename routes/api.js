const router = require("express").Router();
const neo4j = require("neo4j-driver").v1;
const driver = neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "flashcube")
);

// CHANGE

// on home, just send a single term
router.get("/", function(req, res) {
  session
    .run("MATCH(term:Term) RETURN term LIMIT 1")
    .then(result => {
      console.log(result);
      res.send({ result });
    })
    .catch(err => console.log);
  // res.send("it works");
});

router.use("/*", (req, res, next) => {
  next({ status: 404 });
});

module.exports = router;
