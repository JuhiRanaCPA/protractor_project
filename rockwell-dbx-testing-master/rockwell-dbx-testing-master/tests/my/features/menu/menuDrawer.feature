@MenuDrawer
@MenuDrawerJenkins03
@Smoke @Regression
Feature: Menu Drawer
    As a user
    I want to use the menu drawer to navigate
    So I can travel through the site quickly

    Background: User is logged in
        Given the user clicks on the menu button

    Scenario Outline: Menu Drawer Navigation
        When the user clicks on the menu button
        Then the User should verify <LinkName> can navigate to <SiteUrl>

        Examples:
#            | LinkName                                | SiteUrl                                                                               |
#            | Knowledgebase                           | https://rockwellautomation.custhelp.com/                                           |
#            | Literature Library                      | http://www.rockwellautomation.com/global/literature-library/overview.page             |
#            | Product Compatibility & Download Center | http://compatibility.rockwellautomation.com/Pages/MultiProductSelector.aspx?crumb=111 |
#            | Sales & Partners                        | http://www.rockwellautomation.com/global/sales-partners/overview.page?                |
#            | News & Events                           | http://www.rockwellautomation.com/global/news/newsroom.page?                          |

    Scenario: Menu Drawer BOM Navigation
        When the User clicks on My Bill of Materials
        Then the user should navigate to Bill of Materials landing page

    Scenario: Menu Drawer Apps Navigation
        When the User clicks on My Apps
        Then the user should navigate to the empty My Apps page

    Scenario: Menu Drawer Repairs Navigation
        When the User clicks on My Repairs
        Then the user should navigate to Repairs landing page

    Scenario: Menu Drawer App Store Navigation
        When the User clicks on App Store
        Then the user should navigate to the App store landing page

    Scenario: Menu Drawer Help Center Navigation
        When the user clicks on the My Help Center
        Then the user should navigate to the Help Center landing page

    Scenario: Menu Drawer Account Navigation
        When the User clicks on My Account
        Then the user should navigate to My Account landing page
        And the user clicks on the menu button
