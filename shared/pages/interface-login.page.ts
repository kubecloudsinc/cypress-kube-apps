export const LoginPageSelectors = {
  getUsernameInput: () => cy.get('#Email'),
  getPasswordInput: () => cy.get('#Password'),
  getLogInButton: () => cy.get('input[value="Log in"]'),
  getLoginLink: () => cy.get('a.ico-login'),
};

export interface ILoginPage {
  enterCredentials(username: string, password: string): void;
  openPage(): void;
  clickLogIn(): void;
}
