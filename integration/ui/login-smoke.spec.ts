import { ILoginPage } from '@shared/pages';
import { HTTPMethod, IApiInterceptor, UTILS_SYMBOLS } from '@shared/utils';
import { PAGE_SYMBOLS } from 'shared/pages/page.symbol';
import { container } from 'support/containers/inversify.config';

describe('Login test', () => {
  const loginPage: ILoginPage = container.get(PAGE_SYMBOLS.ILoginPage);
  const apiInterceptor: IApiInterceptor = container.get(
    UTILS_SYMBOLS.IApiInterceptor
  );

  it('login to page after intercepting the calls', () => {
    loginPage.enterCredentials('', '');
    apiInterceptor.interceptAPIEndPoints([''], {
      method: HTTPMethod.POST,
      times: 3,
    });
  });
});
