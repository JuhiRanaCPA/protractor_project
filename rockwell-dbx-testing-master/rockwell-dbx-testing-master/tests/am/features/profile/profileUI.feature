@Profile
@Smoke @Regression @Ready
Feature: Profile Tab UI
    As a user
    I want to view my Profile information 
    So that I can determine if it is correct, or needs to be updated

    Background: Navigate to Profile Tab
        Given A user is logged into their Access Management account
        When the user clicks on the Profile tab
        Then the user is on the Profile page

    @UI
    Scenario: Validate Profile UI
        Then the user should see their name title
        And the user should see the email label and their email
        Then the user should see First Name label and input field 
        Then the user should see Last Name label and input field 
        Then the user should see Company Name label and input field 
        Then the user should see Phone Number label and input field 
        Then the user should see Country label and dropdown menu
        Then the user should see Address Line 1 label and input field
        Then the user should see City label and input field
        Then the user should see State label and dropdown menu
        Then the user should see Zip Code label and input field
        Then the user should see the inactive Save button
        Then the user should see the Learn more link
        Then the user should see the profile picture

    @UI
    Scenario: View Profile & Change Navigation
        When the user clicks on "Change Email" button
        Then the user will see the Change Email page
        When the user clicks the back button
        Then the user is on the Profile page
        When the user clicks on "Change Password" button
        Then the user will see the Change Password page
        When the user clicks the back button
        Then the user is on the Profile page
        When the user clicks on the "Delete Account" button
        Then the user will see the Delete Account Modal
        When the user clicks the cancel button on the delete account modal
        Then the user is on the Profile page

    @UI
    Scenario: Update Profile Information
        When the user enters the "Chicago" into the city input
        And the user clicks the save button
        Then the user should see the success message

