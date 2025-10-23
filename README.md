# QA_JomMakan

Automated and manual testing suite for the JomMakan web application.
Can checked the food randomizer here: https://jommakan.app/

This repository contains end-to-end(E2E),Regression, and core test suites built using javascript on Playwright.

#📁 Folder Structure
tests/
├── E2E/ # End-to-End test cases*
├── Regression/ # Regression test cases*
└── TestSuite/ # Core functional test cases (main test scripts)

- To be added and created

#▶️ Run Tests

### Run all test

```
 npx playwright test
```

### Run a specific test file

```
 npx playwright test tests/TestSuite/<test-file>.spec.js
```

### Run tests in UI mode

```
 npx playwright test --ui
```

#📊 View Test Report

```
 npx playwright show-report
```

#▶️ TL:DR Folder Structure
| Folder | Purpose | Example Test Type |
| ------------ | ---------------------------------- | ------------------------------------ |
| `E2E` | Full user journey tests | Login → Add to cart → Checkout |
| `Regression` | High-priority tests from past bugs | Payment validation |
| `TestSuite` | Core functions | Verify homepage, navigation, buttons |
