import { inject, injectable } from 'inversify';
import { IBaseAPI } from './base.interfaces';
import { ICommonUtils, UTILS_SYMBOLS } from '@shared/utils';

@injectable()
export class BaseAPI implements IBaseAPI {
  private _commonUtils: ICommonUtils;
  constructor(@inject(UTILS_SYMBOLS.ICommonUtils) commonUtils: ICommonUtils) {
    this._commonUtils = commonUtils;
  }

  callAPI<T>(
    endPoint: string,
    requestOptions?: Partial<Cypress.RequestOptions>
  ): Cypress.Chainable<Cypress.Response<T>> {
    const correlationId = this._commonUtils.getRandomUUID();
    const urlHost = Cypress.env('hostUrl') as string;

    return cy.getToken({ username: 'kubeuser', password: 'kubeuser' }).then((token) => {
      return cy.request<T>(
        Cypress._.merge(
          {
            url: `${urlHost}/api${endPoint}`,
            failOnStatusCode: false,
            headers: {
              authorization: `Bearer ${token}`,
              'x-correlation-id': correlationId,
            },
          },
          requestOptions
        )
      );
    });
  }
}
