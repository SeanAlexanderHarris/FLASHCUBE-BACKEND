const router = require("express").Router();

const { getAllTopics, getTopic } = require("../controllers/topics");

// get all topics
router.get("/", getAllTopics);

// get one topic
router.get("/:title", getTopic);

// get topics a user is studying

// add an IS_STUDYING rel between user and topic

module.exports = router;
