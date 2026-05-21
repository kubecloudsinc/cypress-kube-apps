import { container } from '@support/containers';
import {
  Employee,
  EMPLOYEE_SYMBOLS,
  GetEmployeeResponse,
  IEmployeeAPI,
  isGetEmployeeError,
} from '@shared/employee';
import {
  ApiError,
  DEFAULT_400_ERROR,
  DEFAULT_500_ERROR,
  DEFAULT_500_ERROR_MESSAGE,
  DEFAULT_ERROR_PATH,
  NON_EXISTENT_EMPLOYEE_ERROR_MESSAGE,
} from '@shared/base';
import {
<<<<<<< latest-may-19
  nonexistentemployeeId,
  expectedEmployee,
  getRandomEmployee,
=======
  invalidEmployeeId,
  expectedEmployee,
>>>>>>> master
} from 'fixtures/api-test.registry';
import { getRandomFromList } from 'support/utils/common-utils';

describe('Test Employee APIs', () => {
  let _employeeAPI: IEmployeeAPI;

  before(() => {
    _employeeAPI = container.get(EMPLOYEE_SYMBOLS.IEmployeeAPI);
  });

  it('should get success response for a valid employee id', () => {
<<<<<<< latest-may-19
    const randomEmployee = getRandomEmployee();
    const validEmployeeId = randomEmployee.employeeId as unknown as string;
=======
    // TODO get the random valid employee from validEmployeeIds list
    const validEmployeeId = expectedEmployee.employeeId as unknown as string;
>>>>>>> master

    _employeeAPI
      .getEmployee(validEmployeeId)
      .then((response: GetEmployeeResponse) => {
        expect(isGetEmployeeError(response), 'api response is error?').to.be
          .false;
        const employee = response as Employee;
        expect(employee.employeeId, 'employee id should match expected').to.eq(
<<<<<<< latest-may-19
          randomEmployee.employeeId
=======
          expectedEmployee.employeeId
>>>>>>> master
        );
        expect(
          employee.firstName,
          'employee first name should match expected'
<<<<<<< latest-may-19
        ).to.eq(randomEmployee.firstName);
        expect(
          employee.lastName,
          'employee last name should match expected'
        ).to.eq(randomEmployee.lastName);
        expect(employee.salary, 'employee salary should match expected').to.eq(
          randomEmployee.salary
        );
=======
        ).to.eq(expectedEmployee.firstName);
        // TODO after making employee full validate the remaining fields also
>>>>>>> master
      });
  });

  it('should get error response for non existing employee id', () => {
<<<<<<< latest-may-19
    const selectedNonExistentEmployeeId = getRandomFromList(
      nonexistentemployeeId
=======
    const nonExistentEmployeeId = getRandomFromList(
      invalidEmployeeId
>>>>>>> master
    ) as number;
    _employeeAPI
      .getEmployee(selectedNonExistentEmployeeId as unknown as string)
      .then((response: GetEmployeeResponse) => {
        expect(isGetEmployeeError(response), 'Is the response an error object')
          .to.be.true;
        const apiError = response as ApiError;
        expect(apiError.status, 'Error status').to.eq(400);
        expect(apiError.path, 'path should contain employee id').contains(
          selectedNonExistentEmployeeId
        );
        expect(apiError.error, 'Error').to.eq(DEFAULT_400_ERROR);
        expect(apiError.message, 'Message').to.eq(
          `${NON_EXISTENT_EMPLOYEE_ERROR_MESSAGE}${selectedNonExistentEmployeeId}`
        );
      });
  });
  // TODO: for loop for all the invalid combinations
  it('should get error response for invalid employee id - empty space', () => {
    const invalidEmployeeId = ' ';
    _employeeAPI
      .getEmployee(invalidEmployeeId)
      .then((response: GetEmployeeResponse) => {
        expect(isGetEmployeeError(response), 'Is the response an error object')
          .to.be.true;
        const apiError = response as ApiError;
        expect(apiError.status, 'Error status').to.eq(500);
        expect(apiError.path, 'path should contain employee id').to.eq(
          DEFAULT_ERROR_PATH
        );
        expect(apiError.error, 'Error').to.eq(DEFAULT_500_ERROR);
        expect(apiError.message, 'Message').to.eq(DEFAULT_500_ERROR_MESSAGE);
      });
  });

  it('should get error response for invalid employee id - empty not space but no value', () => {
    const invalidEmployeeId = '';
    _employeeAPI
      .getEmployee(invalidEmployeeId)
      .then((response: GetEmployeeResponse) => {
        expect(isGetEmployeeError(response), 'Is the response an error object')
          .to.be.true;
        const apiError = response as ApiError;
        expect(apiError.status, 'Error status').to.eq(500);
        expect(apiError.path, 'path should contain employee id').to.eq(
          DEFAULT_ERROR_PATH
        );
        expect(apiError.error, 'Error').to.eq(DEFAULT_500_ERROR);
        expect(apiError.message, 'Message').to.eq(DEFAULT_500_ERROR_MESSAGE);
      });
  });
});
