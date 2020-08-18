@Search
@Smoke @Regression
Feature: Search Page with no results
    As a user
    I want to search for something that doesn't exist in the site
    So that I can validate the no results page
    Scenario Outline: User gets no results on all tabs
        Given User navigates to the myRockwell site
        When User searches for "@"
        Then User clicks the search icon
        When The User clicks the <Tab>
        Then <Message> should be displayed for "@"
        Then "RA results" link displayed for tabs except AllSites
        And "Search Tips" displayed for the user
        Then Additional <Options> sections should appear
        Then "Still can't find" section should be displayed with contact e-mail

        Examples:
            | Tab             | Message                          | Options                 |
            | Applications    | Sorry, no results were found for | Go to the App Store     |
            | Products        | Sorry, no results were found for | Create a New Item       |
            | BillOfMaterials | Sorry, no results were found for | Go to Bill of Materials |
            | AllSites        | Sorry, no results were found for | Create a New Item       |
