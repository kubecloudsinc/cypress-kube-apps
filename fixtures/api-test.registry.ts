import { Employee } from '@shared/employee';

export const validEmployeeId: number[] = [100, 200];

<<<<<<< latest-may-19
// Full array of valid employees for testing
export const validEmployees: Employee[] = [
  {
    employeeId: 100,
    firstName: 'Steven',
    lastName: 'King',
    salary: 60000,
  },
  {
    employeeId: 200,
    firstName: 'Jennifer',
    lastName: 'Whalen',
    salary: 4400,
  },
];

/**
 * Get a random valid employee from the test data
 */
export const getRandomEmployee = (): Employee => {
  const randomIndex = Math.floor(Math.random() * validEmployees.length);
  return validEmployees[randomIndex];
};

// For backward compatibility, export a single employee object
export const expectedEmployee: Employee = validEmployees[0];

export const nonexistentemployeeId: number[] = [207, 405, 450, 500];
=======
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
>>>>>>> master

// TODO: add invalid employee id combinations
// empty space, no value (null), with special chars, decimal number
