Feature: View MyEquipment Landing Page
  As a user
  I want to see the my equipment landing page when I am an on boarded User
  So that I can select if I want to see IBE or RAAMP reports

  Background: User is logged in
    Given the user clicks on the menu button

  @MyEquipment
  @CSM
  Scenario: Request More Info Page
    When A user clicks my equipment link
    Then the user sees the request more info button
    When the user clicks on the request more info button
    Then A modal is shown with contact information filled out
    When the user clicks on cancel button
    Then user is taken to the marketing page

  @MyEquipmentIBEOnlyUser
  Scenario: Landing Page with IBE Access
    When A user clicks my equipment link
    Then the user sees the my equipment landing page with both IBE and RAAMP
    When A user clicks on the IBE link
    Then the user will see the IBE Report
    When A user clicks on MyEquipment breadcrumb
    Then user is taken back to landing page
    When the user clicks on RAAMP link
    Then user is taken to the marketing page
    
  @MyEquipmentRAAMPOnlyUser
  Scenario: Landing Page with RAAMP Access
    When A user clicks my equipment link
    Then the user sees the my equipment landing page with both IBE and RAAMP
    When A user clicks on the IBE link
    Then user is taken to the marketing page
    When A user clicks on window back button
    Then user is taken back to landing page
    When the user clicks on RAAMP link
    Then the user will see the RAAMP Report

  @MyEquipmentIBEAndRAAMPUser
  Scenario: Landing Page with Full Access
    When A user clicks my equipment link
    Then the user sees the my equipment landing page with both IBE and RAAMP
    When A user clicks on the IBE link
    Then the user will see the IBE Report
    When A user clicks on MyEquipment breadcrumb
    Then user is taken back to landing page
    When the user clicks on RAAMP link
    Then the user will see the RAAMP Report

  @MyEquipment
  @MyEquipmentLearnMoreLandingPage
  Scenario: Landing Page with Full Access
    When A user clicks my equipment link
    When the user clicks on the Learn more about Equipment

  @MyEquipment
  @MyEquipmentLearnMoreReportPage
  Scenario: Landing Page with IBE Access
    When A user clicks my equipment link
    Then the user sees the my equipment landing page with both IBE and RAAMP
    When A user clicks on the IBE link
    When the user clicks on the Learn more about Equipment
