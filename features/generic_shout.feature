Feature: Generic Shout
  Scenario: Get sent without any additional info
    Given Server is running
    When an empty request is listened
    Then "Hello unknown entity" is responded