@Logout
@Smoke @Regression
Feature: AM Logout
  As a user
  I want to sign out of my Access Management Profile
  so that I can keep my profile secure

  Scenario: User is signing out
    Given A user is logged into their Access Management account
    When The user clicks on the AM Sign Out link
    Then User should navigate to the sign in page