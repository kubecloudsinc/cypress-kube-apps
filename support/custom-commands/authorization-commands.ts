// Cypress.Commands.add('loginByUI', () => {})

import { AuthRequest, AuthResponse } from '@shared/models';
import { HTTPMethod } from '@shared/constants';

Cypress.Commands.add('getToken', (authRequest: AuthRequest) => {
  return cy
    .request<AuthResponse>({
      url: 'The auth url',
      body: authRequest,
      method: HTTPMethod.POST,
    })
    .then((response) => {
      return response.body.access_token;
    });
});
