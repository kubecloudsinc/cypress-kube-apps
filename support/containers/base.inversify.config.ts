import { Container } from 'inversify';
import { IBaseAPI, BASE_SYMBOLS, BaseAPI } from '@shared/base';
import { EMPLOYEE_SYMBOLS, IEmployeeAPI } from '@shared/employee';
import { EmployeeAPI } from '@shared/employee';

export const baseContainer = new Container();

baseContainer.bind<IBaseAPI>(BASE_SYMBOLS.IBaseAPI).to(BaseAPI);

baseContainer.bind<IEmployeeAPI>(EMPLOYEE_SYMBOLS.IEmployeeAPI).to(EmployeeAPI);
