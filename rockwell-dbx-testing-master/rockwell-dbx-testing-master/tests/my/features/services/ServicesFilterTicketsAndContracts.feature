@ServicesWithAccess
Feature: Filter the tickets and contracts lists
  As a user
  I want to filter the list of tickets and contracts that I have
  So that I can see the tickets and contracts filtered by the different filters in each page

  Background: User is logged in
    Given the user clicks on the menu button

  Scenario: Filter Tickets by Status
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the tickets tab
    Then the tickets list appears
    When the user clicks on the ticket status dropdown
    And the user select one of the ticket status
    Then the tickets are filtered by the status selected

  Scenario: Filter Tickets by Priority
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the tickets tab
    Then the tickets list appears
    When the user clicks on the ticket priority dropdown
    And the user select one of the ticket priority
    Then the tickets are filtered by the priority selected

  Scenario: Filter Tickets by Status and Priority
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the tickets tab
    Then the tickets list appears
    When the user clicks on the ticket status dropdown
    And the user select one of the ticket status
    Then the tickets are filtered by the status selected
    When the user clicks on the ticket priority dropdown
    And the user select one of the ticket priority
    Then the tickets are filtered by the priority selected

  Scenario: Filter Contracts by Status
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the contracts tab
    Then the contracts list appears
    When the user clicks on the contract status dropdown
    And the user select one of the contract status
    Then the contracts are filtered by the status selected