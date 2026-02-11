import { injectable } from 'inversify';
import { ILoginPage, LoginPageSelectors } from './interface-login.page';

@injectable()
export class LoginPage implements ILoginPage {
  enterCredentials(username: string, password: string): void {
    LoginPageSelectors.getUsernameInput().type(username);
    LoginPageSelectors.getPasswordInput().type(password);
  }
  openPage() {
    console.log("This is a test")
    cy.visit('/');
  }
  clickSignIn() {
    LoginPageSelectors.getLogInButton().click();
  }
}
