# Automation_Bootcamp
Cypress UI Automation Bootcamp
Cypress project for QualityWorks UI Automation Bootcamp

Dependencies
NodeJS v12, v14 or above
NPM v6 or above
Chrome browser
Getting Started
Clone the repository & install dependencies

$ git clone 
$ cd cypress-ui-automation-bootcamp
$ npm install
Folder Structure
cypress/e2e/page: Page object files which include element selectors and functions that are used in tests.
cypress/e2e/test: Test files which include the actual tests.
Execute tests
Execute the Cypress GUI

npx cypress open

Execute the Cypress via commandline

npx cypress run

Executes all tests in the Chrome browser and generates a Mochawesome report.

npm test

Execute tests in a different browser
npx cypress run --browser firefox

N.B. The browser must be installed on the device.

