/*
 * Addition.feature
 * Step definitions for Feature: 'Addition'
 *
 * Auto-generated using Kyuri: http://github.com/nodejitsu/kyuri
 */
 
var kyuri = require('kyuri'),
    Steps = require('kyuri').Steps;

//
// Step definitions for Scenario: Add two numbers
//
Steps.Given(/^GIVEN I have entered 50 into the calculator$/, function (topic) {
  return function () {
    // Always use or extend the same topic since you don't 
    // know how nested or not nested you are at this point
    topic = topic || {};
    
    /* Put your Given code here. */
    
    return topic;
  };
});

Steps.And(/^AND I have entered 70 into the calculator$/, function (topic) {
  return function () {
    // Always use or extend the same topic since you don't 
    // know how nested or not nested you are at this point
    topic = topic || {};
    
    /* Put your And code here. */
    
    return topic;
  };
});

Steps.When(/^WHEN I press add$/, function (topic) {
  return function () {
    // Always use or extend the same topic since you don't 
    // know how nested or not nested you are at this point
    topic = topic || {};
    
    /* Put your When code here. */
    
    return topic;
  };
});

Steps.Then(/^THEN the result should be 120 on the screen$/, function (topic) {
  return function () {
    /* Put your assert messages for this Then here */
  };
});

Steps.export(module);