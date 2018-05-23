process.env.NODE_ENV = "test";
const neo4j = require("neo4j-driver").v1;
const {
  GRAPHENEDB_BOLT_PASSWORD,
  GRAPHENEDB_BOLT_URL,
  GRAPHENEDB_BOLT_USER
} = require("../config");
const driver = neo4j.driver(
  GRAPHENEDB_BOLT_URL,
  neo4j.auth.basic(GRAPHENEDB_BOLT_USER, GRAPHENEDB_BOLT_PASSWORD)
);
const app = require("../app");
const { dropDB, seedDB } = require("../seed/seed");
const { expect } = require("chai");
const request = require("supertest")(app);
const updatedSeedString = require("../seed/seedStringInProgress");
const delData = require("../seed/deleteTestDataString");

describe("/api", () => {
  "use strict";

  beforeEach(() => {
    // dropDB();
    // seedDB();
  });

  after(() => {
    dropDB();
  });

  describe("/users", () => {
    it("returns all users", () => {
      return request
        .get(`/api/users/`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then(res => {
          const { result } = res.body;
          expect(result.records.length).to.equal(4);
          expect(result.records[0]._fields[0].properties.name).to.be.a(
            "string"
          );
          expect(result.records[0]._fields[0].properties.uid).to.be.a("string");
          expect(result.records[0]._fields[0].properties.profile).to.be.a(
            "string"
          );
        });
    });

    it("returns a single user", () => {
      return request
        .get(`/api/users/FP9AzXLPWfS9NjH6N7oy6osi9cn2`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then(res => {
          const { result } = res.body;
          expect(result.records[0]._fields[0].properties.name).to.equal(
            "DanSoup"
          );
          expect(result.records[0]._fields[0].properties.uid).to.equal(
            "FP9AzXLPWfS9NjH6N7oy6osi9cn2"
          );
          expect(result.records[0]._fields[0].properties.profile).to.equal(
            "a url"
          );
        });
    });
  });

  describe("/topics", () => {
    it("returns all topics", () => {
      return request
        .get(`/api/topics/`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then(res => {
          const { result } = res.body;
          expect(result.records.length).to.equal(7);
          expect(result.records[0]._fields[0].properties.topicImageUrl).to.be.a(
            "string"
          );
          expect(result.records[0]._fields[0].properties.title).to.be.a(
            "string"
          );
          expect(result.records[0]._fields[0].properties.language).to.be.a(
            "string"
          );
        });
    });

    it("returns one topic", () => {
      return request
        .get(`/api/topics/Made%20in%20Chelsea`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then(res => {
          const { result } = res.body;
          expect(result.records[0]._fields[0].properties.topicImageUrl).to.be.a(
            "string"
          );
          expect(result.records[0]._fields[0].properties.title).to.equal(
            "Made in Chelsea"
          );
          expect(result.records[0]._fields[0].properties.language).to.equal(
            "English"
          );
        });
    });

    // it("returns topics a user is studying", () => {
    //   return request
    //     .get(`/api/topics/usertopics/FP9AzXLPWfS9NjH6N7oy6osi9cn2`)
    //     .expect("Content-Type", /json/)
    //     .expect(200)
    //     .then(res => {
    //       const { result } = res.body;
    //       expect(result.records[0]._fields[0].properties.topicImageUrl).to.be.a(
    //         "string"
    //       );
    //       console.log(result);
    //     });
    // });
  });
});
