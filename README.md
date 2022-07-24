# Playwright-Project

This is an Web-Automation project based on Playwright automation framework. Please note the below small pointers:
- By default the report is generated in the html format.
- In order to generate allure reports, please make sure that allure is installed loaclly in the machine and PATH variables are set and follow the steps mentioned in the "Generation of Allure Reports" of the readme. 
- By default, all the test cases run in an headless manner.



Pre-requisites for running the project:
- Node has to be installed. Preferred version is (v 16.13.1 or higher)

Please take note of the below commands in order to run the project (Execution Section):
- npx playwright install -> Installs the dependencies and sets up the project locally
- npx playwright test -> Runs all the test cases in the test suite and generates the test report (same tests will be executed in chrome, firefox and safari)
- npx playwright test --headed -> Runs all the cases in a headed manner
- npx playwright test --project=***  -> Runs the tests in a specific browser only which are given below:
    - chromium : Runs the tests in chrome
    - firefox : Runs the tests in firefox
    - webkit : Runs the tests in safari

Generation of Allure Reports:
- npx playwright test --reporter=line,allure-playwright -> Runs all the tests and generates the Allure Reports in the line format
- allure generate ./allure-results --clean -> Generates the allure reports in html format
- allure open allure-report -> Open allure Reports locally