// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 30 * 1000,
  expect: {
    timeout: 20 * 1000,
  },
  reporter: 'html',
  projects: [
    {
      name: 'chrome',
      use: {

        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'off',
        trace: 'on',
        // ...devices['iPhone 17 Pro Max']
        // trace : 'retain-on-failure'
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

      }
    },

    {
      name: 'safari',
      use: {

        browserName: 'webkit',
        headless: true,
        screenshot: 'off',
        trace: 'on'
      }
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'
      }
    }
  ]
});

// module.exports = confiq

