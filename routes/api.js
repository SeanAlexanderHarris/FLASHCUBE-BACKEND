const router = require("express").Router();
const topicsRouter = require("./topics");
const termsRouter = require("./terms");
const usersRouter = require("./users");

// on home, just send a single term
// router.get("/", function(req, res) {
//   session
//     .run("MATCH(term:Term) RETURN term LIMIT 1")
//     .then(result => {
//       session.close();
//       console.log(result);
//       res.send({ result });
//       driver.close();
//     })
//     .catch(err => console.log);
// });

// on /api render a basic html menu of the routes as help for the squad
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
