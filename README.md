# Project Name
**agify-api-test-challenge**

**Description**

This project is a test challenge for the Agify API. It aims to demonstrate the usage of the Agify API to retrieve age predictions based on names.

**Prerequisuites**

- node (v20.16.0)
- npm (10.8.1)

**Frameworks used**
- @cucumber/cucumber: Cucumber.js for running BDD tests.
- Supertest: Library for testing HTTP APIs.
- cucumber-html-reporter: Generates HTML reports for Cucumber.js tests.

**Installation**

To install and run this project, follow these steps:

1. Clone the repository: `git clone https://github.com/samsonvarg/agify-api-test-challenge.git`
2. Navigate to the project directory: `cd agify-api-test-challenge`
3. Install dependencies: `npm install`

**Project Structure**

features/: Contains the feature files written in Gherkin.
features/step_definitions/: Contains the step definition files.
reports/: Contains the generated HTML reports.

**Usage**

To run the tests and generate HTML test reports, follow these steps:

1. Open the terminal and navigate to the project directory.
2. Run the tests: `npm run test`
3. Generate the HTML test report: `npm run generate:report`
