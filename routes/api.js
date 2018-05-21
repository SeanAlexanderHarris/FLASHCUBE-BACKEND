const router = require("express").Router();
const topicsRouter = require("./topics");
const termsRouter = require("./terms");
const usersRouter = require("./users");

// on /api render a basic html menu of the routes & endpoints
router.get("/", (req, res) => {
  res.sendFile(__dirname.replace("routes", "") + "index.html");
});

router.use("/users", usersRouter);

router.use("/topics", topicsRouter);

router.use("/terms", termsRouter);

router.use("/*", (req, res, next) => {
  next({ status: 404 });
});

module.exports = router;
