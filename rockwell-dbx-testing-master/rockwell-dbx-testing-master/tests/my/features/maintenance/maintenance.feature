Feature: Maintenance
	As a user
	I want to test the mintenance screen with BOM API
	To make sure it's working properly when an API is returning 503.

Scenario: User is on the homepage
	Given user is on the BOM landing page
	Then the Maintenance screen should be visible