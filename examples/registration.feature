Feature: Registration
	In order to register
	As a user
	I want to be able to enter my first name, last name, email address, and password
	
	Scenario: Successful Registration
		Given I have entered my first name
		And I have entered my last name
		And I have entered my email address
		And I have entered my password
		When I press register
		Then the resulting screen should say "Thank you for registering"
		
	Scenario: Missing First Name
		Given I have not entered my first name
		And I have entered my last name
		And I have entered my email address
		And I have entered my password
		When I press register
		Then the resulting screen should say "Missing first name"
		
	Scenario: Missing Last Name
		Given I have entered my first name
		And I have not entered my last name
		And I have entered my email address
		And I have entered my password
		When I press register
		Then the resulting screen should say "Missing last name"
		
	Scenario: Missing Email Address
		Given I have entered my first name
		And I have entered my last name
		And I have not entered my email address
		And I have entered my password
		When I press register
		Then the resulting screen should say "Missing email address"
		
	Scenario: Weak password
		Given I have entered my first name
		And I have entered my last name
		And I have entered my email address
		And I have entered a password less than 6 characters
		When I press register
		Then the resulting screen should say "Password is too weak"
	