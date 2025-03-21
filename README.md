# posit-playwright-e2e-tests
# Automated Test Case Solution

This project contains automated test cases for https://posit.cloud/, built using **Playwright** with **TypeScript**. The tests are designed to validate key functionality and ensure the stability of the application.

## Prerequisites

Before running the automated tests, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (Package Manager)
- [Playwright](https://playwright.dev/) - For end-to-end testing.
- [dotenv](https://www.npmjs.com/package/dotenv) - To manage environment variables.

## Environment Setup and Installation

### **1. Clone this repository**
git clone https://github.com/NataliiaDanyliv/posit-playwright-e2e-tests.git.

### **2. Install dependencies**
Install dependencies listed in the package.json file. Run: npm install.

### **3. Set up environment variables**
- 🚨 The **.env** file should not be committed to version control as it may contain sensitive data.
However, for convenience, it has been temporarily committed to simplify running the tests. 

### **4. Run the test**
- Run all tests via CLI: **npx playwright test**.
OR via CLI.
- Run tests via npm script (as defined in package.json): **npm run test**.
- Run a specific test file: **npx playwright test tests/workspace-project-creation.spec.ts**.
- Run tests in headed mode (for debugging): **npx playwright test --headed**.


## Project Structure

- **`/tests`**: Contains the test scripts for the application.
  - **`workspace-project-creation.spec.ts`**: Holds the test case to create a new Space and a new RStudio project.
- **`/helper`**:Contains reusable helper objects such as locators. This allows you to define locators in one place and reference them across multiple tests.
  - **`locators.ts`**: Stores the locators for various elements in your application.
- **`/utils`**: Stores reusable scripts that can be used in different parts of your tests.
  - **`customCommands.ts`**: Holds reusable custom commands that can be used across different test cases.
  - **`customCommands.d.ts`**: TypeScript declaration file for defining custom commands' types.

- **`/node_modules`**: This folder contains all the installed dependencies. It's generated automatically when running `npm install`.

- **`/playwright.config.ts`**: Configuration file for Playwright. This includes settings like browser options, base URL, and other configuration settings.

- **`/.env`**: Stores environment variables (never commit this file to version control). Useful for storing sensitive information like API keys, credentials, and configuration settings.

- **`/package.json`**: This file contains metadata about the project, including dependencies, scripts, and other configurations.

- **`/tsconfig.json`**: TypeScript configuration file. It configures how TypeScript should compile the project.

- **`/global.d.ts`**: Extends the `NodeJS.ProcessEnv` interface to support custom environment variables in the project.

- **`/README.md`**: This file. Provides instructions and documentation for the project.

## Generating and Viewing Reports
After running tests, generate a report: **npx playwright show-report**.

## Resources
- Playwright Documentation](https://playwright.dev/docs/intro)
- Playwright API Reference](https://playwright.dev/docs/api/class-playwright)


### Recommended VS Code Extensions
For a better development experience, install:

- 🟠 Better Comments - Enhances comment readability
- 🟡 Material Icon Theme - Improves file/folder visibility
- 🟢 Playwright Snippets - Provides useful Playwright code snippets
- 🔵 NPM & npm Intellisense - Auto-completes package names in package.json
