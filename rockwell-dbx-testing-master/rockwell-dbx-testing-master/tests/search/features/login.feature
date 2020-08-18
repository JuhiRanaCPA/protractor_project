Feature: Homepage
  As a user
  I want to login
  So that I can access Search

#this is a mock scenario
#created just to run 'test' stage in jenkins
  Scenario: User Log In
    Given User goes to Search Page
    When User is not loggedIn
    Then User should navigate to SignIn Page