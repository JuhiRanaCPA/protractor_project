@myContactUpdate
@Smoke @Regression
Feature: Update my Contacts for a user
    As a user
    I want to update My Contacts for a test user
   
    Scenario: Update My Contacts from Menu drawer
        When the User clicks on the menu drawer
        Then the user clicks on My Contacts link
        Then check whether user already have a contact or not
        Then enter the location of the contact
        Then select the search distance range
        Then select the distance unit
        And click Find My Contacts button
        Then select the distributor office contact
        And select the sales office contact
        Then click Save My Contacts button