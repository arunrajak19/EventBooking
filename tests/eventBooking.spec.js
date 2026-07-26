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
  //   await page.locator("#nav-events").click();

  //   console.log(await allEventCards.count());

  //   expect(await allEventCards.first()).toBeVisible();

  //   console.log(await addedCard.locator("h3").textContent());
  //   await expect(addedCard).toBeVisible({ timeout: 5000 });
  const addedCardAfterBooking = await eventsPage.findEventCard(eventName);

  //   // Count seatsAfterBooking
  const seatsAfterBooking = await eventsPage.availableSeats(addedCardAfterBooking);
  //   const seatsAfterBooking = await addedCard.getByText(" seats available").textContent();
  //   console.log(seatsAfterBooking);

  //   const seatCountAfter = seatsAfterBooking.split(" ")[0];
    console.log("seat Count After Booking: ", seatCountAfter);
  await eventsPage.assertSeatsBeforeAndAfterBooking(seatsBeforeBooking, seatsAfterBooking);
  //   await expect(seatsBeforeBooking === seatsAfterBooking - 1)


  // await page.pause();


});