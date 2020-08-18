@HelpCenter
@MenuDrawerJenkins03
@Raqa @Prod
@Smoke
Feature: Help Center
    As a user
    I want to navigate to the help center
    So that I may validate the different Help options

    Background: Navigation to Help Center Page
        Given the user navigates to the homepage
        When the user clicks on the menu button
        Then the user clicks on the My Help Center
        Then the user should navigate to the Help Center landing page
        And the user sees article cards
    
    Scenario: Verify Bill of Materials card
        When the user clicks the Bill Of Materials help tile
        Then the user should navigate to Bill Of Materials Help page

    Scenario: Verify Apps card
        When the user clicks the Apps help tile
        Then the user should navigate to App Help page
    
    Scenario: Verify Repairs card
        When the user clicks the Repairs help tile
        Then the user should navigate to Repairs Help page

    Scenario: Verify Equipment card
        When the user clicks the Equipment help tile
        Then the user should navigate to Equipment Help page
        