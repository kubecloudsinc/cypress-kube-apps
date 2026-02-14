export interface AuthRequest {
  username: string;
  password: string;
  client_id?: string;
  client_secret?: string;
  grant_type?: string;
}

export interface AuthResponse {
  token?: string;
  username?: string;
  errorCode?: string;
  errorDescription?: string;
  fieldErrors?: FieldError[];
}

export interface FieldError {
  field: string;
  description: string;
}
