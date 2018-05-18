const router = require("express").Router();

const { getAllTopics, getTopic } = require("../controllers/topics");

// get all topics
router.get("/", getAllTopics);

// get one topic
router.get("/:title", getTopic);

// get topics a user is stuyding
