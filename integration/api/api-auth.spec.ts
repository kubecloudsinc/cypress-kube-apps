import { AuthResponse } from '@shared/models';
import { API_ENDPOINTS, Endpoints, HTTPMethod } from '@shared/constants';

describe('Get token for login', () => {
  it('should get token for login successfully', () => {
    cy.getToken({ username: 'kubeuser', password: 'kubeuser' }).then(
      (token) => {
        expect(token).to.be.a('string');
        console.log(token);
      }
    );
  });
  it('should throw error on empty password', () =>{
    const authRequest = {username: 'kubeuser', password: ''};
    cy.request<AuthResponse>({
      url: API_ENDPOINTS[Endpoints.AUTH_LOGIN].url,
      body: authRequest,
      method: HTTPMethod.POST,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status, 'status code').to.eq(400);
      const responseBody = response.body as AuthResponse;
      expect(responseBody.errorCode, 'error code should be 400').to.eq(
        'INVALID_LOGIN_REQUEST'
      );
      expect(responseBody.errorDescription, 'error description').to.eq(
        'Invalid login request'
      );
      expect(responseBody.fieldErrors, 'field errors').to.deep.equal([
        { field: 'password', description: 'password is required' },
      ]);
    });
    }
  );
});
