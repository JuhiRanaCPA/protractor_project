@Logout
@Homepage
@BomJenkins02
@MenuDrawerJenkins03
@NewUserValidation
@RegProdList
@myContactUpdate
@HelpCenter
@VisitApps
@PDT
@Smoke @Regression
Feature: Logout
    As a user
    I want to use the menu sign out button
    to sign out of myRockwell account

    Scenario: User is signing out
        Given A user is logged into their myRockwell account
        When the user clicks on the menu button
        When The user clicks on the Sign Out link
        Then User should navigate to the sign in page