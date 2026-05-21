import { Employee } from '@shared/employee';

export const validEmployeeId: number[] = [100, 200];

// Full array of valid employees for testing
export const validEmployees: Employee[] = [
  {
    employeeId: 100,
    firstName: 'Steven',
    lastName: 'King',
    salary: 24000,
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

export const invalidEmployeeIdCombinations: { label: string; value: string }[] =
  [
    { label: 'empty space', value: ' ' },
    { label: 'no value', value: '' },
    { label: 'with special chars', value: '100!' },
    { label: 'decimal number', value: '100.5' },
  ];
