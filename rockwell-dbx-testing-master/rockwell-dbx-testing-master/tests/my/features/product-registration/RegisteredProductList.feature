@RegProdList
Feature: To validate registered product list for Company or Customer

    As a user, I need to validate the registered product list
    for Company and Customer

    Scenario: Validate Registered Product List for Company
        Given User navigates to the myRockwell site
        When the User clicks on the menu drawer
        Then the user clicks on the Product Registration link
        Then the user should navigate to Product Registration landing page
        Then the user clicks on the My Company card
        And user should navigate to Registered Product list page
        Then user can validate the registered products
