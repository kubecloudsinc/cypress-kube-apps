import { container } from '@support/containers';
import {
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

describe('Test Employee APIs', () => {
  let _employeeAPI: IEmployeeAPI;

  before(() => {
    _employeeAPI = container.get(EMPLOYEE_SYMBOLS.IEmployeeAPI);
  });
  it('should get error response for non existing employee id', () => {
    // TODO instead of hardcoding 450, write a function in utils
    const nonExistentEmployeeId = '450';
    _employeeAPI
      .getEmployee(nonExistentEmployeeId)
      .then((response: GetEmployeeResponse) => {
        expect(isGetEmployeeError(response), 'Is the response an error object')
          .to.be.true;
        const apiError = response as ApiError;
        expect(apiError.status, 'Error status').to.eq(400);
        expect(apiError.path, 'path should contain employee id').contains(
          nonExistentEmployeeId
        );
        expect(apiError.error, 'Error').to.eq(DEFAULT_400_ERROR);
        expect(apiError.message, 'Message').to.eq(
          `${NON_EXISTENT_EMPLOYEE_ERROR_MESSAGE}${nonExistentEmployeeId}`
        );
      });
  });
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
});
