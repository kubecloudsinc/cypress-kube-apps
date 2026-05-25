import { HTTPMethod } from '@shared/constants';
import { Employee } from '@shared/employee';
import { validEmployees } from 'fixtures/api-test.registry';

export type GetEmployeesResponse = Employee[];

describe('Test Employees APIs', () => {
  const employeesEndpoint = '/employees';
  const hostUrl = Cypress.env('hostUrl') as string;

  it('should get success response for all employees', () => {
    cy.getToken({ username: 'kubeuser', password: 'kubeuser' }).then(
      (token) => {
        cy.request<GetEmployeesResponse>({
          url: `${hostUrl}/api${employeesEndpoint}`,
          method: HTTPMethod.GET,
          headers: { authorization: `Bearer ${token}` },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status, 'status code').to.eq(200);

          const employees = response.body as Employee[];
          expect(employees, 'employees list should be an array').to.be.an(
            'array'
          );
          expect(
            employees.length,
            'employees list should contain at least one employee'
          ).to.be.greaterThan(0);

          employees.forEach((employee) => {
            expect(employee.employeeId, 'employee id').to.be.a('number');
            expect(employee.firstName, 'first name').to.be.a('string');
            expect(employee.lastName, 'last name').to.be.a('string');
            expect(employee.salary, 'salary').to.be.a('number');
          });

          validEmployees.forEach((expectedEmployee) => {
            expect(
              employees,
              `employees list should include employee ${expectedEmployee.employeeId}`
            ).to.deep.include(expectedEmployee);
          });
        });
      }
    );
  });
});
