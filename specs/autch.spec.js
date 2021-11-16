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
        const actual = await $("h4").getText(); // "//div[@class='col-md-8']"  'h4' '.col-md-8 > h4' // "//*[normalize-space(.) = 'Reports']" //*[.="Don’t have an account? Create one."] //*[normalize-space(.)="Don’t have an account? Create one."]
        const expected = 'Reports';
        console.log(`Actual text is here: "${actual}" VS expected: "${expected}"`);
        await  expect($("//div[@class='col-md-8']"))
            .toHaveText(expected)

    });
});


// login: gurovvic@gmail.com password: MyUSA2016!@