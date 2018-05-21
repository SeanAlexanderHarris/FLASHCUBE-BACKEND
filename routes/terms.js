const router = require("express").Router();

const {
  getAllTerms,
  getTermsByTopic,
  getUserTerms
} = require("../controllers/terms");

// get all terms
router.get("/", getAllTerms);

// get one term

// get terms a user is studying
router.get("/:uid/terms", getUserTerms);

// get terms for a topic
router.get("/:topicTitle/topicterms", getTermsByTopic);

// add an IS_STUDYING rel between user and term
// router.post(":uid/");

module.exports = router;
