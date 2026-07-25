// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout : 30 * 1000,
  expect : {
    timeout : 20 * 1000,
  },
  reporter : 'html',
  use: {

    browserName : 'chromium',
    headless : true,
    screenshot : 'on',
    trace : 'on' 
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  
  },


});

// module.exports = confiq

