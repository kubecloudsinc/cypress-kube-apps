import { injectable } from 'inversify';
import { ApiInterceptDetails, IApiInterceptor } from './interfaces';
import { RouteMatcherOptions } from 'cypress/types/net-stubbing';
import { HTTPMethod } from '@shared/constants';

@injectable()
export class ApiInterceptor implements IApiInterceptor {
  interceptAPIEndPoints(
    endPoints: string[],
    apiInterceptDetails?: ApiInterceptDetails
  ): void {
    cy.wrap(endPoints).each((endPoint) => {
      console.log(`trying to intercept the end point: ${endPoint}`);
      const options: RouteMatcherOptions = {
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
      console.log(`intercepted the end point: ${endPoint}-${options.method}`);
    });
  }
  waitForResponse(alias: string): void {
    console.log(`waiting for the response for alias: ${alias}`);
    cy.wait(`@${alias}`);
  }
}
