import 'reflect-metadata';
import { CyHttpMessages, DictMatcher } from 'cypress/types/net-stubbing';
import IncomingHttpRequest = CyHttpMessages.IncomingHttpRequest;

export interface IApiInterceptor {
  interceptAPIEndPoints(
    endPoints: string[],
    apiInterceptDetails?: ApiInterceptDetails
  ): void;
  waitForResponse(alias: string): void;
}

export interface ApiInterceptDetails {
  times?: number;
  method?: string;
  requestHandler?(requestHandler: IncomingHttpRequest): void;
  query?: DictMatcher<string>;
}

export interface ICommonUtils {
  getRandomUUID(): string;
}
