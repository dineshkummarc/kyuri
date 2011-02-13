Feature: Login
	In order to login
	As a user
	I want to be able to enter my username and password
	
	Scenario: Successful user login
		Given I have entered my username
		And I have entered my password
		When I press login
		Then the resulting screen should say "Welcome user"
