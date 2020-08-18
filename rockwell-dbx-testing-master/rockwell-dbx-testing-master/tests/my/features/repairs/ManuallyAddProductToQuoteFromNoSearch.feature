@CSM
@Repairs
@Smoke
Feature: Create Quote, Edit Product, Delete Quote
    As a user
    I want to be able to create a quote
    And add a manual product to it from the no results search page

    Scenario: Add Manual Product From No Results Search Page
        When a user clicks to create a new item
        Then the user sees the modal and fill out the product catalog number
        Then the user selects product series
        Then the user enters the manufacturer name
        Then the user enters the product description
        Then the user clicks to create product
        Then the user enters the product description
        Then selects dropdown option
        Then click to create the quote with manual product
        Then user goes to the draft page 

