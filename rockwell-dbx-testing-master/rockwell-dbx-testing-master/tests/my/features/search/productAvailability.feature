@ProductAvailability
Feature: Perform a Search, Click Product Availability  
    As a User in myrockwell in the Product Availability pilot group 
    I want to check the stock availability of a product on myrockwell product search
    So I can make better product decisions based on what is in stock now
    
    Scenario: Perform a Search on Products Tab, Click Check availability
        Given User navigates to the myRockwell site
        # exists
        And User searches for "Powerflex"
        # exists
        And User clicks the search icon
        # exists
        And at least 1 product displays in the search results
        # exists
        And the Check Availability button displays on the product cards
        When user clicks the Check Availability button on the first product
        Then user can see the product availability message 
        # Note: this can be any of the 4 messages: 1. In Stock 2. Out of Stock 3. Error 4. Data not Available 