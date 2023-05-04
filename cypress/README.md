Intro:
This is test task for Pecode made by Bohdan Potapenko. It includes 4 automation test on Cypress.
For testing purposes was selected marketplace https://allo.ua/

Installation:

1. For further checking you need to clone the project
2. Install node modules
3. Install the latest version of cypress via npm install cypress
4. Install plugin ImageSnapshotPlugin via npm install --save-dev cypress-image-snapshot


Test Execution:

I set some custom commands in my package.json file for test execution:
1. npm run cy:open - opens Cypress UI, where you can find all spec files and run them
2. npm run cy:run - runs all the tests in headless mode in your terminal + creates the snapshot report to my "CheckLogin(Fail test)"
3. Test with MatchImageSnapshot verifies that page doesn't have new/changed elements on the page. If so, there will be
   snapshot report with red cross and failed test.
   
Troubleshooting:

   Some tests may fail because of speed of Cypress. However, I resolved some issues found on my side.
   But you may face some new of them. Please rerun spec files in fail case to ensure it was not a code bug.
