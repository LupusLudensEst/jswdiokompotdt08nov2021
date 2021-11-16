import Page from './page';

class ProfilePage extends Page {
    get iconUser () { return $('img[alt="avatarIcon"]') }
}

export default new ProfilePage();
