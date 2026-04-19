import { inject, injectable } from 'inversify';
import { IEmployeeAPI } from './employee.interfaces';
import { EMPLOYEE_ID_REPLACE_STRING, EmployeeEndPoint } from '../constants';
import { BASE_SYMBOLS, IBaseAPI } from '@shared/base';
import { HTTPStatusCode } from '@shared/constants';
import {
  GetEmployeeResponse,
  isGetEmployeeError,
} from '../model/get-employee.model';
import { ApiError } from '@shared/base';

@injectable()
export class EmployeeAPI implements IEmployeeAPI {
  private _baseAPI: IBaseAPI;
  constructor(@inject(BASE_SYMBOLS.IBaseAPI) baseAPI: IBaseAPI) {
    this._baseAPI = baseAPI;
  }
  getEmployee(employeeID: string): Cypress.Chainable<GetEmployeeResponse> {
    return this._baseAPI
      .callAPI<GetEmployeeResponse>(
        EmployeeEndPoint.Employee.replace(
          EMPLOYEE_ID_REPLACE_STRING,
          employeeID
        ),
        {
          method: 'GET',
        }
      )
      .then((response) => {
        if (isGetEmployeeError(response.body)) {
          return response.body as ApiError;
        } else {
          expect(response.status, 'status code').to.eq(HTTPStatusCode.SUCCESS);
          return response.body as GetEmployeeResponse;
        }
      });
  }
}
