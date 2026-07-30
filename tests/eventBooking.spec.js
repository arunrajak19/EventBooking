const { test, expect } = require('@playwright/test');

const { PageObjectManager } = require('../pageObjects/PageObjectManager')

const dataSet = JSON.parse(JSON.stringify(require('../utils/EventBookingTestData.json')));
test('create Event booking', async ({ page }) => {

  const pageObjectManager = new PageObjectManager(page);
  // Step 1 — Login

  const loginPage = pageObjectManager.getLoginPage();
  await loginPage.gotoPage();

  await loginPage.login(dataSet.emailId, dataSet.password);

  // Step 2 — Create a new event
  const createNewEventPage = pageObjectManager.getCreateNewEventPage();
  const eventName = await createNewEventPage.createNewEvent();

  // Assert if event has been added
  await createNewEventPage.assertEventName(eventName);

  //   // Step 3 — Find the event card and capture seats

  const eventsPage = pageObjectManager.getEventsPage();
  await eventsPage.openEvents();
  const addedCard = await eventsPage.findEventCard(eventName);

  // Count seatsBeforeBooking
  const seatsBeforeBooking = await eventsPage.availableSeats(addedCard);

  //   // Step 4 :- click on book now

  await eventsPage.bookNow(addedCard);

  //   // Step 5: Book ticket
  const bookTickets = pageObjectManager.getBookTickets();
  await bookTickets.assertTicketCountIsOne();
  await bookTickets.fillDetails();

  //   // get the booking reference
  const bookingref = await bookTickets.bookingRefrence();
  await bookTickets.assertBookingRef();

  // step 6 :- My booking page
  const myBookings = pageObjectManager.getMyBookings();
  const allBookedCards = await myBookings.bookingCards();
  await myBookings.myBookedCard(allBookedCards, bookingref, eventName);

  //   // Navigate back to events

  await eventsPage.openEvents();
  const addedCardAfterBooking = await eventsPage.findEventCard(eventName);

  const seatsAfterBooking = await eventsPage.availableSeats(addedCardAfterBooking);

  await eventsPage.assertSeatsBeforeAndAfterBooking(seatsBeforeBooking, seatsAfterBooking);

});