// Cypress.Commands.add('loginByUI', () => {})

import { HTTPMethod } from '@shared/utils';
import { AuthRequest, AuthResponse } from 'shared/auth';

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
