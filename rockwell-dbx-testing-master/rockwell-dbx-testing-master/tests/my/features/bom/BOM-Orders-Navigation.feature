@BOMOrders
@BOMDist
Feature: BOM Orders Navigation  
    As a User in myrockwell in the BOM Dist. MVE pilot group 
    I want to navigate from an existing submitted order to Rexel's site
    So I can ensure that the flow to Rexel from bom and submitted orders functions properly

    Scenario: Navigate to Rexel's Site from an existing Submitted Order
        Given user is on the BOM landing page
        # exists
        And user clicks on the Orders tab 
        And user clicks on the Submitted Order # link
        When user clicks the Continue button on the Orders Continue to Distributor modal
        Then user is taken to a new tab with a Rexel URL loaded and Submitted Order # in the URL
        # for example: https://webshop-uat.rexel.com/usg/my-account/orders/{order#}