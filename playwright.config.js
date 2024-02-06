// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects:
  [
    {
      name: "Chrome",
      use:
      {
        browserName:"chromium",
        headless:false,
        screenshot:'only-on-failure',
        video:'off',
        viewport:{height:1080, width:1920}
      }
    },
    {
      name: "Safari",
      use:
      {
        browserName:"webkit",
        headless:true,
        screenshot: 'only-on-failure',
        video: 'off'
      }
    }
      
  ]
  
});

