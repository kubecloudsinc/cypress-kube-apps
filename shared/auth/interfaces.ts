export interface AuthRequest {
  client_id: string;
  client_secret: string;
  grant_type?: string;
}

export interface AuthResponse {
  access_token: string;
}
