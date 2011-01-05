/*
 * Login.feature
 * Step definitions for Feature: 'Login'
 *
 * Auto-generated using Kyuri: http://github.com/nodejitsu/kyuri
 */
 
var kyuri = require('kyuri'),
    Steps = require('kyuri').Steps;

//
// Step definitions for Scenario: Successful user login
//
Steps.Given(/^GIVEN I have entered my username$/, function (topic) {
  return function () {
    // Always use or extend the same topic since you don't 
    // know how nested or not nested you are at this point
    topic = topic || {};
    
    /* Put your Given code here. */
    
    return topic;
  };
});

Steps.And(/^AND I have entered my password$/, function (topic) {
  return function () {
    // Always use or extend the same topic since you don't 
    // know how nested or not nested you are at this point
    topic = topic || {};
    
    /* Put your And code here. */
    
    return topic;
  };
});

Steps.When(/^WHEN I press login$/, function (topic) {
  return function () {
    // Always use or extend the same topic since you don't 
    // know how nested or not nested you are at this point
    topic = topic || {};
    
    /* Put your When code here. */
    
    return topic;
  };
});

Steps.Then(/^THEN the resulting screen should say "Welcome user"$/, function (topic) {
  return function () {
    /* Put your assert messages for this Then here */
  };
});

Steps.export(module);