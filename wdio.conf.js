exports.config = {
    specs: [
        './specs/**/*.*.js'
    ],
    exclude: [
        './specs/example.spec.js', './specs/example.e2e.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://kompot.us/user/login',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['devtools'],
    framework: 'mocha',
    reporters: [['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
