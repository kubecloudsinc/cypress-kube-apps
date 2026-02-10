import 'reflect-metadata';
import './custom-commands/authorization-commands';
import 'cypress-wait-until';
import installLogsCollector from 'cypress-terminal-report/src/installLogsCollector';

installLogsCollector();

before(() => {});

beforeEach(() => {});

after(() => {});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
