@Homepage
@Smoke @Regression
Feature: Homepage - Search, Manage, Browse
  As a user
  I want to use the Search, Manage and Browse features
  To view different parts of the site

  # If user needs to navigate to homepage uncomment this
  # Background:
  #   Given User is on the homepage

  Scenario: Check Search tab
    When User clicks on Search
    Then a Search bar should appear

  Scenario: Check Manage tab
    When User clicks on Manage
    Then a Manage bar should appear that has links to BOM, Apps, Repair, Account

  Scenario: Check Browse tab
    When User clicks on Browse
    Then a Browse menu should appear with Digital Libraries, Product Services, and Digital Tools links

  Scenario Outline: Check links in the Browse tab
    When User clicks on Browse
    Then User should be able to navigate to <SiteUrl> on click on <SiteName>

    Examples:
      | SiteName                        | SiteUrl                                                                                                                   |
      | Knowledgebase                   | https://rockwellautomation.custhelp.com/                                                                                  |
      | Literature Library              | http://www.rockwellautomation.com/global/literature-library/overview.page                                                 |
      | Product Lifecycle Status        | http://www.rockwellautomation.com/global/solutions-services/capabilities/migration-solutions/product-search/overview.page |
      | Check for Product Compatibility | http://compatibility.rockwellautomation.com/Pages/MultiProductSelector.aspx?crumb=111                                     |
      | Software Downloads              | https://download.rockwellautomation.com/webupdates/enter.aspx                                                             |
      | Product Directory               | http://ab.rockwellautomation.com/allenbradley/productdirectory.page?                                                      |
      | Support Services                | http://www.rockwellautomation.com/global/support/overview.page                                                            |
      # | Repair Services                 | https://repair.rockwellautomation.com/                                                                                    |
      | Sales and Partners | http://www.rockwellautomation.com/global/sales-partners/overview.page?    |
      | Events             | http://www.rockwellautomation.com/global/events/overview.page?            |
      | Trainings          | http://www.rockwellautomation.com/global/products/training/overview.page? |
