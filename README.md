# 🎟️ Event Booking Automation Framework

A robust **End-to-End Test Automation Framework** built using **Playwright with JavaScript**. This project automates the complete Event Booking workflow by following the **Page Object Model (POM)** design pattern, making the framework scalable, reusable, and easy to maintain.

---

# 📌 Project Overview

The framework automates the following user journey:

- User Login
- Create New Event
- Verify Event Creation
- Search Created Event
- Book Ticket
- Verify Booking Reference
- Verify Booking in My Bookings
- Validate Available Seats Before & After Booking

The framework is designed using industry-standard automation practices and can be easily extended for additional test scenarios.

---

# 🚀 Features

- ✅ End-to-End Event Booking Flow
- ✅ Page Object Model (POM)
- ✅ Modular & Reusable Code
- ✅ Playwright Test Runner
- ✅ Cross Browser Support
- ✅ HTML Reports
- ✅ Allure Reporting
- ✅ Easy Maintenance
- ✅ Clean Project Structure

---

# 🛠 Tech Stack

- JavaScript (ES6)
- Node.js
- Playwright
- Playwright Test Runner
- Allure Playwright

---

# 📂 Project Structure

```
EventBooking/
│
├── pageObjects/
│   ├── LoginPage.js
│   ├── CreateNewEventPage.js
│   ├── EventsPage.js
│   ├── BookTickets.js
│   └── MyBookings.js
│
├── tests/
│   ├── eventBooking.spec.js
│   └── example.spec.js
│
├── test-results/
├── playwright-report/
├── allure-results/
├── allure-report/
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/<your-github-username>/EventBooking.git
```

## Navigate to Project

```bash
cd EventBooking
```

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Running Tests

## Run all tests

```bash
npx playwright test
```

## Run a specific test

```bash
npx playwright test tests/eventBooking.spec.js
```

## Run tests in headed mode

```bash
npx playwright test --headed
```

## Run tests in UI mode

```bash
npx playwright test --ui
```

## Run tests in debug mode

```bash
npx playwright test --debug
```

---

# 📋 Automated Test Scenario

The automation performs the following steps:

1. Launch the application.
2. Login using valid credentials.
3. Create a new event.
4. Verify the event is created successfully.
5. Navigate to the Events page.
6. Capture available seats before booking.
7. Book a ticket.
8. Verify booking reference is generated.
9. Verify booking is displayed in **My Bookings**.
10. Return to Events page.
11. Validate available seats decreased after booking.

---

# 🏗 Framework Design

The framework follows the **Page Object Model (POM)** architecture.

Each page object contains:

- Locators
- Page Actions
- Assertions
- Reusable Methods

### Benefits

- Better Code Reusability
- Easy Maintenance
- High Readability
- Low Code Duplication
- Easy Scalability

---

# 📊 Reports

## Playwright HTML Report

Execute the tests:

```bash
npx playwright test
```

Open the HTML report:

```bash
npx playwright show-report
```

---

## Allure Report

### Install dependencies

```bash
npm install
```

### Verify Allure Playwright installation

```bash
npm ls allure-playwright
```

### Execute the tests

```bash
npx playwright test
```

### Generate and open the report instantly

```bash
allure serve allure-results
```

### Generate a static Allure report

```bash
allure generate ./allure-results --clean
```

### Open the generated report

```bash
allure open ./allure-report
```

---

# 📌 Prerequisites

- Node.js 18 or above
- npm
- Playwright
- Java Runtime (Required for Allure)
- Allure Command Line

---

# 💡 Best Practices Followed

- Page Object Model (POM)
- Reusable Methods
- Proper Locator Strategy
- Assertions using Playwright Expect
- Clean Folder Structure
- Modular Test Design
- Readable & Maintainable Code

---

# 📈 Future Enhancements

- Data-Driven Testing
- API Integration
- CI/CD using GitHub Actions
- Parallel Execution
- Environment Configuration
- Docker Support
- Jenkins Integration

---

# 👨‍💻 Author

**Arun Rajak**

Automation Test Engineer

GitHub: https://github.com/arunrajak19

LinkedIn: https://www.linkedin.com/in/arun-rajak-08b8401b6/

---

# ⭐ If you found this project helpful

Please consider giving this repository a **Star ⭐** on GitHub.