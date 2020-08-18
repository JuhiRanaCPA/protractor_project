@Homepage
@Smoke @Regression
Feature: Homepage header
    As a user
    I want to be able to see the header
    So sthat I can access other Rockwell sites from within myRockwell Application

    Scenario Outline: Verify Header Links
        Given A user is on the myRockwell site
        When User observes the brand header
        Then User can view header logos <link> and verify <linkURL>

        Examples:
            | link        | linkURL                                                                          |
            | logo ra     | http://www.rockwellautomation.com/global/overview.page                           |
            | logo ab     | http://www.allenbradley.com                                                      |
            | logo ft     | https://www.rockwellautomation.com/global/products/factorytalk/overview.page     |

    @notMobile
    Scenario Outline: Verify Map Header Link
        Given A user is on the myRockwell site
        When User observes the brand header
        Then User can view header logos <link> and verify <linkURL>

        Examples:
            | link        | linkURL                                                                          |
            | icon-ic_map | /global/sales-partners/overview.page                                             |
