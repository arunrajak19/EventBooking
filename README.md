# EventBooking
# 🎟️ Event Booking Automation Framework

A Playwright-based end-to-end automation framework for testing an Event Booking application. The framework follows the **Page Object Model (POM)** design pattern, making the test suite modular, reusable, and easy to maintain.

---

## 🚀 Features

- End-to-End Event Booking workflow
- User Login Automation
- Event Creation
- Event Search & Validation
- Ticket Booking
- Booking Reference Validation
- My Bookings Verification
- Available Seats Validation
- Page Object Model (POM) Architecture
- Built using Playwright Test Runner

---

## 🛠 Tech Stack

- JavaScript
- Node.js
- Playwright
- Playwright Test Runner

---

## 📂 Project Structure

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
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/EventBooking.git
```

Navigate to the project

```bash
cd EventBooking
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/eventBooking.spec.js
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Run tests in UI mode

```bash
npx playwright test --ui
```

---

## 📋 Test Scenario

The automation covers the following workflow:

1. Login using valid credentials.
2. Create a new event.
3. Verify the event is successfully created.
4. Navigate to the Events page.
5. Capture available seats before booking.
6. Book a ticket for the event.
7. Verify booking reference is generated.
8. Verify booking appears in **My Bookings**.
9. Return to the Events page.
10. Validate that the available seats decrease after booking.

---

## 🏗 Framework Design

The framework follows the **Page Object Model (POM)** design pattern.

Each page contains its own:

- Locators
- Actions
- Assertions

This improves:

- Maintainability
- Reusability
- Readability
- Scalability

---

## 📊 Reports

After execution, Playwright generates an HTML report.

Open the report using:

```bash
npx playwright show-report
```

---

## 📌 Prerequisites

- Node.js 18+
- npm
- Playwright

---


## 👨‍💻 Author

**Arun Rajak**

GitHub: https://github.com/<your-username>

---
