@Bom
@BomJenkins02
@Smoke @Regression
Feature: Add Manual Product to BOM, Edit Manual Product, Delete Manual Product from BOM
    As a User adding a manual product to a BOM
    OR editing a manual product that has already been added to a BOM
    I want to see any HTML I put into the description of the manual product encoded on the front end
    So that I do user added content in the BOM details page    

    Scenario: 
        Given user is on the BOM landing page
        When user clicks on Create New
        And user enters a BOM name
        And user clicks create button
        Then user sees the bill of materials details page with newly created BOM
        And user clicks the Add Manual button
        And user enters "12345" in the Catalog Number field 
        And user enters "12345" in the Product Name field
        And user enters '<img src="https://t/m/a/i/l.svg">' in the Description field
        When user clicks the Add Product button
        Then ensure that the description shown on the front end is encoded as '%3Cimg+src%3D%22https%3A%2F%2Ft%2Fm%2Fa%2Fi%2Fl.svg%22%3E'
        And user clicks the Edit icon on the Manual Product
        And user enters '<img src="https://w/r/i/p/2.jpg">' in the Description field
        When user clicks the Save button 
        Then ensure that the description shown on the front end is encoded as '%3Cimg+src%3D%22https%3A%2F%2Fw%2Fr%2Fi%2Fp%2F2.jpg%22%3E'
        And user clicks on bom settings icon
        And user clicks on Delete link
        When user clicks on the confirmation Delete button
