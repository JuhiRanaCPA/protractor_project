@Smoke @Regression
@PDT
Feature: Create new Customer

    As a user, I need to create a new Customer
    under My Company for product registration

    Scenario: Create New Customer
        Given User navigates to the myRockwell site
        When the User clicks on the menu drawer
        Then the user clicks on the Product Registration link
        Then the user should navigate to Product Registration landing page
        When user clicks on "Register a Product" button
        Then product registration page is displayed
        And step 1 "Product Information" is highlighted on the process status bar
        When user enters the "Serial number" and "Catalog number"
        And click on "Add Product" button
        Then product gets added to the saved products list
        When user click on "Next" button
        Then "Registration Information" step 2 is highlighted
        And registration type is displayed
        When user clicks on "Register to my Customer"
        Then customer name drop down list is displayed under "Register To" section
        And click "Create New Customer" button
        When user enters the new Customer details
        And the Customer details entered are verified and close the modal