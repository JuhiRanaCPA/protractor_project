Feature: Login
  As a user
  I want to login
  So that I can access MyRockwell

  @Login
  @Homepage
  @Bom
  @BOMOrders
  @BOMQuotes
  @BOMDist
  @CSM
  @Repairs
  @SearchRepairs
  @MyEquipment
  @PowerBI
  @Services
  @Search
  @HelpCenter
  @PDT
  @RegProdList
  @ServicesWithAccess
  @BOMSecurity
  @ProductAvailability
  @VisitApps
  @NewUserValidation
  @myContactUpdate
  @BomJenkins02
  @MenuDrawerJenkins03
  @Smoke @Regression @Ready @CAPM
  Scenario: User is not logged in
    Given User navigates to the myRockwell site
    When User is not logged in
    Then User should navigate to the sign in page
    When User enters username and password
    And User clicks sign in
    Then User should be directed to myRockwell home page

  # For hooks to work I had to create same scenario multiple times.
  # Need to find a better way

  @MyEquipmentIBEOnlyUser
  Scenario: User is not logged in
    Given User navigates to the myRockwell site
    When User is not logged in
    Then User should navigate to the sign in page
    When User enters username and password
    And User clicks sign in
    Then User should be directed to myRockwell home page

  @MyEquipmentRAAMPOnlyUser
  Scenario: User is not logged in
    Given User navigates to the myRockwell site
    When User is not logged in
    Then User should navigate to the sign in page
    When User enters username and password
    And User clicks sign in
    Then User should be directed to myRockwell home page

  @MyEquipmentIBEAndRAAMPUser
  Scenario: User is not logged in
    Given User navigates to the myRockwell site
    When User is not logged in
    Then User should navigate to the sign in page
    When User enters username and password
    And User clicks sign in
    Then User should be directed to myRockwell home page
