const { expect } = require('@playwright/test');

class MyBookings {

    constructor(page) {
        this.page = page;
        this.myBookingbtn = page.locator('button').filter({ hasText: 'View My Bookings' });
        this.bookedCards = page.locator('#booking-card');
    }

    async bookingCards() {
        await this.myBookingbtn.click();
        await expect(this.page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings");
        const allBookedCards = await this.bookedCards;
        // Assert 1st booking card is visible
        expect(await allBookedCards.first()).toBeVisible();
        return allBookedCards;
    }

    async myBookedCard(allBookedCards, bookingref, eventName) {
        //   // Assert card with your booking ref
          const myBookingCard = await allBookedCards.locator('.booking-ref').filter({ hasText: bookingref });
          await expect(myBookingCard).toHaveText(bookingref);
          console.log(await myBookingCard.textContent());
          const confirmYourEventName = await allBookedCards.getByRole('heading', { name: eventName })
          console.log(await confirmYourEventName.textContent());
          await expect(confirmYourEventName).toHaveText(eventName);
    }
}

module.exports = { MyBookings }