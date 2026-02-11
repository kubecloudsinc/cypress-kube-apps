import { inject, injectable } from 'inversify';
import { APIOption, IBase } from './base.interfaces';
import { ICommonUtils, UTILS_SYMBOLS } from '@shared/utils';
import { EMPTY } from '@shared/constants';

@injectable()
export class BaseClass implements IBase {
  private _commonUtils: ICommonUtils;
  constructor(@inject(UTILS_SYMBOLS.ICommonUtils) commonUtils: ICommonUtils) {
    this._commonUtils = commonUtils;
  }

  callAPI<T>(
    endPoint: string,
    apiOptions: APIOption,
    requestOptions?: Partial<Cypress.RequestOptions>
  ): Cypress.Chainable<Cypress.Response<T>> {
    let urlHost = EMPTY;
    const correlationId = this._commonUtils.getRandomUUID();
    urlHost = Cypress.env('external host from env config implement this');
    return cy.getToken({ username: '', password: '' }).then((token) => {
      return cy.request<T>(
        Cypress._.merge(
          {
            url: `the url host ${endPoint},`,
            failOnStatusCode: false,
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
          requestOptions
        )
      );
    });
  }
}
