const router = require("express").Router();

const { getAllTerms } = require("../controllers/terms");

// get all terms
router.get("/", getAllTerms);

// get one term

// get terms a user is studying

// add an IS_STUDYING rel between user and term

module.exports = router;
