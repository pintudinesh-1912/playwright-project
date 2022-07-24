const { devices } = require('@playwright/test');
const config = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 10000
  },
  fullyParallel: true,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
    screenshot:'only-on-failure',
    trace:'retain-on-failure',
    video:"retain-on-failure",
    trace:'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
};

module.exports = config;
