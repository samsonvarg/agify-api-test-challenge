Feature: Get age based on names using Agify.io API
  As a user of Agify.io API,
  I want to retrieve the estimated age for a given name,
  So that I can gain insights into the age distribution of people with that name.

  Scenario Outline: Retrieve the age for a valid name
    Given the API is accessible
    When I send a GET request with a valid '<name>'
    Then the API should respond with status code 200
    And the response should include the '<name>'
    And the response should include the estimated age
    And the age should be a number
    And the response should include a count of occurrences
    And the count should be a number greater than 0

    Examples:
      | name     |
      | Ava      |
      | bob      | # All lowercase
      | CHARLIE  | # All caps
      | John Doe | # Full name
      | José     | # Non-English name

  Scenario: Retrieve ages for multiple names
    Given the API is accessible
    When I send a GET request with the names '<name1>', '<name2>' and '<name3>'
    Then the API should respond with status code 200
    And the response should include the estimated age for each name
    And the response should include a count of occurrences for each name

    Examples:
      | name1 | name2 | name3 |
      | Ava   | Emma  | Liam  |

  Scenario: Verify that the API returns an error when name parameter is missing
    Given the API is accessible
    When I send a GET request without the name parameter
    Then the API should respond with status code 422
    And the response should include an error message indicating missing name parameter

  Scenario: Verify that the API returns null age for an invalid name
    Given the API is accessible
    When I send a GET request with an invalid '<name>'
    Then the API should respond with status code 200
    And the response should include the '<name>'
    And the age should be null
    And the count should be 0

    Examples:
      | name         |
      | invalid_name |
      |          123 |
      |              |
