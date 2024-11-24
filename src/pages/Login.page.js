import { BasePage } from './Base.page';

export class LoginPage extends BasePage {
    userNameInput = this.page.getByTestId('username');

    passwordInput = this.page.getByTestId('password');

    loginButton = this.page.getByTestId('login-button');

    async performLogin(userName, password) {
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
