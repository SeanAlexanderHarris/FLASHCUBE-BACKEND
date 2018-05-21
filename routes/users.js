const router = require("express").Router();

const { getAllUsers, getUser, addUser } = require("../controllers/users");

// get all users
router.get("/", getAllUsers);

// get a user and all topics
router.get("/:uid", getUser);

// add a user
router.post("/", addUser);

module.exports = router;
