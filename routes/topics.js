const router = require("express").Router();

const {
  getAllTopics,
  getTopic,
  getUserTopics,
  addUserStudyingTopic,
  addUserFavouriteTopic,
  delUserFavouriteTopic,
  addTopic
} = require("../controllers/topics");

// get all topics
router.get("/", getAllTopics);

// get one topic
router.get("/:title", getTopic);

// get topics a user is studying
router.get("/:uid/topics", getUserTopics);

// add an IS_STUDYING relationship between user and topic
router.put("/:uid/:topicTitle", addUserStudyingTopic);

// add a "favourite" property to an :IS_STUDYING relationship
router.put("/fave/:uid/:topicTitle", addUserFavouriteTopic);

// remove the "favourite" property from an :IS_STUDYING relationship
router.delete("/fave/:uid/:topicTitle", delUserFavouriteTopic);

// add a topic to the database
router.post("/", addTopic);

module.exports = router;
