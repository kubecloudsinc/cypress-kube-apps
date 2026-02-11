import { HTTPMethod } from './http.constants';
import { ApiEndpointConfig } from '@shared/models';

export enum Endpoints {
  AUTH_LOGIN = '/api/auth/login',
}

export const API_ENDPOINTS: Record<Endpoints, ApiEndpointConfig> = {
  [Endpoints.AUTH_LOGIN]: {
    url: Endpoints.AUTH_LOGIN,
    method: HTTPMethod.POST,
  },
};