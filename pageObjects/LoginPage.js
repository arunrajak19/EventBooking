class LoginPage {

    constructor(page) {
        this.page = page;
        this.userEmailId = page.getByPlaceholder("you@email.com");
        this.userPassword = page.getByLabel("Password");
        this.logInbtn = page.locator("#login-btn");
        // this.page.waitForLoadState('networkidle');
    }

    async gotoPage() {
        await this.page.goto("https://eventhub.rahulshettyacademy.com");
    }

    async login(emailId, password) {
        await this.userEmailId.fill(emailId);
        await this.userPassword.fill(password);
        await this.logInbtn.click();
        
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {LoginPage}