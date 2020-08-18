@Search
@VisitApps
@Smoke @Regression
Feature: Search for Apps
    As a user
    I want to search for an app
    So I can view available applications

    Scenario Outline: Search for apps from homepage
        Given User navigates to the myRockwell site
        When User searches for <App>
        Then User clicks the search icon
        Then User clicks on the Apps tab
        Then Their should be at least 1 app
        Examples:
            | App |
            | * |
