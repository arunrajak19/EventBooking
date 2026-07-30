const { BookTickets } = require("./BookTickets");
const { CreateNewEventPage } = require("./CreateNewEventPage");
const { EventsPage } = require("./EventsPage");
const { LoginPage } = require("./LoginPage");
const { MyBookings } = require("./MyBookings");

class PageObjectManager {

    constructor(page) {

        this.page = page;
        this.loginPage = new LoginPage(page);
        this.createNewEventPage = new CreateNewEventPage(page);
        this.eventsPage = new EventsPage(page);
        this.bookTickets = new BookTickets(page);
        this.myBookings = new MyBookings(page)
    }

    getLoginPage() {
        return this.loginPage;
    }

    getCreateNewEventPage() {
        return this.createNewEventPage;
    }

    getEventsPage() {
        return this.eventsPage;
    }

    getBookTickets() {
        return this.bookTickets;
    }

    getMyBookings() {
        return this.myBookings;
    }
}

module.exports = { PageObjectManager };