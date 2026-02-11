import { Endpoints, HTTPMethod } from '@shared/constants';

export type ApiEndpointConfig = {
  url: Endpoints;
  method: HTTPMethod;
};