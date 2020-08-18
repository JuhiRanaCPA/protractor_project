@Search
@Smoke @Regression
Feature: Search for products
    As a user
    I want to search for a product
    So that I can validate search results for that product

    Scenario: Search for the products with results
        Given User navigates to the myRockwell site
        When User searches for "Powerflex"
        Then User clicks the search icon
        #When this Feature was written, Products was the default first tab, so no need to validate that the user is on the tab
        Then at least 1 product displays in the search results
        Then the first search result appears with the 'active' status
        Then Search Suggestions section should be displayed
