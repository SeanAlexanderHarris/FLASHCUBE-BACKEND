const router = require("express").Router();

const {
  getAllTerms,
  getTermsByTopic,
  getUserTerms,
  addUserStudyingTerm,
  getOneTerm,
  addTerm
} = require("../controllers/terms");

// get all terms
router.get("/", getAllTerms);

// get one term
router.get("/:termDefinition", getOneTerm);

// get terms a user is studying
router.get("/:uid/terms", getUserTerms);

// get terms for a topic
router.get("/:topicTitle/topicterms", getTermsByTopic);

// add an IS_STUDYING rel between user and term
router.put("/:uid/:termDefinition", addUserStudyingTerm);

// add a term to the database
router.post("/", addTerm);

module.exports = router;
