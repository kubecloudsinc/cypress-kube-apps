import { AuthRequest } from 'shared/auth';

declare global {
  namespace Cypress {
    interface Chainable {
      // the custom commands definition goes here
      // loginByUI(username: string, password: string): void;
      getToken(authRequest: AuthRequest): Chainable<string>;
    }
  }
}
