exports.config = {
    specs: [
        './specs/**/*.spec.js'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://kompot.us',

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    services: ['devtools'],
    reporters: ['spec'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async function (capabilities, specs, browser) {
        browser.addCommand('smartClear', async function() {
            const text = await this.getValue();
            for (let char of text)
                await this.keys('Backspace');
        }, true);
    },
}