@VisitApps
@Smoke @Regression
Feature: Verify Apps details Page

   As a user I need to verify the Apps details page
   for mobile, browser and desktop apps
      
    Scenario Outline: User verifies Apps details page for Mobile, Web & Desktop Apps
        Given the user clicks on the menu button
        When the User clicks on App Store
        Then the user should navigate to the App store landing page
        Given user is able to view the different <Category> apps
        When user clicks on any of the apps
        Then user is on the App details page
        Then user is able to view the App title
        Then user is able to view the Save to My Apps button
        Then user is able to view the Select Platform button
        Then user is able to view the App Description
        And user is able to view other App details such as "Support","Languages","Requirements" section
    
     Examples:
            | Category  |
            | Mobile    |
            | Web       |
            | Desktop   |
