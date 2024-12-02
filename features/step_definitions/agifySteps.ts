const { Given, When, Then } = require("@cucumber/cucumber");
const supertest = require("supertest");
const request = supertest("https://api.agify.io");
const assert = require("assert");

Given("I am an authenticated user", () => {});

When("I send a GET request", async function () {
  this.response = await request.get("/?name=samson");
});

Then(
  "the API should respond with status code {int}",
  async function (statusCode) {
    assert.equal(this.response.status, statusCode);
  }
);

Then("the response should include the age", async function () {
  assert.ok(this.response.body.age);
});
