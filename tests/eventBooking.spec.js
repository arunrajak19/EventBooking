const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pageObjects/LoginPage')
const { CreateNewEventPage } = require('../pageObjects/CreateNewEventPage');
const { EventsPage } = require('../pageObjects/EventsPage');
const { BookTickets } = require('../pageObjects/BookTickets');
const { MyBookings } = require('../pageObjects/MyBookings');

test('create Event booking', async ({ page }) => {

  const emailId = "lionel@gmail.com";
  const password = "Messi@10";

  // Step 1 — Login

  const loginPage = new LoginPage(page);
  await loginPage.gotoPage();

  await loginPage.login(emailId, password);

  // Step 2 — Create a new event
  const createNewEventPage = new CreateNewEventPage(page);
  const eventName = await createNewEventPage.createNewEvent();

  // Assert if event has been added
  await createNewEventPage.assertEventName(eventName);

  //   // Step 3 — Find the event card and capture seats

  const eventsPage = new EventsPage(page);
  await eventsPage.openEvents();
  const addedCard = await eventsPage.findEventCard(eventName);

  // Count seatsBeforeBooking
  const seatsBeforeBooking = await eventsPage.availableSeats(addedCard);
  console.log(seatsBeforeBooking);

  //   // Step 4 :- click on book now

  await eventsPage.bookNow(addedCard);

  //   // Step 5: Book ticket
  const bookTickets = new BookTickets(page);
  await bookTickets.assertTicketCountIsOne();
  await bookTickets.fillDetails();

  //   // get the booking reference
  const bookingref = await bookTickets.bookingRefrence();
  console.log(bookingref);
  await bookTickets.assertBookingRef();

  // step 6 :- My booking page
  const myBookings = new MyBookings(page);
  const allBookedCards = await myBookings.bookingCards();
  await myBookings.myBookedCard(allBookedCards, bookingref, eventName);

  //   // Navigate back to events

  await eventsPage.openEvents();
  const addedCardAfterBooking = await eventsPage.findEventCard(eventName);

  const seatsAfterBooking = await eventsPage.availableSeats(addedCardAfterBooking);

    console.log("seat Count After Booking: ", seatsAfterBooking);
  await eventsPage.assertSeatsBeforeAndAfterBooking(seatsBeforeBooking, seatsAfterBooking);

});