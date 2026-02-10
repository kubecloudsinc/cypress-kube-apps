
import { defineConfig } from 'cypress';
import installLogsPrinter from 'cypress-terminal-report/src/installLogsPrinter';

export function baseE2ESetupNodeEvents(on: any, config: any): any {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@cypress/grep/src/plugin')(config);

  installLogsPrinter(on, {
    printLogsToConsole: 'always',
    printLogsToFile: 'always',
    outputRoot: 'cypress/results/detailsCommandLogs',
    outputTarget: {
      'detailCommandLogs.json': 'json',
    },
  });
  on('task', {
    log(message: any): void {
      console.log(message);
    },
  });
  return config;
}

export const baseE2EConfig = {
  chromeWebSecurity: false,
  pageLoadTimeout: 120000,
  recoverFromRenderCrashes: true,
  restartBrowserBetweenSpecFiles: true,
  nodeVersion: 'system',
  numTestsKeptInMemory: 100,
  watchForFileChanges: false,
  viewportHeight: 1500,
  viewportWidth: 1650,
  requestTimeout: 60000,
  responseTimeout: 60000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[datetime]-[name]-report',
    overwrite: false,
    html: false,
    json: true,
  },
  retries: {
    runMode: 2,
  },
  screenshotOnRunFailure: false,
  screenshotFolder: 'cypress/results/screenshots',
  video: false,
  videosFolder: 'cypress/resuls/video',
  supportFile: './support/index.ts',
  specPattern: './integration/**/*.spec.ts',
  fixturesFolder: './fixtures',
  downloadsFolder: './downloads',
  defaultCommandTimeout: 60000,
  experimentalOriginDependencies: true,
  setupNodeEvents: baseE2ESetupNodeEvents,
  env: {},
};

export default defineConfig({ e2e: baseE2EConfig });
