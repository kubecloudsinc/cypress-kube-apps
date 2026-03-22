import { container } from '@support/containers';
import {
  Employee,
  EMPLOYEE_SYMBOLS,
  GetEmployeeResponse,
  IEmployeeAPI,
} from '@shared/employee';

describe('Smoke Test Employee APIs', () => {
  let _employeeAPI: IEmployeeAPI;

  before(() => {
    _employeeAPI = container.get(EMPLOYEE_SYMBOLS.IEmployeeAPI);
  });
  it('should get success response for get employee api', () => {
    _employeeAPI.getEmployee('100').then((response: GetEmployeeResponse) => {
      const employee = response as Employee;
      expect(employee.employeeId).to.be.a('number');
      expect(employee.employeeId, 'employee id should be 100').to.eq(100);
      expect(employee.firstName, 'employee first name').to.eq('Steven');
    });
  });
});
