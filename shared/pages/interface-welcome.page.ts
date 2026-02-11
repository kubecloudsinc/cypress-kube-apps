// shared/pages/interface-welcome.page.ts

export const WelcomePageSelectors = {
  getWelcomeTitle: () => cy.get('[data-testid="welcome-title"]'),
  getWelcomeMessage: () => cy.get('[data-testid="welcome-message"]'),
  getLogoutButton: () => cy.get('[data-testid="logout-button"]'),
};

export interface IWelcomePage {
  openPage(): void;
  assertLoaded(): void;
  clickLogout(): void;
}
