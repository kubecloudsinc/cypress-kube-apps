import { ILoginPage, PAGE_SYMBOLS } from '@shared/pages';
import { IApiInterceptor, UTILS_SYMBOLS } from '@shared/utils';
import { container } from '@support/containers';
import { AuthResponse } from '@shared/models';
import { API_ENDPOINTS, Endpoints, HTTPMethod } from '@shared/constants';

describe('Login test', () => {
  const loginPage: ILoginPage = container.get(PAGE_SYMBOLS.ILoginPage);
  const apiInterceptor: IApiInterceptor = container.get(
    UTILS_SYMBOLS.IApiInterceptor
  );

  it('login to page after intercepting the calls', () => {
    apiInterceptor.interceptAPIEndPoints([Endpoints.AUTH_LOGIN], {
      method: HTTPMethod.POST,
      times: 3,
    });
    loginPage.openPage();
    loginPage.enterCredentials('kubeuser', 'kubeuser');
    loginPage.clickSignIn();

    cy.wait(`@${API_ENDPOINTS[Endpoints.AUTH_LOGIN].url}-${API_ENDPOINTS[Endpoints.AUTH_LOGIN].method}`).then((interception) => {
      const response = interception.response?.body as AuthResponse;
      expect(response).to.have.property('token');
      expect(response).to.have.property('username');
    });
  });
});
