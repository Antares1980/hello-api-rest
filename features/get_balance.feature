Feature: get balance
  Scenario: get the balance via GET request
    Given I make a Get request to "http://localhost:3000/balance"
    When I receive a response
    Then Response should send the balance
    And reponse should send the account