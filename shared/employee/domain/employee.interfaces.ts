import { GetEmployeeResponse } from '../model/get-employee.model';

export interface IEmployeeAPI {
  getEmployee(employeeID: string): Cypress.Chainable<GetEmployeeResponse>;
}
