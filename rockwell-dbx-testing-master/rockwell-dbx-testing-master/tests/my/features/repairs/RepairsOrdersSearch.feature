@SearchRepairs

Feature: Search for a Repair Orders
  As a User with existing Repair Orders
  I want to Search for Orders
  So that I can find that Repair Order easier and faster

  Background: User is logged in
    Given the user clicks on the menu button

  Scenario: Search for a Repair Order with the order number "65679765"
    Given A user is on the My Repairs landing page
    When the user taps on Orders tab
    And the user performs a search with the order number "65679765"
    Then display all the results that match with the search term

  Scenario: Search for a Repair Order with the catalog number "2098DSDHV220SE"
    Given A user is on the My Repairs landing page
    When the user taps on Orders tab
    And the user performs a search with the catalog number "2098DSDHV220SE"
    Then display all the results that match with the search term
    
  Scenario: Search for a Repair Order with the product family name "Ultra 3000 Multi-axis Motion Control"
    Given A user is on the My Repairs landing page
    When the user taps on Orders tab
    And the user performs a search with the product family name "Ultra 3000 Multi-axis Motion Control"
    Then display all the results that match with the search term
       # should show order with catalog number is 2098DSDHV220SE since product family name is not shown on front end

  Scenario: Search for a Repair Order with the description "Ultra 3000 22kW with SERCOS Servo Drive"
    Given A user is on the My Repairs landing page
    When the user taps on Orders tab
    And the user performs a search with the description name "Ultra 3000 22kW with SERCOS Servo Drive"
    Then display all the results that match with the search term
       # should show order with catalog number is 2098DSDHV220SE since description is not shown on front end
