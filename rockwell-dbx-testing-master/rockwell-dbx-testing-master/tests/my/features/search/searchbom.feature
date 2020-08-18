@Search
@SearchBOMDelete
Feature: Search For BOM
    As a user
    I want to search for a Bill of Materials
    So that I can view specific Bills of Materials

    Scenario Outline: Search for Bills of Materials from homepage
        Given user is on the BOM landing page
        When User deletes all BOMs
        Given User navigates to the myRockwell site
        When User searches for <BOM>
        Then User clicks the search icon
        Then User clicks on the Bill of Materials tab
        Then User should see no boms in the search results

        Examples:
            | BOM |
            | *   |
