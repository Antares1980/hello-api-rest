Feature: Generic Shout
  Scenario: Get sent without any additional info
    Given I make a Get generic request to "http://localhost:8080"
    When I receive a response
    Then Response should be "200"
    And response body should contain "Hello entity. It's"