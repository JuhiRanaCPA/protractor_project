@BOMQuotes
@BOMDist
Feature: BOM Quotes Navigation
    As a User in myrockwell in the BOM Dist. MVE pilot group 
    I want to navigate from a BOM to Rexel's Site and I want to navigate from an existing submitted quote to Rexel's site
    So I can ensure that the flow to Rexel from bom and submitted quotes functions properly
    
    Scenario: Navigate to Rexel's Site from an existing Submitted Quote
        Given user is on the BOM landing page
        # exists
        And user clicks on an existing BOM named "Navigate from Submitted Quote"
        And user clicks on the Submitted Quote # link
        When user clicks the Continue button on the Continue to Distributor modal
        Then user is taken to a new tab with a Rexel URL loaded  
        And user sees a Submitted Quote # in the URL
        # for example: https://webshop-uat.rexel.com/usg/my-account/my-quotes/quotes/{quote#}
        
    Scenario: Navigate to Rexel's Site from an existing BOM
        Given user is on the BOM landing page
        # exists
        And user clicks on an existing BOM named "Submit Me for a Quote"
        And user clicks Quote-Order button on the BOM details page 
        When user clicks the Continue button on the Continue to Distributor modal
        Then user is taken to a new tab with a Rexel URL loaded 
        And user sees a Transaction ID in the URL