import { container } from '@support/containers';
import {
  EMPLOYEE_SYMBOLS,
  GetEmployeeResponse,
  IEmployeeAPI,
} from '@shared/employee';
import { ApiError } from '@shared/base';

describe('Test Employee APIs', () => {
  let _employeeAPI: IEmployeeAPI;

  before(() => {
    _employeeAPI = container.get(EMPLOYEE_SYMBOLS.IEmployeeAPI);
  });
  it('should get error response for invalid employee id', () => {
    _employeeAPI.getEmployee('100,').then((response: GetEmployeeResponse) => {
      const error = response as ApiError;
      expect(error.status).to.eq(500);
    });
  });
});
