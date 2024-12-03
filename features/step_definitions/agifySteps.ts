const { Given, When, Then } = require("@cucumber/cucumber");
const supertest = require("supertest");
const request = supertest("https://api.agify.io");
const assert = require("assert");

Given("the API is accessible", () => {});

When("I send a GET request with a valid {string}", async function (name) {
  this.response = await request.get(`/?name=${name}`);
});

Then(
  "the API should respond with status code {int}",
  async function (statusCode) {
    assert.equal(this.response.status, statusCode);
  }
);

Then("the response should include the {string}", async function (name) {
  assert.ok(this.response.body.name === name);
});

Then("the response should include the estimated age", async function () {
  assert.ok(this.response.body.age);
});

Then("the age should be a number", async function () {
  assert.ok(Number.isInteger(this.response.body.age));
});

Then("the response should include a count of occurrences", async function () {
  assert.ok(this.response.body.count);
});

Then("the count should be a number greater than {int}", async function (count) {
  assert.ok(this.response.body.count > count);
});

When("I send a GET request without the name parameter", async function () {
  this.response = await request.get("/");
});

Then(
  "the response should include an error message indicating missing name parameter",
  async function () {
    assert.ok(this.response.body.error === "Missing 'name' parameter");
  }
);

When("I send a GET request with an invalid {string}", async function (name) {
  this.response = await request.get(`/?name=${name}`);
});

Then("the age should be null", async function () {
  assert.ok(this.response.body.age === null);
});

Then("the count should be {int}", async function (count) {
  assert.ok(this.response.body.count === count);
});

When(
  "I send a GET request with the names {string}, {string} and {string}",
  async function (name1, name2, name3) {
    this.response = await request.get(
      `/?name[]=${name1}&name[]=${name2}&name[]=${name3}`
    );
  }
);

Then(
  "the response should include the estimated age for each name",
  async function () {
    assert.ok(
      Number.isInteger(this.response.body[0].age) &&
        Number.isInteger(this.response.body[1].age) &&
        Number.isInteger(this.response.body[2].age)
    );
  }
);

Then(
  "the response should include a count of occurrences for each name",
  async function () {
    assert.ok(
      this.response.body[0].count &&
        this.response.body[1].count &&
        this.response.body[2].count
    );
  }
);
