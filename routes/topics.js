const router = require("express").Router();

const {
  getAllTopics,
  getTopic,
  getUserTopics,
  addUserStudyingTopic
} = require("../controllers/topics");

// get all topics
router.get("/", getAllTopics);

// get one topic
router.get("/:title", getTopic);

// get topics a user is studying
router.get("/:uid/topics", getUserTopics);

// add an IS_STUDYING relationship between user and topic
router.put("/:uid/:topicTitle", addUserStudyingTopic);

module.exports = router;
