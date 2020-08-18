@Login
@Smoke @Regression @Ready
Feature: Login
  As a user
  I want to login
  So that I can access MyRockwell

  Scenario: User is not logged in
    Given User navigates to the Access Management site
    When User is not logged in
    Then User should navigate to the sign in page
    When User enters username and password
    And User clicks sign in
    Then User should be directed to Access Management My Account page