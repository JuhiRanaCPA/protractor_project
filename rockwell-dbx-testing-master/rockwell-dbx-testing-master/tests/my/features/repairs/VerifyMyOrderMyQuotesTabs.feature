@CSM
@Repairs
@Smoke @Regression

Feature: Repairs - Quotes/Orders
    As a user
    I want to be toggle between Quotes and Order
    So that I can see the landing page for each tab

    Background: User is logged in
        Given the user clicks on the menu button

    Scenario: Quotes / Orders Tab Bar 
        Given A user is on the My Repairs landing page
        When the user taps on Orders tab
        Then the user should see the Orders page
        When the user taps on Quotes tab
        Then the user should see the Quotes page
