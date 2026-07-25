const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pageObjects/LoginPage')
const { CreateNewEventPage } = require('../pageObjects/CreateNewEventPage');
const {EventsPage} = require('../pageObjects/EventsPage');

test('create Event booking', async ({ page }) => {

  const emailId = "lionel@gmail.com";
  const password = "Messi@10";

  // Step 1 — Login

  const loginPage = new LoginPage(page);
  await loginPage.gotoPage();

  await loginPage.login(emailId, password);


  // await page.waitForLoadState('networkidle');


  // Step 2 — Create a new event
  const createNewEventPage = new CreateNewEventPage(page);
  const eventName = await createNewEventPage.createNewEvent();


  // Assert if event has been added
  await createNewEventPage.assertEventName(eventName);
  // await expect(page.getByText(eventName)).toBeVisible();

  //   // Step 3 — Find the event card and capture seats

  const eventsPage = new EventsPage(page);
  await eventsPage.openEvents();
  const addedCard = await eventsPage.findEventCard(eventName);

  // Count seatsBeforeBooking
  const seatCount = await eventsPage.seatBeforeBooking(addedCard);
  console.log(seatCount);

  //   // Step 4 :- click on book now

  //   await addedCard.getByTestId("book-now-btn").click();

  //   // Step 5: 
  //   // Assert ticket count is 1 by default
  //   await expect(await page.locator('#ticket-count')).toHaveText("1");

  //   // Fill details
  //   await page.getByLabel("Full Name").fill("Ronaldo");
  //   await page.locator("#customer-email").fill("email@gmail.com");
  //   await page.getByPlaceholder("+91 98765 43210").fill("1234567890");
  //   await page.getByText('Confirm Booking').click();

  //   // get the booking reference
  //   const bookingref = await page.locator(".booking-ref").textContent();
  //   console.log(bookingref);

  //   await expect(page.locator(".booking-ref")).toBeVisible();

  //   await page.locator('button').filter({ hasText: 'View My Bookings' }).click();

  //   await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings");

  //   const allBookedCards = await page.locator('#booking-card');

  //   // Assert 1st booking card is visible
  //   expect(await allBookedCards.first()).toBeVisible();

  //   // Assert card with your booking ref
  //   const myBookingCard = await allBookedCards.locator('.booking-ref').filter({ hasText: bookingref });
  //   await expect(myBookingCard).toHaveText(bookingref);
  //   console.log(await myBookingCard.textContent());

  //   const confirmYourEventName = await allBookedCards.getByRole('heading', { name: eventName })
  //   console.log(await confirmYourEventName.textContent());

  //   await expect(confirmYourEventName).toHaveText(eventName);

  //   // Navigate back to events
  //   await page.locator("#nav-events").click();

  //   console.log(await allEventCards.count());

  //   expect(await allEventCards.first()).toBeVisible();

  //   console.log(await addedCard.locator("h3").textContent());
  //   await expect(addedCard).toBeVisible({ timeout: 5000 });

  //   // Count seatsAfterBooking
  //   const seatsAfterBooking = await addedCard.getByText(" seats available").textContent();
  //   console.log(seatsAfterBooking);

  //   const seatCountAfter = seatsAfterBooking.split(" ")[0];
  //   console.log("seat Count After Booking: ", seatCountAfter);

  //   await expect(seatsBeforeBooking === seatsAfterBooking - 1)

  // await page.pause();


});