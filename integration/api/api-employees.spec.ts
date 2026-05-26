import { HTTPMethod } from '@shared/constants';
import { Employee } from '@shared/employee';
import { ApiError } from '@shared/base';
import { validEmployees } from 'fixtures/api-test.registry';

export type GetEmployeesResponse = Employee[] | ApiError;

const invalidEmployeesEndpoint = '/employees/invalid-path';

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

  it('should get error response for invalid employees path', () => {
    cy.getToken({ username: 'kubeuser', password: 'kubeuser' }).then(
      (token) => {
        cy.request<GetEmployeesResponse>({
          url: `${hostUrl}/api${invalidEmployeesEndpoint}`,
          method: HTTPMethod.GET,
          headers: { authorization: `Bearer ${token}` },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status, 'status code').to.be.oneOf([404, 400, 500]);
          const apiError = response.body as ApiError;
          expect(apiError.error, 'error').to.be.a('string');
          expect(apiError.message, 'message').to.be.a('string');
          expect(apiError.path, 'invalid path should be reflected').to.contain(
            invalidEmployeesEndpoint
          );
        });
      }
    );
  });

  it('should return unauthorized error for missing authentication', () => {
    cy.request<GetEmployeesResponse>({
      url: `${hostUrl}/api${employeesEndpoint}`,
      method: HTTPMethod.GET,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status, 'status code').to.be.oneOf([401, 403]);
      const body = response.body as any;
      // API may return a plain string or an object missing `message` for 401/403.
      if (typeof body === 'string') {
        expect(body, 'error body as string').to.be.a('string');
        expect(body.toLowerCase(), 'error contains unauthorized').to.include(
          'unauthor'
        );
      } else {
        const apiError = body as ApiError;
        if (typeof apiError.error === 'string') {
          expect(apiError.error, 'error').to.be.a('string');
        }
        if (apiError.message !== undefined && apiError.message !== null) {
          expect(apiError.message, 'message').to.be.a('string');
        } else if (typeof apiError.error === 'string') {
          expect(
            apiError.error.toLowerCase(),
            'fallback error contains unauthorized'
          ).to.include('unauthor');
        }

        if (typeof apiError.path === 'string') {
          expect(apiError.path, 'path should contain endpoint').to.contain(
            employeesEndpoint
          );
        } else if (typeof (response as any).request?.url === 'string') {
          expect(
            (response as any).request.url,
            'request url should contain endpoint'
          ).to.contain(employeesEndpoint);
        }
      }
    });
  });
});
