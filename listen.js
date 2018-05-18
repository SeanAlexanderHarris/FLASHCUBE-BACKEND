const app = require("./app.js");

app.listen(3000, err => {
  if (err) throw err;
  console.log(`Server listening on port 3000`);
});
