@Search 
#@Smoke @Regression

Feature: Search Quick Links Navigation
    As a User searching products in myrockwell 
    I want to navigate from the product search results page to the quick links on a product card
    So I can ensure that the links on a product card are still working
    
    Scenario: Search for a product, click on "Product Family Page" link
        Given User navigates to the myRockwell site
        # exists
        And User searches for "1756-EN2T"
        # exists - replace keyword
        And User clicks the search icon
        # exists
        And at least 1 product displays in the search results
        # exists

    Scenario Outline: click on <QuickLink> link
        When user clicks on the <QuickLink> link on the product card for "1756-EN2T"
        Then validate that a new tab opens in the user's browser 
        And validate that the link URL is <URL> for <QuickLink> on product card "1756-EN2T"
        And close the tab in the user's browser 

        Examples:
            | QuickLink             | URL                                                                                                                               |
            | Specifications        | https://literature.rockwellautomation.com/idc/groups/literature/documents/td/1756-td003_-en-e.pdf                                 |
            | Installation Guide    | https://literature.rockwellautomation.com/idc/groups/literature/documents/in/1756-in603_-en-p.pdf                                 |
            | User Manual           | https://literature.rockwellautomation.com/idc/groups/literature/documents/um/enet-um001_-en-p.pdf                                 |
            | Product Family Page   | https://ab.rockwellautomation.com/Programmable-Controllers/ControlLogix/5580-Controllers                                          |
            | Find Downloads        | https://compatibility.rockwellautomation.com/Pages/MultiProductSelector.aspx?crumb=111&keyword=1756-EN2T%20Unsigned%20Firmware    |
