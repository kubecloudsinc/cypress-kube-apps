export const LoginPageSelectors = {
  getUsernameInput: () => cy.get('[data-test-id="login-username-input"]'),
  getPasswordInput: () => cy.get('[data-test-id="login-password-input"]'),
  getLogInButton: () => cy.get('[data-test-id="login-submit-button"]'),
};

export interface ILoginPage {
  enterCredentials(username: string, password: string): void;
  openPage(): void;
  clickSignIn(): void;
}
