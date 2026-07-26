const { expect } = require('@playwright/test');

class CreateNewEventPage {

    constructor(page) {
        this.page = page;
        this.adminTab = page.getByText('Admin');
        this.manageEvent = page.locator('a').filter({ hasText: 'Manage Events' });
        this.eventTitle = page.locator("#event-title-input");
        this.description = page.locator(" #admin-event-form textarea");
        this.category = page.locator("#category");
        this.venue = page.getByLabel("Venue");
        this.city = page.getByLabel('City');
        this.calender = page.locator('label');
        this.price = page.getByLabel("Price ($)");
        this.totalSeats = page.getByLabel('Total Seats');
        this.addEvent = page.locator("#add-event-btn");
    }

    async createNewEvent() {
        await this.adminTab.click();
        await this.manageEvent.first().click();
        const title = Date.now();
        const titleName = String(title);
        const eventName = `Test Event ${titleName}`;
        console.log(eventName);

        await this.eventTitle.fill(eventName);
        await this.description.fill("Assing a new event");
        await this.category.selectOption("Sports");
        await this.venue.fill("Noida sector 18");
        await this.city.fill("Noida");
        await this.calender.filter({ hasText: 'Event Date & Time' }).click();
        await this.calender.filter({ hasText: 'Event Date & Time' }).fill("2030-10-04T22:42");
        await this.price.fill("100");
        await this.totalSeats.fill("50");
        await this.addEvent.click();
        return eventName;
    }

    async assertEventName(eventName) {
        await expect(this.page.getByText(eventName)).toBeVisible();
    }

}

module.exports = { CreateNewEventPage }