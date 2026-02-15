import { baseE2EConfig, baseE2ESetupNodeEvents } from './cypress.base.config';
import { defineConfig } from 'cypress';
// import PluginEvents = Cypress.PluginEvents;
// import PluginConfigOptions = Cypress.PluginConfigOptions;

export default defineConfig({
  e2e: {
    ...baseE2EConfig,
    baseUrl: 'http://www.csrkreddy.com',
    env: {
      ...baseE2EConfig.env,
    },
  },
  setupNodeEvents: (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
    baseE2ESetupNodeEvents(on, config);
    // any environment specific data is here
    // call the api in the method to get the environment data
    // const returnData = setVaultDataByEnv();
    // const returnData = function that returns a promise;
    // return returnData;
    // TODO use an api to get the config data to be added to environment
  },
});
