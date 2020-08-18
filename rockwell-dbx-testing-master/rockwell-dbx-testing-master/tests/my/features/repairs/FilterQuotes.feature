@CSM
@Repairs
@Smoke
Feature: Filter Quotes
    As a user
    I want to be able to filter quotes by status
    So that I can see the list of quotes that I want

    Background: User is logged in
        Given the user clicks on the menu button

    # A Quote should be submitted manually before running this
    Scenario: Filter Quotes By Status
        Given A user is on the My Repairs landing page
        When the user clicks on the status filter component
        And the user selects one of the status
        Then the user should see the filtered quotes list
