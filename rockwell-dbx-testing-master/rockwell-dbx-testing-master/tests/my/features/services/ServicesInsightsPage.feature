@CSM
@smoke
Feature: View My Services Insights Page
  As a My Services User
  I want more information about the Insights tab
  So that I'm more informed about what's coming

  Background: User is logged in
    Given the user clicks on the menu button

  Scenario: Click insights tab
    Given A user is on the My Services landing pages
    Then the user sees the overview page
    When the user clicks on the insights tab
    Then the insights coming soon page appears
