@ServicesWithAccess
Feature: Sort the tickets and contracts lists
  As a user
  I want to sort the list of tickets that I have
  So that I can see the tickets sorted on the way I specified

  Background: User is logged in
    Given the user clicks on the menu button

  Scenario: Sort Tickets by Ticket Number
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the tickets tab
    Then the tickets list appears
    When the user clicks on the sort tickets by number button
    Then the tickets are sorted by the column specified

  Scenario: Sort Tickets by Ticket Description
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the tickets tab
    Then the tickets list appears
    When the user clicks on the sort tickets by description button
    Then the tickets are sorted by the column specified

  Scenario: Sort Tickets by Ticket Status
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the tickets tab
    Then the tickets list appears
    When the user clicks on the sort tickets by status button
    Then the tickets are sorted by the column specified

  Scenario: Sort Tickets by Ticket Priority
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the tickets tab
    Then the tickets list appears
    When the user clicks on the sort tickets by priority button
    Then the tickets are sorted by the column specified

  Scenario: Sort Tickets by Created Date
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the tickets tab
    Then the tickets list appears
    When the user clicks on the sort tickets by created date button
    Then the tickets are sorted by the column specified


  Scenario: Sort Contracts by Contract #
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the contracts tab
    Then the contracts list appears
    When the user clicks on the sort contracts by contract # button
    Then the contracts are sorted by the column specified

  Scenario: Sort Contracts by Description
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the contracts tab
    Then the contracts list appears
    When the user clicks on the sort contracts by description button
    Then the contracts are sorted by the column specified

  Scenario: Sort Contracts by Start Date
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the contracts tab
    Then the contracts list appears
    When the user clicks on the sort contracts by start date button
    Then the contracts are sorted by the column specified

  Scenario: Sort Contracts by End Date
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the contracts tab
    Then the contracts list appears
    When the user clicks on the sort contracts by end date option
    Then the contracts are sorted by the column specified

  Scenario: Sort Contracts by Status
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the contracts tab
    Then the contracts list appears
    When the user clicks on the sort contracts by status option
    Then the contracts are sorted by the column specified
