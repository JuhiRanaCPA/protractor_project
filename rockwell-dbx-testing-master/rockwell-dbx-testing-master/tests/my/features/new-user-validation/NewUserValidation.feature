@NewUserValidation
Feature: New User Validation
    As a user
    I want to use the New User Validation to navigate
    So I can travel through the site quickly

    Background: User is logged in
        Given the user clicks on the menu button

    Scenario: New User Validation BOM Navigation
        When the User clicks on My Bill of Materials link
        Then the user should navigate to Bill of Materials page
        And " Welcome to Bill of Materials. All of your bill materials will be collected here. Start by creating a new BOM and get your product organized." should be displayed

    Scenario: New User Validation Apps Navigation
        When the User clicks on My Apps link
        Then the user should navigate to My Apps page
        And "Welcome to My Apps. Get faster access to your most commonly used apps. Get started with any app or simply save them to personalize your apps." message should be displayed

    Scenario: New User Validation Repairs Navigation
        When the User clicks on My Repairs link
        Then the user should navigate to Repairs page
        And "Welcome to Repair Quotes. All of your requests for quote for remanufacturing and repair services will be collected here. Start by creating a new request for quote." message should be displayed

     Scenario: New User Validation My Equipment
        When the User clicks on My Equipment
        Then the user should navigate to the My Equipment landing page
        And "This is My Equipment. Gain thoughtful insights into the products in your plant through interactive visuals to aid in developing and supporting your strategic maintenance plan." message should be displayed

    Scenario: New User Validation Account Navigation
        When the User clicks on My Account link
        Then the user should navigate to MyAccount landing page

    Scenario: New User Validation My Services
        When the user clicks on the My Services
        Then the user should navigate to the My Services landing page
        And "Coming Soon: My Services. Soon you'll be able to view service tickets and contract details for quick and easy reference." message should be displayed
