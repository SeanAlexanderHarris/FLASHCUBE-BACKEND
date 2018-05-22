process.env.NODE_ENV = "test";
const neo4j = require("neo4j-driver").v1;
const testData = require("./testSeedScript.txt");
const {
  GRAPHENEDB_BOLT_PASSWORD,
  GRAPHENEDB_BOLT_URL,
  GRAPHENEDB_BOLT_USER
} = require("../config/index");
const driver = neo4j.driver(
  GRAPHENEDB_BOLT_URL,
  neo4j.auth.basic(GRAPHENEDB_BOLT_USER, GRAPHENEDB_BOLT_PASSWORD)
);
const app = require("../app");
const { dropDB, seedDB } = require("../seed/seed");
const { expect } = require("chai");
const request = require("supertest")(app);

describe("/api", () => {
  "use strict";

  beforeEach(() => {
    return seedDB().then(seededDB => {
      console.log("data seeded", seededDB);
    });
  });

  after(() => {
    return dropDB().then(emptyDB => {
      console.log("database dropped", emptyDB);
    });
  });

  describe("/users", () => {
    it("returns all users", () => {
      console.log("hello");
      return request
        .get(`/api/users/`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then(res => {
          // need to test aspects of the response object here
          const { topics } = res.body;
          expect(topics.length).to.be.a("number");
        });
    });
  });
});
