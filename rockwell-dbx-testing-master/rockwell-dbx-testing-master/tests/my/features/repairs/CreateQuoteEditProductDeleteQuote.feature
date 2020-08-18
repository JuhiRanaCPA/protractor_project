@CSM
@Repairs
@Smoke
Feature: Create Quote, Edit Product, Delete Quote
    As a user
    I want to be able to create and delete a repairs quote
    So that I can receive a quote for repairs

    Background: User is logged in
        Given the user clicks on the menu button

    Scenario: Search to Add Product
        Given A user is on the My Repairs landing page
        When the user clicks on drafts
        And the user deletes all drafts
        And The user clicks on the create new button
        Then the user should see the Add Product to quote page
        When the user clicks Search to Add Product button
        Then the search bar appears
        When User searches for "20B-VECT-D0AD"
        And User clicks the search icon
        Then at least 1 product displays in the search results
        When the user clicks on Add to Repair Quote button on first product result
        Then the user should see the Create Repair Step 1 page, with the first step highlighted
        When the user clicks the Series dropdown button
        And user clicks a repairs series choice
        And user chooses the standard Service tier option
        And clicks Review Your Request Button
        Then the user should see the Create Repair Step 2 page, with the second step highlighted
        When the user clicks the delete quote button
        Then the user should see the Delete quote modal
        When the user clicks "Yes" delete button
        Then the user should see the My repairs landing page
        And no quotes are displayed

    Scenario: Manually Add Product
        Given A user is on the My Repairs landing page
        When the user clicks on drafts
        And the user deletes all drafts
        When The user clicks on the create new button
        Then the user should see the Add Product to quote page
        When the user clicks Manually Add Product button
        Then the Create New Product Modal appears
        And the user enters a product number
        When the user clicks the create product Series dropdown button
        And clicks a repairs series choice
        And the user enters a manufacturer name
        And the user enters a Product Description
        And the user clicks Add Product Button
        Then the user should see the Create Repair Step 1 page, with the first step highlighted
        When user chooses the standard Service tier option
        And clicks Review Your Request Button
        Then the user should see the Create Repair Step 2 page, with the second step highlighted
        When the user clicks the delete quote button
        Then the user should see the Delete quote modal
        When the user clicks "Yes" delete button
        Then the user should see the My repairs landing page
        And no quotes are displayed
