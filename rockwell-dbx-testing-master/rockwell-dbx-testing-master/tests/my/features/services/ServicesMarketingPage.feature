@CSM
@Services
@Smoke
Feature: View My Services Marketing Page
  As a user
  I want to see the marketing page when i visit My Services Page
  So that I know that the services feature is coming soon

  Background: User is logged in
    Given the user clicks on the menu button

  Scenario: Request More Info
    Given A user is on the My Services landing page
    Then the user sees the go back home page
    When the user clicks on the go back home button
    Then the user is taken back to the home page
