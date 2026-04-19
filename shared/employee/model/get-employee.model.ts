import { ApiError } from '@shared/base';

export interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  salary: number;
}

export type GetEmployeeResponse = Employee | ApiError;
export type GetEmployeesResponse = Employee[] | ApiError;

export const isGetEmployeeError = (
  result: GetEmployeeResponse
): result is ApiError => {
  return (result as ApiError).error !== undefined;
};
