describe('Auth', function () {
    it ('Succesful log in', async function () {
        await browser.url('/user/login');
        await expect ($('.login-form-button'))
            .toBeDisabled();
        await $('[qa-id="email"]')
            .setValue('gurovvic@gmail.com');
        await $('[qa-id="password"]')
            .setValue('MyUSA2016!@');
        await $('[class*="login-form-button"]')
            .click();
        await expect($('img[alt="avatarIcon"]'))
            .toBeDisplayed();
    });
});


// login: gurovvic@gmail.com password: MyUSA2016!@