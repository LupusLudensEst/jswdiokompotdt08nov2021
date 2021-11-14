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
        const a = await $("//div[@class='col-md-8']").getText(); // "//div[@class='col-md-8']"  'h4' '.col-md-8 > h4' // "//*[normalize-space(.) = 'Reports']" //*[.="Don’t have an account? Create one."] //*[normalize-space(.)="Don’t have an account? Create one."]


        console.log(`$Text is here: ${a}`);
        await  expect($("//div[@class='col-md-8']"))
            .toHaveText('Reports')

    });
});


// login: gurovvic@gmail.com password: MyUSA2016!@