import { Employee } from '@shared/employee';

export const validEmployeeId: number[] = [100, 200];

//TODO make it full not partial
// instead of a single object make it an array of valid employees
//  so that a valid employee can be randomly selected
export const expectedEmployee: Partial<Employee> = {
  employeeId: 100,
  firstName: 'Steven',
};

// TODO correct the naming
//   change invalid to non-existent emp id
export const invalidEmployeeId: number[] = [207, 405, 450, 500];

// TODO: add invalid employee id combinations
// empty space, no value (null), with special chars, decimal number
