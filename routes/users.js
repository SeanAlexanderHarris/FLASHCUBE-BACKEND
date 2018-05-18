const router = require("express").Router();

const { getAllUsers, getUser } = require("../controllers/users");

// get all users
router.get("/", getAllUsers);

// get one user
router.get("/:_id", getUser);

module.exports = router;
