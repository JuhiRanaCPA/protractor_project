@SearchRepairs

Feature: Search for a Repair Quote
    As a User with existing Repair Quotes
    I want to Search for Quotes            
    So that I can find that Repair Quote easier and faster

    Background: User is logged in
        Given the user clicks on the menu button
    
    Scenario: Search for a Repair Quote with the quote number "62832"
        Given A user is on the My Repairs landing page
        When the user taps on Quotes tab
        And the user performs a search with the quote number "62832"
        Then display one repair quote results that matches with the search term

    Scenario: Search for a Repair Quote with the catalog number "1756-A10"
        Given A user is on the My Repairs landing page
        When the user taps on Quotes tab
        And the user performs a search with the catalog number "1756-A10"
        Then display one repair quote results that matches with the search term

    Scenario: Search for a Repair Quote with the product family name "PowerFlex Accessories Drives & Motors"
        Given A user is on the My Repairs landing page
        When the user taps on Quotes tab
        And the user performs a search with the product family name "PowerFlex Accessories Drives & Motors"
        Then display one repair quote results that matches with the search term

    Scenario: Search for a Repair Quote with the description "PowerFlex 750 Inverter Assembly Kit"
        Given A user is on the My Repairs landing page
        When the user taps on Quotes tab
        And the user performs a search with the description name "PowerFlex 750 Inverter Assembly Kit"
        Then display one repair quote results that matches with the search term
