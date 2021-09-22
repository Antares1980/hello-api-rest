const pactum = require('pactum');
const {Given, Then, When, Before} = require('@cucumber/cucumber');

let spec = pactum.spec();

Before(function() {
  spec = pactum.spec();
});


Given('I make a Get generic request to {string}', function(string) {
  // Write code here that turns the phrase above into concrete actions
  spec.get(string);
});

Given('I make a Get request to {string}', function(string) {
  // Write code here that turns the phrase above into concrete actions
  spec.get(string);
});


When('I receive a response', async function() {
  // Write code here that turns the phrase above into concrete actions
  await spec.toss();
});

Then('Response should be {string}', function(string) {
  // Write code here that turns the phrase above into concrete actions
  spec.response().should.have.status(200);
});

Then('response body should contain {string}', function(string) {
  // Write code here that turns the phrase above into concrete actions
  spec.response().should.have.bodyContains('Hello entity. It\'s ');
});

Then('Response should send the balance', function() {
  // Write code here that turns the phrase above into concrete actions
  spec.response().should.have.bodyContains('balance');
});

Then('reponse should send the account', function() {
  // Write code here that turns the phrase above into concrete actions
  spec.response().should.have.bodyContains('account');
});

Then('response should send {string}', function(string) {
  // Write code here that turns the phrase above into concrete actions
  spec.response().should.have.bodyContains('Hello: ');
});

Then('response should send the name', function() {
  // Write code here that turns the phrase above into concrete actions
  spec.response().should.have.bodyContains('Name:');
});
