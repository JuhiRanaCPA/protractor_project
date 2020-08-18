@Smoke @Regression
Feature: To register a product to Company or Customer

    As a user, I need to register a product either to
    a Company or to a Customer

    Scenario: Product Registration for a Company
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
        When user clicks on "Register to my Company"
        Then company information is displayed under "Register To" section
        When user click on the "Review" button
        Then Product Registration step 3 is highlighted and Registration information is displayed

    Scenario: Product Registration for a Customer
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
        When user selects a customer from the drop down
        And user click on the "Review" button
        Then Product Registration step 3 is highlighted and Registration information is displayed
