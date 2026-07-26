const { expect } = require('@playwright/test');

class BookTickets {

    constructor(page) {
        this.ticketCount = page.locator('#ticket-count');
        this.fullName = page.getByLabel("Full Name");
        this.customerEmail = page.locator("#customer-email");
        this.phoneNumber = page.getByPlaceholder("+91 98765 43210");
        this.confirmBooking = page.getByText('Confirm Booking');
    }

    async assertTicketCountIsOne() {
        // Assert ticket count is 1 by default
        await expect(await this.ticketCount).toHaveText("1");

    }

    async fillDetails() {

        await this.fullName.fill("Ronaldo");
        await this.customerEmail.fill("email@gmail.com");
        await this.phoneNumber.fill("1234567890");
        await this.confirmBooking.click();
    }
}

module.exports = { BookTickets }