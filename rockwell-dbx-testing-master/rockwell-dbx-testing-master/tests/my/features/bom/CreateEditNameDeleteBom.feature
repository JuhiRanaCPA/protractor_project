@Bom
@BomJenkins02
@Smoke @Regression
Feature: Create, Edit Name, Delete BOM
    As a User with no Boms
    I want to create a new Bill of Materials
    So I can purchase Rockwell Products and edit the name of the Bom and delete it afterward

    Scenario: Create, Edit Name and Delete BOM
        Given user is on the BOM landing page
        When user clicks on Create New
        Then user enters a BOM name
        When user clicks create button
        Then user sees the bill of materials details page with newly created BOM
        When user clicks on bom settings icon
        Then user sees bill of materials settings options in dropdown
        When user clicks on Edit link
        Then user enters a new BOM name
        When user clicks save
        Then user sees the updated BOM name
        When user clicks on bom settings icon
        Then user sees bill of materials settings options in dropdown
        When user clicks on Delete link
        Then user clicks on the confirmation Delete button
        Then user clicks on the dismiss toast
