export interface ApiError {
  status: string;
  error: string;
  message: string;
  path: string;
}

export const DEFAULT_500_ERROR = 'Internal Server Error';
export const DEFAULT_500_ERROR_MESSAGE = 'Unexpected error';
export const DEFAULT_400_ERROR = 'Bad Request';
export const DEFAULT_ERROR_PATH = '/api/employees/';
export const NON_EXISTENT_EMPLOYEE_ERROR_MESSAGE =
  'Employee not found with id: ';
