const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "api_test_report.json",
  output: "api_test_report.html",
  reportSuiteScenarios: true,
  launchReport: false,
};

reporter.generate(options);
