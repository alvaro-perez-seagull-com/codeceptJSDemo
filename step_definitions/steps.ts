/// <reference types="codeceptjs" />

const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  I.amOnPage('/');
  I.wait(3);
});

When(/^I do something$/, function () {
  // Your step implementation here
})