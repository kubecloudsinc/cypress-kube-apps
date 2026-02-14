
import { AuthRequest, AuthResponse } from '@shared/models';
import { API_ENDPOINTS, Endpoints, HTTPMethod } from '@shared/constants';

Cypress.Commands.add('getToken', (authRequest: AuthRequest) => {
  return cy
    .request<AuthResponse>({
      url: API_ENDPOINTS[Endpoints.AUTH_LOGIN].url,
      body: authRequest,
      method: HTTPMethod.POST,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      const responseBody = response.body as AuthResponse;
      return responseBody.token!;
    });
});
