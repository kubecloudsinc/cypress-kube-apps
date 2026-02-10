import { injectable } from 'inversify';
import { ApiInterceptDetails, IApiInterceptor } from './interfaces';
import { RouteMatcherOptions } from 'cypress/types/net-stubbing';
import { HTTPMethod } from './constants';

@injectable()
export class ApiInterceptor implements IApiInterceptor {
  interceptAPIEndPoints(
    endPoints: string[],
    apiInterceptDetails?: ApiInterceptDetails
  ): void {
    cy.wrap(endPoints).each((endPoint) => {
      let options: RouteMatcherOptions = {
        url: `**${endPoint}*`,
        times: apiInterceptDetails?.times || 1,
        query: apiInterceptDetails?.query,
      };
      if (apiInterceptDetails?.method) {
        options.method = apiInterceptDetails.method;
      } else {
        options.method = HTTPMethod.GET;
      }
      cy.intercept(options, apiInterceptDetails?.requestHandler).as(
        `${endPoint}-${options.method}` as unknown as string
      );
    });
  }
  waitForResponse(alias: string): void {
    cy.wait(`@${alias}`);
  }
}
