Feature: Get age by name using agify.io API

  Scenario: Retrieve the age for a given name
    Given I am an authenticated user
    When I send a GET request
    Then the API should respond with status code 200
    And the response should include the age
