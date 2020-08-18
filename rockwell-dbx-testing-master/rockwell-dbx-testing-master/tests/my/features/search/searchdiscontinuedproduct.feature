@Search
@Smoke @Regression

Feature: Search for a product that is discontinued or end of life, expand the product card, close the product card
    As a User searching for a product with the lifecylce status equal to "Discontinued" or "End Of Life"
    I want be able to expand and collapse the product card to see the replacment data for that product
    So I can view important replacement data about products I care about

    Scenario Outline: Perform a search for a Discontinued or End Of Life Product, Open the Replacement Data section on the product card, close it
        Given User navigates to the myRockwell site
        And User searches for <DiscontinuedProduct>
        And User clicks the search icon
        When User is viewing a product with a lifecylce status that is <LifeCycleStatus>
        And User clicks on the caret next to the lifecycle status value
        Then Card should show a value in the <Field 1> field
        And Card should show a value in the <Field 2> field
        And Card should show a value in the <Field 3> field
        And User clicks on the caret next to the lifecycle status value
        Then Card should close to show the default closed version of the product card

        Examples:
            | DiscontinuedProduct | LifeCycleStatus | Field 1           | Field 2              | Field 3             |
            | 1756-DH485          | Discontinued    | Discontinued Date | Replacement Category | Replacement Product |
            | 1760-L12AWA-ND      | Discontinued    | Discontinued Date | Replacement Category | Replacement Product |
            | 837E-DC1BN2A2AD4    | End Of Life     | Discontinued Date | Replacement Category | Replacement Product |
            | 837-A4AX231         | End Of Life     | Discontinued Date | Replacement Category | Replacement Product |
