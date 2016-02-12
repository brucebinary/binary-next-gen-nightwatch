module.exports = function(browser) {
    return {
        visit: function() {
            var data = browser.globals.pages.videos;
            var login = browser.globals.pages.login;
            return browser
                .verifyLogin(login.token,function(result){
                    console.log("Login verification ");
                })
                .url(data.url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.tokenInput)
                .verify.elementPresent('ul.video-list,.row')
        },
    };

}