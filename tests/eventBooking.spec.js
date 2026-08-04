const { test, expect } = require('@playwright/test');

const { PageObjectManager } = require('../pageObjects/PageObjectManager')

const dataSet = JSON.parse(JSON.stringify(require('../utils/EventBookingTestData.json')));
let eventName;
let eventsPage;
let seatsBeforeBooking;
let bookingref;

test('create Event booking', async ({ page }) => {

  const pageObjectManager = new PageObjectManager(page);

  await test.step('Login', async () => {
    const loginPage = pageObjectManager.getLoginPage();
    await loginPage.gotoPage();
    await loginPage.login(dataSet.emailId, dataSet.password);
  })

  await test.step('Create a new event', async () => {
    const createNewEventPage = pageObjectManager.getCreateNewEventPage();
    eventName = await createNewEventPage.createNewEvent();
    await createNewEventPage.assertEventName(eventName);
  })

  await test.step('Find the event card and capture seats', async () => {
    eventsPage = pageObjectManager.getEventsPage();
    await eventsPage.openEvents();
    const addedCard = await eventsPage.findEventCard(eventName);
    seatsBeforeBooking = await eventsPage.availableSeats(addedCard);
    // click on book now
    await eventsPage.bookNow(addedCard);
  })

  await test.step('Book ticket', async () => {
    const bookTickets = pageObjectManager.getBookTickets();
    await bookTickets.assertTicketCountIsOne();
    await bookTickets.fillDetails();
    bookingref = await bookTickets.bookingRefrence();
    await bookTickets.assertBookingRef();
  })

  // step 6 :- My booking page
  await test.step('My booking page', async () => {
    const myBookings = pageObjectManager.getMyBookings();
    const allBookedCards = await myBookings.bookingCards();
    await myBookings.myBookedCard(allBookedCards, bookingref, eventName);

    // Navigate back to events
    await eventsPage.openEvents();
    const addedCardAfterBooking = await eventsPage.findEventCard(eventName);
    const seatsAfterBooking = await eventsPage.availableSeats(addedCardAfterBooking);
    await eventsPage.assertSeatsBeforeAndAfterBooking(seatsBeforeBooking, seatsAfterBooking);
  })
});