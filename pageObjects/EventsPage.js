const { expect } = require('@playwright/test');

class EventsPage {

    constructor(page) {
        this.page = page;
        this.eventsTab = page.locator("#nav-events");
        this.eventCard = page.locator("#event-card");

    }

    async openEvents() {
        await this.eventsTab.click();
        await this.page.waitForLoadState("networkidle");
    }

    async findEventCard(eventName) {

        const allEventCards = await this.eventCard;
        console.log(await allEventCards.count());

        await this.page.waitForSelector('#event-card', { state: 'visible', timeout: 5000 });

        expect(await allEventCards.first()).toBeVisible();

        // Find the added card
        const addedCard = await allEventCards.filter({ hasText: eventName });
        console.log(await addedCard.getByText(eventName).textContent());
        await expect(addedCard).toBeVisible({ timeout: 5000 });

        return addedCard;
    }

    async availableSeats(addedCard) {
        const totalSeats = await addedCard.getByText(" seats available").textContent();
        console.log(totalSeats);

        const seatCount = totalSeats.split(" ")[0];

        return seatCount;
    }

    async bookNow(addedCard){
         await addedCard.getByTestId("book-now-btn").click();
    }

    async assertSeatsBeforeAndAfterBooking(seatsBeforeBooking, seatsAfterBooking){
        await expect(seatsBeforeBooking === seatsAfterBooking - 1);
    }
}

module.exports = { EventsPage }