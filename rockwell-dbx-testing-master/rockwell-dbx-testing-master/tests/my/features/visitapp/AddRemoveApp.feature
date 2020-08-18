@VisitApps
@Smoke @Regression
Feature: Add and Remove App
    As a user
    I want to visit the Apps page
    So that I add and remove my apps

    Scenario: Add and Remove App from my Apps
      Given A user is on the myRockwell site
      When the user clicks on the menu button
      And the User clicks on My Apps
      And the User clicks edit button
      And the User deletes all existing Apps
      Then the user should navigate to the empty My Apps page
      When the user clicks the "Explore the App Store" button
      Then the user should navigate to the App store landing page
      When the user clicks the first app
      Then the user should navigate to the app details page
      When the user clicks the "Save to my apps" button
      Then the user should see the "Remove from my apps" button
      When the user clicks on the menu button
      And the User clicks on My Apps
      Then the user should navigates to the non empty My Apps page
      When the user clicks the "edit" button
      Then the user clicks the "X" button on the first app
      When the user clicks "Remove" button on the modal
      Then the user should navigate to the empty My Apps page