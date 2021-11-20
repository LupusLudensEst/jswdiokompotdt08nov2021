import LoginPage from '../pages/login.page'
import ProfilePage from '../pages/profile.page'

describe('Auth', function () {
    beforeEach(async function () {
        await LoginPage.open();
    });

    it ('Successful log in', async function () {
        await expect(LoginPage.buttonSubmit)
            .toBeDisabled();
        await LoginPage.login('gurovvic@gmail.com', 'MyUSA2016!@')
        await expect(ProfilePage.iconUser)
            .toBeDisplayed();

        const actual = await $("h4").getText(); // "//div[@class='col-md-8']"  'h4' '.col-md-8 > h4' // "//*[normalize-space(.) = 'Reports']" //*[.="Don’t have an account? Create one."] //*[normalize-space(.)="Don’t have an account? Create one."]
        const expected = 'Reports';
        console.log(`Actual text is here: "${actual}" VS expected: "${expected}"`);
        await  expect($("//div[@class='col-md-8']"))
            .toHaveText(expected)
    });
});