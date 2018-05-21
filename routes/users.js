const router = require("express").Router();

const { getAllUsers, getUser, addUser } = require("../controllers/users");

// get all users
router.get("/", getAllUsers);

// get a single user
router.get("/:uid", getUser);

// add a user
router.post("/", addUser);

module.exports = router;
